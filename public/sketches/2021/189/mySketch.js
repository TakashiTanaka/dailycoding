let osc;
let oscType = 'sine';
let envelope;
let attack = 0.01;
let decay = 0.1;
let sustain = 0.1;
let release = 0.1;
let rectangle = [];
let rectNum = 7;

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
    rectangle.push(new drawRect(width / rectNum / 2 + 1 + i * width / rectNum, i * height / rectNum + height / rectNum / 2));
  noLoop();
}

function draw() {
  background(0);
  for (let i = 0; i < rectNum; i++)
    rectangle[i].play(i);
}

class drawRect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sy = height / 2;
    this.rectWidth = width / rectNum;
    this.rectHeight = height / rectNum;
    this.speed = 50;
    this.sx = width / rectNum / this.speed;
    this.pallet = { black: 0, gray: 30, gray2: 60, white: 95 };
    this.pitch = [60, 62, 64, 65, 67, 69, 71];
    noStroke();
  }

  display() {
    rect(this.x, this.y, this.rectWidth, this.rectHeight);
  }

  collision(pitch) {
    if (this.x >= width - this.rectWidth / 2) {
      fill(0, 100, 100);
      this.sx = this.sx * -1;
      playOscillator(this.pitch[pitch]);
    } if (this.x <= 0 + this.rectWidth / 2) {
      fill(0, 100, 100);
      this.sx = this.sx * -1;
      playOscillator(this.pitch[pitch] - 12);
    }
  }

  update() {
    fill(this.pallet.white);
    this.x = this.x + this.sx;
  }

  play(pitch) {
    this.collision(pitch);
    this.display();
    this.update();
  }
}

function playOscillator(midinote) {
  let freqValue = midiToFreq(midinote + 12);
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