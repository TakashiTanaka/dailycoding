let l = [];
let num = 1000;


function setup() {
  createCanvas(500, 500);
  background(0);

  for (let i = 0; i < num; i++) {
    l[i] = new drawLine();
  }

}

function draw() {
  for (let i = 0; i < num; i++) {
    l[i].display();
  }
}

class drawLine {
  constructor() {
    this.x1 = random(0, width);
    this.y1 = 0;
    this.x2 = random(0, width);
    this.y2 = 500;
    this.value = 3;
  }
  display() {
    stroke(255, 50);
    this.x2 = this.x1 + random(-this.value, this.value) + cos(frameCount * 0.02);
    this.y2 = this.y1 + random(this.value);
    strokeWeight(1);

    line(this.x1, this.y1, this.x2, this.y2);

    this.x1 = this.x2;
    this.y1 = this.y2;
  }
}