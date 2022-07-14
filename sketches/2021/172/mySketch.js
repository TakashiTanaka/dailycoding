function setup() {
  userStartAudio();
  createCanvas(windowWidth, windowHeight);
  background(0);
  osc = new p5.Oscillator();
  osc.start();
  osc.amp(0);
  env = new p5.Envelope();
  noLoop();
}

function draw() {
  if (getAudioContext().state !== 'running') {
    text('click to start audio', width / 2, height / 2);
  } else {
    text('audio is enabled', width / 2, height / 2);
  }
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  var synth = new p5.MonoSynth();
  synth.play('A4', 0.5, 0, 0.2);
}
