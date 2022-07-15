let osc;
let oscType = 'sine';
let env;
let attack = 0.01;
let decay = 0.2;
let sustain = 0.2;
let release = 0.2;
let ball = [];
let ballNum;

function setup() {
  noCursor();
  userStartAudio();
  createCanvas(1000, 1000);
  colorMode(HSB);
  ballNum = 4;
  for (let i = 0; i < ballNum; i++) {
    ball[i] = new drawBall(i);
  }
  osc = new p5.Oscillator(oscType);
  osc.start();
  osc.amp(0);
  env = new p5.Envelope();
  envelopeSetting();
  noLoop();
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(SCREEN);
  for (let i = 0; i < ballNum; i++) {
    ball[i].play();
  }

}

class drawBall {
  constructor(colorNum) {
    this.x = width / 2;
    this.y = height / 2;
    this.speedSeed = 10;
    this.sx = random(-this.speedSeed, this.speedSeed);
    this.sy = random(-this.speedSeed, this.speedSeed);
    this.size = random(100, 600);
    this.pallet = ["#01FFF4", "#FFF800", "#A048FF", "#FF3F2C"];
    this.c = this.pallet[colorNum];
    noStroke();
  }
  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }
  update() {
    this.x = this.x + this.sx;
    this.y = this.y + this.sy;
  }
  collisionChecker() {
    if (this.x >= width - this.size / 2) {
      this.sx = this.sx * -1;
      this.soundTrigger();
    } if (this.x <= 0 + this.size / 2) {
      this.sx = this.sx * -1;
      this.soundTrigger();
    } if (this.y >= height - this.size / 2) {
      this.sy = this.sy * -1;
      this.soundTrigger();
    } if (this.y <= 0 + this.size / 2) {
      this.sy = this.sy * -1;
      this.soundTrigger();
    }
  }

  soundTrigger() {
    if (this.c === this.pallet[0]) {
      this.playOscillator(60);
    } else if (this.c === this.pallet[1]) {
      this.playOscillator(62);
    } else if (this.c === this.pallet[2]) {
      this.playOscillator(64);
    } else if (this.c === this.pallet[3]) {
      this.playOscillator(65);
    }
  }

  playOscillator(midinote) {
    let freqValue = midiToFreq(midinote + 12);
    osc.freq(freqValue);
    envelopeSetting();
    env.play(osc);
  }

  play() {
    this.display();
    this.update();
    this.collisionChecker();
  }
}

function envelopeSetting() {
  env.setADSR(attack, decay, sustain, release);
  env.setRange(0.06, 0.0);
}

function mouseClicked() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}