let l = [];
let num = 100;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  background(240);
  noCursor();
  for (let i = 0; i < num; i++) {
    l[i] = new drawRandomWalker();
  }
}

function draw() {
  for (let i = 0; i < num; i++) {
    l[i].display();
  }
}

class drawRandomWalker {
  constructor() {
    this.x1 = random(windowWidth);
    this.y1 = random(windowHeight);
    this.x2, this.y2;
    this.value = random(1, 100);
    this.c = 255;
  }
  display() {
    if (int(random(10)) % 10 === 0) {
      stroke(this.c, 0, 0);
    } else {
      stroke(this.c);
    }
    this.x2 = this.x1 + random(-this.value, this.value);
    this.y2 = this.y1 + random(-this.value, this.value);
    strokeWeight(5 * noise(frameCount * 0.1))
    line(this.x1, this.y1, this.x2, this.y2);

    this.y1 = this.y2;
    this.x1 = this.x2;

    if (this.c < -1) {
      this.c = 255;
      this.value = random(1, 100);
    } else if (this.c <= 255) {
      this.c -= int(random(1, 100) * noise(frameCount));
    }
  }
}