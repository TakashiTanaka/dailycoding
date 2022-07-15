let bgcolor = 0;
let osc = [];
let trackNum = 6;
let amplitude;
let level;
let bpm = 20;
let min = 60000;
let nextKlack = min / bpm;
let time;
let note;
let cir;
let attack = 0.6;
let decay = 0.6;
let sustain = 0.9;
let release = 0.9;

function setup() {
  userStartAudio();
  noCursor();
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
    osc.push(new Osc('sine'));
    osc[i].startOsc();
    osc[i].createEnv();
    osc[i].setEnv(attack, decay, sustain, release, 0.02, 0.0);
  }
  // noLoop();
}

function draw() {
  note = 60 + int(random(-12, 12));
  level = amplitude.getLevel();


  background(bgcolor);
  cir.display();
  noStroke();
  fill(100);
  // text(`BPM = ${bpm}`, 40, 50);
  // text(`Note = ${note}`, 40, 80);

  time = millis();
  if (time > nextKlack) {
    for (let i = 0; i < trackNum; i++) {
      osc[i].setEnv(attack, decay, sustain, release, 0.02, 0.0);
      osc[i].playOsc(note + i * 2);
    }
    nextKlack = time + min / bpm;
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
    // this.osc.freq(this.freqValue - 100 - 50 * abs(sin(frameCount * 0.5)), 0.2);
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
    this.circleRoughness = 20;
    this.circleNoiseSpeed = 0.01;
    this.circleNoiseLevel = width * 0.5;
    this.circleCenterXpos = width * 0.5;
    this.circleCenterYpos = height * 0.5;
    this.firstCircleWidth = width * 0.2;
    this.firstCircleHeight = height * 0.2;
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
        this.circleNoiseLevel * cos(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed) * level * 30; //Define noise value circlePointXPos
      this.circlePointYPos[i] =
        this.circleCenterYPos + this.circleHeight * sin(i * this.circleRoughness) + //Define base circlePointYPos
        this.circleNoiseLevel * sin(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed) * level * 30; //Define noise value circlePointYPos
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
    stroke(100, trackNum / 10);
    this.circleNum = trackNum;
    for (let i = 0; i < this.circleNum; i++) {
      this.createEllipsePoint(
        this.circleCenterXpos,
        this.circleCenterYpos,
        this.firstCircleWidth,
        this.firstCircleHeight,
        5 + i);
      this.createEllipse();
    }
  }
}

// function mouseClicked() {
//   if (isLooping()) {
//     noLoop();
//   } else {
//     loop();
//   }
// }