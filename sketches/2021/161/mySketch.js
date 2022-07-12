function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  textFont('serif');
  textAlign(CENTER, CENTER);
}

const fSin = (base, strength, angle) => base + strength * sin(angle);
const fCos = (base, strength, angle) => base + strength * cos(angle);

const cText = (
  str,
  size = 16,
  position = { x: 0, y: 0 },
  fillColor = { fill: true, color: 0 },
  strokeColor = {
    fill: true,
    color: 255,
  },
  rotate = { isRotate: false, degree: 0, angleMode: DEGREES }
) => {
  push();
  if (rotate.isRotate) {
    translate(position.x, position.y);
    angleMode(rotate.angleMode);
    rotate(rotate.degree);
    translate(-position.x, -position.y);
  }
  if (!fillColor.fill) noFill();
  else fill(fillColor.color);
  if (!strokeColor.fill) noStroke();
  else stroke(strokeColor.color);
  textSize(size);
  text(str, position.x, position.y);
  pop();
};

function draw() {
  const cent = {
    x: windowWidth / 2,
    y: windowHeight / 2,
  };

  // frameCount
  const fc = frameCount;

  // 背景色
  background(0);

  // 文字の描写を繰り返す
  for (let i = 0; i < 100; i++) {
    cText(
      '時',
      width / 1.5,
      { x: cent.x + fCos(50, 50, fc / 100 + i / 10), y: cent.y + i * 1 },
    );
  }
}
