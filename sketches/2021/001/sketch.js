const ex = p5ex.Extension;
const func = p5ex.Function;

function setup() {
  func.createFullCanvas();
  noStroke();
  colorMode(HSB);
  ellipseMode(CENTER);
  background(0);
}

function draw() {
  drawBrush();
}

function drawBrush() {
  let brushSize = width * 0.3;
  if (mouseIsPressed) {
    for (let j = 0; j <= brushSize / 2; j += 2) {
      fill(random(0, 360), 100, 100);
      ex.exCircle(createVector(mouseX, mouseY), brushSize - j * 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
