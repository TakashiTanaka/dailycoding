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
  iterator(int(h * 0.03), (yCount) => {
    beginShape();
    iterator(len, (xCount) =>
      vertex(
        (margin + xCount),
        fSin(
          int(h * 0.2),
          50 * sin(yCount / 3 + addFc(0.02)),
          xCount * TWO_PI / len * fSin(2, 2, addFc(0.01))
        )
        + yCount * 20
      )
    );
    endShape();
  });

}

function draw() { setup(); }

function windowResized() { setup(); }
