let bgcolor = 0;
let strokeColor = 100;
let ns = [];
let trackNum = 1;
let amplitude;
let level;
let attack = 0.1;
let decay = 0.1;
let sustain = 0.2;
let release = 0.0;
let type = 'White';
let cir;

function setup() {
  userStartAudio();
  noCursor();
  createCanvas(1000, 1000);
  background(bgcolor);
  rectMode(CENTER);
  colorMode(HSB);
  strokeCap(SQUARE);
  angleMode(DEGREES);
  textSize(20);
  textFont('helvetica');
  cir = new drawEllipse();
  amplitude = new p5.Amplitude();
  for (let i = 0; i < trackNum; i++) {
    ns.push(new Noise());
    ns[i].startNoise();
    ns[i].createEnv();
  }
}

function draw() {
  level = amplitude.getLevel();
  background(bgcolor);
  noStroke();
  fill(strokeColor);
  text(`Type = ${type}`, 40, 50);
  cir.display();
}


class Noise {
  constructor() {
    this.ns = new p5.Noise();
  }

  startNoise() {
    this.ns.start();
    this.ns.amp(0);
    amplitude.setInput(this.ns);
  }

  playNoise() {
    this.envelope.play(this.ns);
  }

  createEnv() {
    this.envelope = new p5.Envelope();
  }

  setEnv(attack, decay, sustain, release, aLevel, rLevel) {
    this.envelope.setADSR(attack, decay, sustain, release);
    this.envelope.setRange(aLevel, rLevel);
  }

  changeType(type) {
    this.ns.setType(type);
  }

}

class drawEllipse {

  constructor() {
    this.circlePointXPos = [];
    this.circlePointYPos = [];
    this.circleRoughness = 2;
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
    stroke(strokeColor);
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

function mouseClicked() {
  for (let i = 0; i < trackNum; i++) {
    ns[i].setEnv(attack, decay, sustain, release, 0.05, 0.0);
    ns[0].playNoise();
  }
}

function keyTyped() {
  if (key === 'w') {
    ns[0].changeType('white');
    strokeColor = 100;
    type = 'White';
  } else if (key === 'p') {
    ns[0].changeType('pink');
    strokeColor = '#FF6CE6';
    type = 'Pink';
  } else if (key === 'b') {
    ns[0].changeType('brown');
    strokeColor = '#874600';
    type = 'Brown';
  }
}