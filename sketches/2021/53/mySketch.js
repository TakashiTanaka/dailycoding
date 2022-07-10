let seed;
let baseRadius = 900;
let fineness = 7;

function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent('canvas');
  noStroke();
  seed = random(1, 100);
}

function draw() {
  blendMode(BLEND);
  background(0);
  randomSeed(seed);
  for (let i = 0; i < baseRadius / fineness; i++) {
    // let m = map(i, 0, baseRadius / fineness, 0, 255);
    blendMode(DIFFERENCE);
    fill(255);
    let radius = baseRadius - i * fineness;
    arc(width / 2, height / 2, radius, radius,
      TWO_PI * random(0.1, 1) + sin(frameCount * 0.01 + i),
      TWO_PI * random(0.1, 1) + sin(frameCount * 0.01 + i),
      PIE);
    console.log()
  }
}