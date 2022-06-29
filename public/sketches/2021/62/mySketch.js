let size = 1500;
let fineness = 50;

function setup() {
  noCursor();
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');
  noStroke();
}

function draw() {
  for (let i = 0; i < size; i += fineness) {
    push();
    translate(width / 2, height / 2);
    drawArc(size - i, i / 5);
    pop();
  }
}

function drawArc(radius, i) {
  drawingContext.save();
  fill(255, 182, 193);
  ellipse(0, 0, radius);
  drawingContext.clip();
  fill(255, 255, 100);
  textSize(150);
  textLeading(140);
  text('Spring \n is \n just \n around \n the \n corner', 50 * cos(frameCount + i), 50 * sin(frameCount + i));
  drawingContext.restore();
}