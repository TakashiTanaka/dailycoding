let seed;
let baseRadius = 900;
let fineness = 10;

function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent('canvas');
  background(0);
  fill(0);
  stroke(255);
  strokeWeight(2);
  seed = random(1, 100);
}

function draw() {
  background(0);
  randomSeed(seed);
  for (let i = 0; i < baseRadius / fineness; i++) {
    let radius = baseRadius - i * fineness;
    arc(width / 2, height / 2, radius, radius,
      TWO_PI * random(0.1, 1) + sin(frameCount * 0.01 + i),
      TWO_PI * random(0.1, 1) + sin(frameCount * 0.01 + i),
      OPEN);
  }
  // noLoop();
}