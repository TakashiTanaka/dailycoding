let gridSize;
let intensity;

function setup() {
  gridSize = 5;
  intensity = random(10, 50);
  let xStart = random(10);
  let xNoise = xStart;
  let yNoise = random(10);
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noStroke();

  for (let y = 0; y < height - gridSize * intensity; y += gridSize) {
    yNoise += 0.05;
    xNoise = xStart;
    for (let x = 0; x < width - gridSize * intensity; x += gridSize) {
      xNoise += 0.05;
      drawPoint(x, y, noise(xNoise, yNoise))
    }
  }
}

function drawPoint(x, y, noiseFactor) {
  let len = gridSize * noiseFactor;
  fill(100);
  ellipse(x + len * intensity, y + len * intensity, len);
}