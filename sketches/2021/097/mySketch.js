let l = [];
let num = 200;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;
let alphabet = [];
let charChange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background(255);
  for (let i = 0; i < num; i++) {
    l[i] = new drawJaggedLine();
  }
  for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
    alphabet[i] = char(counter).toUpperCase();
    counter++;
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
    this.value1 = 10;
    this.value2 = random(20, 50);
    this.weight = 1;
    this.texSize = random(10, 20);
    this.c = 0;
  }

  display() {
    fill(this.c);
    this.x2 = this.x1 + random(-this.value1, this.value1);
    this.y2 = this.y1 + random(this.value2);
    textSize(this.texSize);
    text(alphabet[charChange], this.x1, this.y1);
    this.x1 = this.x2;
    this.y1 = this.y2;
    if (this.y2 >= height + height * 0.1) {
      this.y1 = 0;
      this.x1 = random(0, width);
      if (this.c === 0) {
        this.c = 255;
      } else {
        this.c = 0;
      }
      charChange++;
      if (charChange > 25) {
        charChange = 0;
      }
    }
  }
}
