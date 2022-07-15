let seed;

function setup() {
  createCanvas(1000, 1000);
  strokeWeight(1);
  colorMode(HSB);
  angleMode(DEGREES);
  seed = random(1, 20);
}

function draw() {
  let b = false;
  randomSeed(seed);
  background(0);
  for (let i = 0; i < 700; i += 50) {
    push();
    translate(width / 2, height / 2);
    if (b === false) {
      rotate(frameCount * random(0.05, 0.2));
      b = true;
    } else {
      rotate(-frameCount * random(0.05, 0.2));
      b = false;
    }
    drawArc(0, random(10, 30), 700 - i);
    pop();
  }
}

function drawArc(start, end, radius) {
  let c = random(90);
  fill(c);
  stroke(c);
  arc(0, 0,
    radius + 200 * noise(frameCount * 0.01 + start),
    radius + 200 * noise(frameCount * 0.01 + start),
    start, end, PIE);
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