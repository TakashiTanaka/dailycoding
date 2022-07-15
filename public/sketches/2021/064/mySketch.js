//reference: https://editor.p5js.org/aferriss/sketches/UJmdHqx_u

let img;
let y;

function preload() {
  img = loadImage("bin/img3.jpg");
}

function setup() {
  noCursor();
  createCanvas(1000, 1000);
  imageMode(CENTER);
  img.resize(width, height);
  image(img, width / 2, height / 2);
  background(100);
  y = random(0, height);
}


function draw() {
  for (let x = 0; x < width; x++) {
    const pixel = img.get(x, y);
    stroke(pixel);
    line(x, 0, x, height);
  }
}

function mouseClicked() {
  y = random(0, height);
}

