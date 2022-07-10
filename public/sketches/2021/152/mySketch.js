const iterator = (iNum, func) => {
  for (let count = iNum; count--;) { func(count) };
}

const fSin = (base, strength, angle) => {
  return (base + strength * sin(angle));
}

const fCos = (base, strength, angle) => {
  return (base + strength * cos(angle));
}

const addFc = (speed) => {
  return (frameCount * speed)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(2);

  let w = width;
  let h = height;
  let margin = int(w * 0.2);
  let len = width - margin * 2;
  iterator(int(h * 0.01), (yCount) => {
    beginShape();
    iterator(len, (xCount) =>
      vertex(
        (margin + xCount) + 30 * cos(xCount / 13),
        (margin + yCount * 60) + 30 * sin(xCount / 13)
        // (margin + yCount * 20) + fCos(10, 10, xCount / yCount + addFc(0.05))
      )
    );
    endShape();
  });

}

function draw() { setup(); }

function windowResized() { setup(); }
