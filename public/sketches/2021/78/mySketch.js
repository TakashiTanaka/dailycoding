let bgcolor = 0;
let osc = [];
let trackNum = 1;
let amplitude;
let level;
let bpm = 20;
let nextKlack = 0;
let time;
let note;
let cir;

function setup() {
  userStartAudio();
  // noCursor();
  createCanvas(1000, 1000);
  background(bgcolor);
  rectMode(CENTER);
  colorMode(HSB);
  strokeCap(SQUARE);
  textSize(20);
  textFont('helvetica');
  angleMode(DEGREES);
  cir = new drawEllipse();
  amplitude = new p5.Amplitude();
  for (let i = 0; i < trackNum; i++) {
    osc.push(new Osc('sawtooth'));
    osc[i].startOsc();
    osc[i].createEnv();
    osc[i].setEnv(0.01, 0.1, 0.2, 0.2, 0.05, 0.0);
  }
}

function draw() {
  note = map(mouseY, height, 0, 36, 47);
  note = int(note);
  bpm = map(mouseX, 0, width, 30, 300);
  bpm = int(bpm);
  level = amplitude.getLevel();


  background(bgcolor);
  cir.display();
  noStroke();
  fill(100);
  text(`BPM = ${bpm}`, 40, 50);
  text(`Note = ${note}`, 40, 80);

  time = millis();
  if (time > nextKlack) {
    for (let i = 0; i < trackNum; i++) {
      osc[i].setEnv(0.01, 0.1, 0.2, 0.2, 0.05, 0.0);
      osc[0].playOsc(note);
      nextKlack = time + 60000 / bpm;
    }
  }
}


class Osc {
  constructor(oscType) {
    this.osc = new p5.Oscillator(oscType);
  }

  startOsc() {
    this.osc.start();
    this.osc.amp(0);
    amplitude.setInput(this.osc);
  }

  playOsc(midinote) {
    this.freqValue = midiToFreq(midinote);
    this.osc.freq(this.freqValue);
    this.envelope.play(this.osc);
  }

  createEnv() {
    this.envelope = new p5.Envelope();
  }

  setEnv(attack, decay, sustain, release, aLevel, rLevel) {
    this.envelope.setADSR(attack, decay, sustain, release);
    this.envelope.setRange(aLevel, rLevel);
  }

}

class drawEllipse {

  constructor() {
    this.circlePointXPos = [];
    this.circlePointYPos = [];
    this.circleRoughness = 6;
    this.circleNoiseSpeed = 0.01;
    this.circleNoiseLevel = width * 0.5;
    this.circleCenterXpos = width * 0.5;
    this.circleCenterYpos = height * 0.5;
    this.firstCircleWidth = width * 0.2;
    this.firstCircleHeight = height * 0.2;
    strokeWeight(2);
  }

  createEllipsePoint(circleCenterXPos, circleCenterYPos, circleWidth, circleHeight, noiseValue) {
    this.circleCenterXPos = circleCenterXPos;
    this.circleCenterYPos = circleCenterYPos;
    this.circleWidth = circleWidth;
    this.circleHeight = circleHeight;
    this.noiseValue = noiseValue;
    for (let i = 0; i <= 360 / this.circleRoughness; i++) {
      this.circlePointXPos[i] =
        this.circleCenterXPos + this.circleWidth * cos(i * this.circleRoughness) +  //Define base circlePointXPos
        this.circleNoiseLevel * cos(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed) * level * 50; //Define noise value circlePointXPos
      this.circlePointYPos[i] =
        this.circleCenterYPos + this.circleHeight * sin(i * this.circleRoughness) + //Define base circlePointYPos
        this.circleNoiseLevel * sin(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed) * level * 50; //Define noise value circlePointYPos
    }
  }

  createEllipse() {
    beginShape();
    for (let i = 0; i < 360 / this.circleRoughness; i++) {
      curveVertex(this.circlePointXPos[i], this.circlePointYPos[i]);
    }
    curveVertex(this.circlePointXPos[0], this.circlePointYPos[0]);
    curveVertex(this.circlePointXPos[1], this.circlePointYPos[1]);
    curveVertex(this.circlePointXPos[2], this.circlePointYPos[2]);
    endShape();
  }

  display() {
    noFill();
    stroke(100);
    this.circleNum = 1;
    for (let i = 0; i < this.circleNum; i++) {
      this.createEllipsePoint(
        this.circleCenterXpos,
        this.circleCenterYpos,
        this.firstCircleWidth - i * 20,
        this.firstCircleHeight - i * 20,
        5);
      this.createEllipse();
    }
  }
}
