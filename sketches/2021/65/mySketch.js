let img1, img2, img3, img4, img5, img6, img7, img8;
let imgs = [];
let size = 2;
let y;

function preload() {
  img1 = loadImage('bin/img1.jpg');
  img2 = loadImage('bin/img2.jpg');
  img3 = loadImage('bin/img3.jpg');
  img4 = loadImage('bin/img4.jpg');
  img5 = loadImage('bin/img5.jpg');
  img6 = loadImage('bin/img6.jpg');
  img7 = loadImage('bin/img7.jpg');
  img8 = loadImage('bin/img8.jpg');
}

function setup() {
  noCursor();
  createCanvas(1000, 1000);
  background(0);
  imageMode(CENTER);
  noStroke();
  imgs = [img1, img2, img3, img4, img5, img6, img7, img8];
  y = random(0, height);
  noLoop();
}

function draw() {
  for (let i = 0; i < width; i += size) {
    drawingContext.save();
    rect(i, 0, size, height);
    drawingContext.clip();
    image(imgs[int(random(imgs.length))], width / 2, y + random(-10, 10));
    drawingContext.restore();
  }
}

function mouseClicked() {
  redraw();
}