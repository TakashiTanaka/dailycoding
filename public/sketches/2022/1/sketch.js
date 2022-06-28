const util = p5ex.Utility;

let count = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(80);
  textAlign(RIGHT, TOP);
  textFont('helvetica');
  strokeWeight(2);
  stroke(255);
  fill(0);
}

function draw() {
  background('black');
  new util.Iterator(count, i => {
    text(i, 300 + cos(i / 100) * 100, 20 + i / 3);
  });
  if (count <= 2022) {
    count++;
  }
}
