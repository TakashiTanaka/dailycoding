const ex = p5ex.Extension;
const obj = p5ex.Object;
const func = p5ex.Function;
let ellipses = [];

function setup() {
  func.createFullCanvas();
	const count = 10;
	noStroke();
  for (let i = 0; i < count; i++) {
    ellipses.push(
      new obj.ExEllipse(
        createVector(width / 2, height / 2),
        width - i * width / count,
        height - i * height / count,
        300
      ).createPoints()
    );
  }
}

function draw() {
  background(240);
  ellipses.forEach((ellipse, i) => {
    ellipse.points.forEach((point, j) => {
			point.add(p5.Vector.random2D().div(5));
    });
    i % 2 === 0 ? fill(0) : fill(255);
    ellipse.draw();
  });
}