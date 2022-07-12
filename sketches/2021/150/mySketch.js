// Draw grid function
const drawGrid = (unitSize) => {
  const iterator = (iNum, func) => { for (let count = iNum; count--;) { func(count) }; }
  iterator(ceil(width / unitSize), (count) => {
    line(count * unitSize, 0, count * unitSize, height);
    line(0, count * unitSize, width, count * unitSize);
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Draw 10px grid
  stroke(0, 255, 0);
  strokeWeight(1);
  drawGrid(10);

  // Draw 100px grid
  stroke(0, 0, 255);
  strokeWeight(1);
  drawGrid(100);

  // Draw 1000px grid
  stroke(255, 0, 0);
  strokeWeight(5);
  drawGrid(1000);
}

function draw() { setup(); }

function windowResized() { setup(); }
