let seed;
let size = 1000;
let fineness = 100;
let img;

function preload() {
  img = loadImage('bin/img1.jpg');
}

function setup() {
  noCursor();
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
  seed = random(1, 20);
  noLoop();
}

function draw() {
  randomSeed(seed);
  for (let i = 0; i < size; i += fineness) {
    push();
    translate(width / 2, height / 2);
    drawArc(size - i);
    pop();
  }
  // noLoop();
}

function drawArc(radius) {
  drawingContext.save();
  // stroke(255);
  rect(0, 0, radius);
  drawingContext.clip();
  image(
    img,
    0,
    0,
    img.width + radius * 10 * abs(sin(frameCount * 0.2)),
    img.height + radius * 10 * abs(sin(frameCount * 0.2))
  );
  drawingContext.restore();
}

function mouseClicked() {
  loop();
}