let osc;
let oscType = 'sine';
let env;
let attack = 0.01;
let decay = 0.1;
let sustain = 0.5;
let release = 0.5;
let ball = [];
let counter = 0;

function setup() {
  noCursor();
  userStartAudio();
  createCanvas(1000, 1000);
  background(0);
  colorMode(HSB);
  ball.push(new drawBall());
  osc = new p5.Oscillator(oscType);
  osc.start();
  osc.amp(0);
  env = new p5.Envelope();
  envelopeSetting();
  noLoop();

}

function draw() {
  if (frameCount % int(random(20, 60)) === 0) {
    background(0);
    ball[counter].play();
    ball.push(new drawBall());
    counter++;
  }
}

class drawBall {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = random(100, 800);
    this.pallet = ["#01FFF4", "#FFF800", "#A048FF", "#FF3F2C"];
    this.c = this.pallet[int(random(this.pallet.length))];
    noStroke();
  }
  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.size);
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
    let freqValue = midiToFreq(midinote + int(random(1, 10)) * 2);
    osc.freq(freqValue);
    // osc.freq(freqValue + random(800, 1000), 0.5);
    // osc.freq(freqValue - random(1800, 2000), 0.9);
    envelopeSetting();
    env.play(osc);
  }

  play() {
    this.display();
    this.soundTrigger();
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