let osc;
let oscType = 'sine';
let envelope;
let attack = 0.01;
let decay = 0.1;
let sustain = 0.1;
let release = 0.1;
let rectangle = [];
let rectNum = 10;

function setup() {
  noCursor();
  userStartAudio();
  createCanvas(1000, 1000);
  colorMode(HSB);
  rectMode(CENTER);
  osc = new p5.Oscillator(oscType);
  envelope = new p5.Envelope();
  osc.start();
  osc.amp(0);
  envelopeSetting();
  background(0);
  for (let i = 0; i < rectNum; i++)
    rectangle.push(new drawRect(i * 100 + 50));
  noLoop();
}

function draw() {
  background(0);
  for (let i = 0; i < rectNum; i++)
    rectangle[i].play();
}

class drawRect {
  constructor(y) {
    this.x = width / 2;
    this.y = y;
    this.sy = height / 2;
    this.rectWidth = random(20, 100);
    this.rectHeight = 100;
    this.minSpeedSeed = 2;
    this.maxSpeedSeed = 20;
    this.sx = random(-random(this.minSpeedSeed, this.maxSpeedSeed), random(this.minSpeedSeed, this.maxSpeedSeed));
    this.pallet = { black: 0, gray: 30, gray2: 60, white: 95 };
    this.pitch = map(this.y, height, 0, 60, 72);
    noStroke();
  }

  display() {
    rect(this.x, this.y, this.rectWidth, this.rectHeight);
  }

  collision() {
    if (this.x >= width - this.rectWidth / 2) {
      fill(0, 100, 100);
      this.sx = this.sx * -1;
      playOscillator(this.pitch);
    } if (this.x <= 0 + this.rectWidth / 2) {
      fill(0, 100, 100);
      this.sx = this.sx * -1;
      playOscillator(this.pitch - 12);
    }
  }

  update() {
    fill(this.pallet.white);
    this.x = this.x + this.sx;
  }

  play() {
    this.collision();
    this.display();
    this.update();
  }
}

function playOscillator(midinote) {
  let freqValue = midiToFreq(midinote + 24);
  osc.freq(freqValue);
  envelopeSetting();
  envelope.play(osc);
}

function envelopeSetting() {
  envelope.setADSR(attack, decay, sustain, release);
  envelope.setRange(0.07, 0.0);
}

function mouseClicked() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}