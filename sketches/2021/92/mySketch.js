let speed = 0.005;
let pos = [];
let num = 5;
let inc = 1000 / (num - 1);

function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(0);
  for (let z = 0; z >= -1000; z -= inc) {
    for (let x = 0; x <= 1000; x += inc) {
      for (let y = 0; y <= 1000; y += inc) {
        pos.push([x, y, z]);
      }
    }
  }
  camera(0, 0, 2000);
  strokeWeight(3);
  stroke(255);
  fill(0);
}

function draw() {
  background(0);
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
  rotateZ(frameCount * speed);
  orbitControl(0.5, 0.5, 0.2);
  translate(-width / 2, -height / 2, height / 2);
  for (let i = 0; i < pos.length; i++) {
    push();
    translate(pos[i][0], pos[i][1], pos[i][2]);
    box(100 + 150 * sin(frameCount * 0.05 + pos[i][0] + pos[i][1] + pos[i][2]));
    pop();
  }
}
