let seed;
let size = 1500;
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
  let b = false;
  randomSeed(seed);
  for (let i = 0; i < size; i += fineness) {
    push();
    translate(width / 2, height / 2);
    if (b === false) {
      rotate(frameCount * random(0.05, 0.1));
      b = true;
    } else {
      rotate(-frameCount * random(0.05, 0.1));
      b = false;
    }
    drawArc(size - i);
    pop();
  }
  // noLoop();
}

function drawArc(radius) {
  drawingContext.save();
  // stroke(255);
  ellipse(0, 0, radius);
  drawingContext.clip();
  image(
    img,
    0,
    0,
    img.width,
    img.height
  );
  drawingContext.restore();
}

function mouseClicked() {
  loop();
}
