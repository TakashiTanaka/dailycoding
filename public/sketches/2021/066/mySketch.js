let img8;
let imgs = [];
let size = 2;
let x, y;

function preload() {
  img8 = loadImage('bin/img8.jpg');
}

function setup() {
  noCursor();
  createCanvas(1000, 1000);
  background(0);
  imageMode(CENTER);
  noStroke();
  img8.resize(width + width * 0.1, 0);
}

function draw() {
  for (let i = 0; i < width; i += size) {
    drawingContext.save();
    rect(i, 0, size, height);
    drawingContext.clip();
    image(img8, width / 2 + 10 * sin(frameCount * 0.02 + i), height / 2 + 10 * sin(frameCount * 0.02 + i));
    drawingContext.restore();
  }
}

