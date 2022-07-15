let gridSize;
let xStart;
let yStart;
let xNoise;
let yNoise;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  gridSize = 5;
  xStart = random(10);
  yStart = random(10);
}

function draw() {
  background(0);

  xStart += 0.005;
  yStart += 0.005;

  xNoise = xStart;
  yNoise = yStart;

  for (let y = 0; y < height; y += gridSize) {
    yNoise += 0.02;
    xNoise = xStart;
    for (let x = 0; x < width; x += gridSize) {
      xNoise += 0.02;
      drawSphere(x, y, noise(xNoise, yNoise));
    }
  }
}

function drawSphere(x, y, noiseFactor) {
  push();
  translate(-width / 2, -height / 2);
  translate(x, 750 - y, -y);
  let sphereSize = noiseFactor * 150;
  let grey = 20 + (noiseFactor * 100);
  let alph = 50 + (noiseFactor * 50);
  fill(grey, alph);
  sphere(sphereSize);
  pop();
}