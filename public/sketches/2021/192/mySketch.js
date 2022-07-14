const drawGrid = (unitSize) => {
  const iterator = (iNum, func) => { for (let count = iNum; count--;) { func(count) }; }
  iterator(ceil(width / unitSize), (count) => {
    line(count * unitSize, 0, count * unitSize, height);
    line(0, count * unitSize, width, count * unitSize);
  });
}

// const iterator = (iNum, func) => {
//   for (let count = iNum; count--;) { func(count) };
// }

const iterator2 = (iNum, func) => {
  for (let count = 0; count < iNum; count++) { func(count) };
}

const fSin = (base, strength, angle) => {
  return (base + strength * sin(angle));
}

const fCos = (base, strength, angle) => {
  return (base + strength * cos(angle));
}

const setOrigin = (originX, originY, beforeFunc, afterFunc) => {
  translate(originX, originY);
  push();
  beforeFunc();
  translate(-originX, -originY);
  afterFunc();
  pop();
}


function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  background(0);

  stroke(255);
  // drawGrid(50);
  strokeWeight(5);

  let lVec = createVector(width, height / 2);

  let sVec = createVector(0, height / 2);
  let cVec = createVector(sVec.x, sVec.y);

  let len = 10;
  let deg;

  stroke(255, 0, 0);

  // firstPos

  noFill();
  stroke(0, 255, 255);
  strokeWeight(1);
  beginShape();
  vertex(100, 500);
  vertex(900, 500);
  endShape();

  let stPos = createVector(100, 500);
  let endPos = createVector(900, 500);
  noStroke();
  fill(255);
  beginShape();
  vertex(stPos.x, stPos.y);
  iterator2(10,
    (counter) => { vertex(stPos.x + 80 * counter, 500 - 60 * sin(counter * 10)); }
  )
  vertex(endPos.x, endPos.y);
  push();
  translate(endPos.x, endPos.y);
  rotate(180);
  iterator2(10,
    (counter) => { vertex(stPos.x + 80 * counter, 500 - 60 * sin(counter * 10)); }
  )
  pop();
  vertex(stPos.x, stPos.y);
  endShape();
}

function draw() { setup(); }

function windowResized() { setup(); }
