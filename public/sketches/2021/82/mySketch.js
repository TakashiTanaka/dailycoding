function setup() {
  let gridSize = int(random(1, 20));
  let xStart = random(10);
  let xNoise = xStart;
  let yNoise = random(10);
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noStroke();

  for (let y = 0; y < height; y += gridSize) {
    yNoise += 0.01;
    xNoise = xStart;
    for (let x = 0; x < width; x += gridSize) {
      xNoise += 0.01;
      let alph = int(noise(xNoise, yNoise) * 100);
      fill(100, alph);
      rect(x, y, gridSize);
    }
  }
}