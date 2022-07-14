let l = [];
let num = 100;

function setup() {
  createCanvas(500, 500);
  background(0);

  for (let i = 0; i < num; i++)
    l[i] = new drawLine();
}

function draw() {
  // background(0, 50);
  for (let i = 0; i < num; i++)
    l[i].display();
}

class drawLine {
  constructor() {
    this.x1 = width / 2;
    this.y1 = height / 4;
    this.value = 4;
    this.radius = 2;
  }
  display() {
    strokeWeight(1);
    stroke(255);
    this.x2 = this.x1 + this.radius * cos(frameCount * 0.02) + random(-this.value, this.value);
    this.y2 = this.y1 + this.radius * sin(frameCount * 0.02) + random(-this.value, this.value);
    line(this.x1, this.y1, this.x2, this.y2);
    this.x1 = this.x2;
    this.y1 = this.y2;
  }
}