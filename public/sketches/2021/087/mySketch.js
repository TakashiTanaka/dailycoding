let gridSize = 20;
let xStart;
let yStart;
let margin;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 100);
  stroke(100);
  strokeWeight(2);
  strokeCap(SQUARE);
  xStart = random(10);
  yStart = random(10);
  margin = width * 0.1;
}

function draw() {
  background(0);

  xStart += 0.005;
  yStart += 0.005;

  let xNoise = xStart;
  let yNoise = yStart;

  for (let y = margin; y < height - margin; y += gridSize) {
    yNoise += 0.02;
    xNoise = xStart;
    for (let x = margin; x < width - margin; x += gridSize) {
      xNoise += 0.02;
      drawLine(x, y, noise(xNoise, yNoise));
    }
  }
}

function drawLine(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(360) * 3);
  line(0, 0, 20, 0);
  pop();
}