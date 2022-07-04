let num = 5;
let thisX;
let thisY;
let thisZ;
let margin;
let speed = 0.005;
let size;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(0);
  margin = width / 10;
  camera(0, 0, 2000);
}

function draw() {
  background(0);
  // normalMaterial();
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
  rotateZ(frameCount * speed);
  translate(-width / 2, -height / 2, width / 2);
  for (let y = 0; y <= height; y += height / (num - 1)) {
    for (let x = 0; x <= width; x += width / (num - 1)) {
      for (let z = 0; z >= -width; z -= width / (num - 1)) {
        push();
        translate(x, y, z);
        sphere(10 + 180 * sin(frameCount * 0.05 + x + y + z));
        pop();
      }
    }
  }
}