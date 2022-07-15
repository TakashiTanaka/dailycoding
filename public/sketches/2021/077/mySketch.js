let bgcolor = 0;
let size = 250;
let osc = [];
let trackNum = 5;
let pitchShifter = 12 * 0;
let reverb;
let delay;
let amplitude;
let level;

function setup() {
  userStartAudio();
  createCanvas(1000, 1000);
  colorMode(HSB);
  rectMode(CENTER);
  noFill();
  strokeWeight(2);
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  amplitude = new p5.Amplitude();
  for (let i = 0; i < trackNum; i++) {
    osc.push(new Osc('sine'));
    osc[i].startOsc();
    osc[i].createEnv();
    osc[i].setEnv(0.1, 0.1, 0.2, 0.2, 0.05, 0.0);
  }
  background(bgcolor);
  button();
}

function draw() {
  background(bgcolor, 0.1);
  level = amplitude.getLevel();
  button(level * 10000);
}

function mousePressed() {
  let note = [-3, -2, 0, 2, 3];
  let rNote = note[int(random(note.length))]
  background(bgcolor, 0.1);
  button();
  for (let i = 0; i < trackNum; i++) {
    osc[i].setEnv(0.1, 0.1, 0.2, 0.2, 0.05, 0.0);
    osc[0].playOsc(57 + rNote + pitchShifter);
    osc[1].playOsc(64 + rNote + pitchShifter);
    osc[2].playOsc(69 + rNote + pitchShifter);
    osc[3].playOsc(72 + rNote + pitchShifter);
    osc[4].playOsc(76 + rNote + pitchShifter);
  }
}

function mouseReleased() {
  background(bgcolor, 0.1);
  button();
}

function button(i) {
  stroke(100);
  rect(width / 2, height / 2, size + i);
}

class Osc {
  constructor(oscType) {
    this.osc = new p5.Oscillator(oscType);
  }

  startOsc() {
    this.osc.start();
    this.osc.amp(0);
    reverb.process(this.osc, 10, 2);
    delay.process(this.osc, 0.2, 0.8, 2300);
    amplitude.setInput(reverb * delay);
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