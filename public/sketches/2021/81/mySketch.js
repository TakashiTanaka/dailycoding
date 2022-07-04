let synth, soundLoop;
let firstKey = 50;
let key = firstKey;
let stepValue = 2;
let step = stepValue;
let intervalInSeconds = 0.15;

function setup() {
  userStartAudio();
  noCursor();
  let cnv = createCanvas(1000, 1000);
  cnv.mousePressed(canvasPressed);
  colorMode(HSB);
  background(0, 50, 50);
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
  synth = new p5.MonoSynth();
}

function canvasPressed() {
  if (soundLoop.isPlaying) {
    soundLoop.stop();
  } else {
    soundLoop.start();
  }
}

function onSoundLoop(timeFromNow) {
  let notePattern = [key, key + 3, key + 5, key + 7, key + 10, key + 12];
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 0.1, timeFromNow, 0.1);
  let m = map(key, firstKey, firstKey + 12, 0, 360);
  background(m, 50, 50);
  noStroke();
  fill(m, 50, 100);
  ellipse(width / 2, height / 2, note);
  if (noteIndex === notePattern.length - 1) {
    if (key === firstKey) {
      step = stepValue;
    } else if (key === firstKey + 12) {
      step = -stepValue;
    }
    key = key + step;
  }
}