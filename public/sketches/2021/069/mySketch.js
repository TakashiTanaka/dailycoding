let img6;
let melt = [];
let num = 100;
let i = 0;

function preload() {
  img6 = loadImage('bin/img6.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  imageMode(CENTER);
  frameRate(16);
  img6.resize(0, height);
  image(img6, width / 2, height / 2);
  melt.push(new drawMelt());

}

function draw() {
  melt[i].display();
  melt.push(new drawMelt());
  i++;
}

class drawMelt {
  constructor() {
    this.size = int(random(10, 500));
    this.sw = this.size + int(random(10, 100));
    this.sh = this.size + int(random(10, 100));
    this.sx = int(random(- this.size, width - this.size));
    this.sy = int(random(- this.size, height));
    this.dx = this.sx;
    this.dy = this.sy;
    this.dw = this.size;
    this.dh = this.size;
  }

  display() {
    copy(img6, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
  }
}

