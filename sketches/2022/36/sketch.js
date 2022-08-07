const canvasSize = Math.min(window.innerWidth, window.innerHeight);
let myShader;
let black = false;

function setup() {
  createCanvas(canvasSize, canvasSize);
  pixelDensity(2);
  textSize(width / 4);
  textAlign(CENTER, CENTER);
  textFont('helvetica-bold');
  addEffects(blur2d(1, 1, 5), motionBlur(0, 0.1),celShade(2.0, 0.01, 0.5, 0.3));
  addChannels(null);
}

function draw() {
  background(0);
  fill(255);
  for (let i = 0; i < 10; i++) {
    let y = i * width / 4;
    text('SHAKE', width / 2 + width / 10 * cos(frameCount * 0.1 + i / 4), y);
  }
}
