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
  push();
  translate(originX, originY);
  beforeFunc();
  translate(-originX, -originY);
  afterFunc();
  pop();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(1);
  rectMode(CENTER);
  setOrigin(
    width / 2,
    height / 2,
    (() => rotate(frameCount * 0.01)),
    (() => rect(width / 2, height / 2, 50))
  );
}

function draw() { setup(); }

function windowResized() { setup(); }
