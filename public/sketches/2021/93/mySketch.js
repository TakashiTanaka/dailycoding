let texSize = 300;
let font;
let pos = [];
let randomNum = [];
let tex = [];

function preload() {
  font = loadFont('bin/WorkSans-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  textFont(font);
  for (let z = 0; z >= -1000; z -= 100) {
    for (let x = 0; x <= 1000; x += 100) {
      for (let y = 0; y <= 1000; y += 100) {
        pos.push([x, y, z]);
        randomNum.push(int(random(1000)));
        tex.push(new drawText());
      }
    }
  }
  camera(0, 0, 7000);
}

function draw() {
  background(0);
  orbitControl(0.5, 0.5, 0.2);
  translate(-width / 2, -height / 2, height / 2);
  for (let i = 0; i < 100; i++) {
    tex[i].display(i);
    tex[i].update(i);
    tex[i].reset();
  }
}

class drawText {
  constructor() {
    this.posZ = 0;
    this.randomSpeed = random(10, 50);
    textAlign(CENTER, CENTER);
  }

  display(num) {
    push();
    translate(pos[randomNum[num]][0], pos[randomNum[num]][1], this.posZ);
    textSize(texSize);
    text("Z", 0, 0);
    pop();
  }

  update() {
    this.posZ = this.posZ + 1 * this.randomSpeed;
  }

  reset() {
    if (this.posZ > 10000) {
      this.posZ = 0;
    }
  }
}