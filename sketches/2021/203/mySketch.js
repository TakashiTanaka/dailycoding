let stepX, stepY;

function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw() {
  stepX = mouseX < 0 ? 2 : mouseX + 2;
  stepY = mouseY < 0 ? 2 : mouseY + 2;

  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}