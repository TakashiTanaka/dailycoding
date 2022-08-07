let seed;
let size = 1500;
let fineness = 10;
let img;

function preload() {
  img = loadImage('bin/img1.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  imageMode(CENTER);
  noStroke();
  seed = random(1, 20);
}

function draw() {
  randomSeed(seed);
  for (let i = 0; i < size; i += fineness) {
    push();
    translate(width / 2, height / 2);
    drawArc(0, int(random(10, 30)), size - i);
    pop();
  }
  noLoop();
}

function drawArc(start, end, radius) {
  drawingContext.save();
  fill(255);
  arc(0, 0, radius, radius,
    start, end, PIE);
  drawingContext.clip();
  image(img, random(-20, 20), random(-20, 20));
  drawingContext.restore();
  if (end < 360) {
    start = end;
    if (end <= 330) {
      end = start + int(random(10, 30));
    } else {
      end = 360;
    }
    drawArc(start, end, radius);
  }
}