const ex = p5ex.Extension;
const obj = p5ex.Object;
let ellipses = [];

function setup() {
  createCanvas(500, 500);
  background(240);
  noFill();
  for (let i = 0; i < 5; i++) {
    ellipses.push(
      new obj.ExEllipse(
        createVector(width / 2, height / 2),
        width - i * 100,
        height - i * 100,
        300
      ).createPoints()
    );
  }
}

function draw() {
  background(240);
  ellipses.forEach((ellipse, i) => {
    ellipse.points.forEach((point, j) => {
      point.add(
        createVector(0.5 * cos(frameCount * 0.02 + (j % i)), 0.5 * sin(frameCount * 0.02 + (j % i)))
      );
    });
    ellipse.draw();
  });
}
