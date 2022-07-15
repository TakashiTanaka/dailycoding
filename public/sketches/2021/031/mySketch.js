const obj = p5ex.Object;
const util = p5ex.Utility;
let c = {
  bg: 0,
  line: 1,
  fill: 0,
};
let startPos, diameter;
let ellipses = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(HSB, 1, 1, 1);
  startPos = createVector(width * 0.8, height * 0.5);
  diameter = height * 0.2;
  new util.Iterator(int(width / 16), i => {
    ellipses.push(
      new obj.ExEllipse(
        createVector(startPos.x - i * 10, startPos.y),
        diameter,
        diameter
      ).createPoints()
    );
  });
}

function draw() {
  background(c.bg);
  ellipses.forEach((ellipse, i) => {
    ellipse.position.y = startPos.y + 150 * sin(frameCount * 0.05 + i / 10);
    const gradient = drawingContext.createRadialGradient(
      ellipse.position.x + (diameter / 4) * cos(frameCount * 0.05 + i / 4),
      ellipse.position.y + (diameter / 4) * sin(frameCount * 0.05 + i / 4),
      10,
      ellipse.position.x,
      ellipse.position.y,
      diameter / 2
    );
    gradient.addColorStop(0, color(1, 1, 1));
    gradient.addColorStop(0.9, color(0.8, 1, 1));
    gradient.addColorStop(1, color(0.6, 1, 1));
    drawingContext.fillStyle = gradient;
    ellipse.createPoints();
    ellipse.draw();
  });
}