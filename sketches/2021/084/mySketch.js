let size = [5, 10, 20];
let gridSize;

function setup() {
  gridSize = size[int(random(size.length))];
  let xStart = random(10);
  let xNoise = xStart;
  let yNoise = random(10);
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noStroke();

  for (let y = 0; y < height + gridSize; y += gridSize) {
    yNoise += 0.05;
    xNoise = xStart;
    for (let x = 0; x < width + gridSize + 20; x += gridSize) {
      xNoise += 0.05;
      drawLine(x, y, noise(xNoise, yNoise))
    }
  }
}

function drawLine(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(360));
  stroke(100);
  line(0, 0, 20, 0);
  pop();
}