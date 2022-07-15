let gridNum = 20;

function setup() {
  createCanvas(1000, 1000);
  strokeCap(SQUARE);
  lines = new drawStripe();
}

function draw() {
  for (let y = 0; y < height; y += height / gridNum) {
    for (let x = 0; x < width; x += width / gridNum) {
      drawingContext.save();
      noStroke();
      fill(0);
      rect(x, y, height / gridNum);
      drawingContext.clip();
      fill(0);
      lines.display(2 + 6 * abs(sin(frameCount * 0.03 + y + sin(frameCount * 0.1 + x + y * noise(frameCount * 0.001)))));
      drawingContext.restore();
    }
  }
}

class drawStripe {
  constructor() {
    this.lineNum = 100;
    this.lineStartXPosition = 0;
    this.lineEndXPosition = width;
    this.lineStartYPosition = 0;
    this.lineEndYPosition = height;
  }

  display(weight) {
    stroke(0);
    strokeWeight(weight);
    for (let i = this.lineStartXPosition; i <= this.lineEndXPosition; i += (this.lineEndXPosition - this.lineStartXPosition) / (this.lineNum - 1)) {
      line(i, this.lineStartYPosition, i, this.lineEndYPosition);
    }
  }
}