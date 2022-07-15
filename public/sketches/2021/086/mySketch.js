let gridSize;
let intensity;
let xStart;
let yStart;
let xNoise;
let yNoise;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 100);
  stroke(100);
  strokeWeight(3);
  gridSize = 20;
  intensity = 10;
  xStart = random(10);
  yStart = random(10);
}

function draw() {
  background(0);

  xStart += 0.005;
  yStart += 0.005;

  xNoise = xStart;
  yNoise = yStart;

  for (let y = 0; y < height - gridSize * intensity; y += gridSize) {
    yNoise += 0.02;
    xNoise = xStart;
    for (let x = 0; x < width - gridSize * intensity; x += gridSize) {
      xNoise += 0.02;
      drawRect(x, y, noise(xNoise, yNoise));
    }
  }
}

function drawRect(x, y, noiseFactor) {
  let len = gridSize * noiseFactor;
  point(x + len * intensity, y + len * intensity);
}