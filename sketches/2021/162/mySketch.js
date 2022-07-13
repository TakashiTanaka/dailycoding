const cText = (
  str,
  size = 16,
  position = { x: 0, y: 0 },
  fillColor = { fill: true, color: 0 },
  strokeColor = {
    fill: true,
    color: 255,
  },
  rotateInfo = { isRotate: false, degree: 0, angleMode: DEGREES }
) => {
  push();
  if (rotateInfo.isRotate) {
    translate(position.x, position.y);
    angleMode(rotateInfo.angleMode);
    rotate(rotateInfo.degree);
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

const fSin = (base, strength, angle) => base + strength * sin(angle);
const fCos = (base, strength, angle) => base + strength * cos(angle);

function setup() {
  const fontSize = 60;
  createCanvas(windowWidth, windowHeight);
  textSize(fontSize);
  textFont('serif');
  textAlign(LEFT, TOP);
  background(0);
  for (let i = 0; i < 2000; i++) {
    cText(
      'Rotate',
      fCos(fontSize, 40, i),
      {
        x: 100 + i / 3 + fCos(100, 50, i * 2),
        y: i + fCos(100, 100, i * 3),
      },
      { fill: true, color: color(255, fCos(40, 20, i * 2)) },
      { fill: false, color: 0 },
      { isRotate: true, degree: i / 2, angleMode: DEGREES }
    );
  }
}
