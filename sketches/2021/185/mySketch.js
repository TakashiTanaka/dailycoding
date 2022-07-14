let a;
let inc;
let x = 0;
let j = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(255);
  // noFill();
  a = 0;
  inc = TWO_PI / 500.0;
}

function draw() {
  for (let i = 0; i < 100000; i++) {
    point(x, height / 2 + 220 * sin(a));
    a = a + inc;
    x++;
    if (x === width) {
      j += 0.1 + noise(i);
      inc = TWO_PI / (500.0 - j);
      x = 0;
    }
  }

  noLoop();
}