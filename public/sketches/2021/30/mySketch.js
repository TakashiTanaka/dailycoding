const obj = p5ex.Object;
const util = p5ex.Utility;

let c = {
  bg: 0,
  line: 255,
  fill: 0,
};

let ellipses = [];
let startPos,circleSize;

function setup() {
  createCanvas(500, 500);
  fill(c.fill);
  stroke(c.line);
  strokeWeight(1.5);
  circleSize = height * 0.2;
  const fineness = 1;

  startPos = createVector(width * 0.8, height * 0.5);
  new util.Iterator(int(width / 16), i => {
    ellipses.push(
      new obj.ExEllipse(
        createVector(startPos.x - i * 10, startPos.y),
        circleSize,
        circleSize
      ).createPoints()
    );
  });
}

function draw() {
  background(c.bg);
  ellipses.forEach((ellipse, i) => {
    ellipse.position.y = startPos.y + 150 * sin(frameCount * 0.05 + i / 10);
    ellipse.createPoints();
    ellipse.points.forEach((point, i) => point.add(createVector(10 * cos(i / HALF_PI + frameCount * 0.1), 10 * sin(i / HALF_PI + frameCount * 0.1))));
    ellipse.draw();
  });
}
