const drawGrid = (unitSize) => {
  const iterator = (iNum, func) => { for (let count = iNum; count--;) { func(count) }; }
  iterator(ceil(width / unitSize), (count) => {
    line(count * unitSize, 0, count * unitSize, height);
    line(0, count * unitSize, width, count * unitSize);
  });
}

const iterator = (iNum, func) => {
  for (let count = iNum; count--;) { func(count) };
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
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);

  stroke(255);
  // drawGrid(50);
  strokeWeight(5);

  let lVec = createVector(400, 400);

  let sVec = createVector(width / 2, height / 2);
  let cVec = createVector(sVec.x, sVec.y);

  let len = 5;
  let deg;

  stroke(255, 0, 0);

  // firstPos
  // point(cVec.x, cVec.y);


  stroke(255, 0, 255);
  beginShape();
  iterator(
    1000,
    (count) => {
      push();
      translate(cVec.x, cVec.y);
      rotate(deg = 90 * int(random(4)));
      point(len, 0);
      cVec = createVector(cVec.x + len * cos(deg), cVec.y + len * sin(deg));
      pop();
    }
  )
  endShape();
}

function draw() { setup(); }

function windowResized() { setup(); }
