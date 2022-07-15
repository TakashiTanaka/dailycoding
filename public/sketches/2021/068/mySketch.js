let img5;
let melt = [];
let num = 10;

function preload() {
  img5 = loadImage('bin/img5.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noStroke();
  imageMode(CENTER);
  // frameRate(16);
  img5.resize(0, height);
  image(img5, width / 2, height / 2);
  for (let i = 0; i < num; i++) {
    melt[i] = new drawMelt();
  }
}

function draw() {
  for (let i = 0; i < num; i++) {
    melt[i].display();
  }
}

class drawMelt {
  constructor() {
    this.size = int(random(10, 200));
    this.sw = this.size;
    this.sh = this.size;
    this.sx = int(random(0, width - this.size));
    this.sy = int(random(0, height));
    this.dx = this.sx;
    this.dy = this.sy;
    this.dw = this.size;
    this.dh = this.size;
    this.increment = int(random(1, 5));
  }

  display() {
    // updatePixels();
    copy(img5, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh + this.increment);
    this.increment = this.increment * 1.1;
  }
}

