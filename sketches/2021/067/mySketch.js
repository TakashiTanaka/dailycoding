let img8;
let size = 20;

function preload() {
  img8 = loadImage('bin/img8.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  frameRate(16);
  img8.resize(width, 0);
}

function draw() {
  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      let c = img8.get(x, y);
      let rx = random(-5, 5);
      let ry = random(-5, 5);
      let rs = random(-10, 10);
      fill(c);
      rect(x + rx, y + ry, size + rs);
    }
  }
}

