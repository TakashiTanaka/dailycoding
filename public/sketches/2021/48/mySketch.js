let l = [];
let num = 100;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  background(0);
  for (let i = 0; i < num; i++) {
    l[i] = new drawJaggedLine(random(0, width));
  }
}

function draw() {
  for (let i = 0; i < num; i++) {
    l[i].display();
  }
}

class drawJaggedLine {
  constructor(x1) {
    this.x1 = x1;
    this.y1 = 0;
    this.value1 = 4;
    this.value2 = random(10, 50);
  }

  display() {
    stroke(random(255), random(255), random(255));
    strokeWeight(4 * noise(frameCount * random(0.05)));
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
