let l = [];
let num = 200;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  colorMode(HSB);
  background(95);
  for (let i = 0; i < num; i++) {
    l[i] = new drawJaggedLine();
  }
}

function draw() {
  for (let i = 0; i < num; i++) {
    l[i].display();
  }
}

class drawJaggedLine {
  constructor() {
    this.x1 = random(0, width);
    this.y1 = -50;
    this.value1 = 2;
    this.value2 = random(10, 50);
    this.weight = 1;
    this.h = random(200, 230);
    this.s = random(80, 100);
    this.b = random(80, 100);
  }

  display() {
    stroke(this.h, this.s, this.b);
    strokeWeight(this.weight * 2 * noise(frameCount * 0.05 * noise(frameCount)));
    this.x2 = this.x1 + random(-this.value1, this.value1);
    this.y2 = this.y1 + random(this.value2);
    line(this.x1, this.y1, this.x2, this.y2);
    this.x1 = this.x2;
    this.y1 = this.y2;
    if (this.y2 > height) {
      this.y1 = 0;
      this.x1 = random(0, width);
    }
  }
}
