const util = p5ex.Utility;
const ex = p5ex.Extension;

class Circle {
  constructor(size, center = createVector(width / 2, height / 2), pointNum = 360) {
    this.size = size;
    this.points = [];
    this.center = center;
    this.pointNum = pointNum;
    this.create();
  }

  create() {
    new util.Iterator(this.pointNum, i => {
      let rad = map(i, 0, this.pointNum, 0, TAU);
      this.points.push(
        createVector(this.center.x + this.size * cos(rad), this.center.y + this.size * sin(rad))
      );
    });
  }

  draw(options = {}) {
    beginShape();
    this.points.forEach((point, i) => {
      vertex(point.x, point.y);
    });
    endShape(CLOSE);
  }
}

let circles = [];

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noFill();
  stroke(255);
  new util.Iterator(5, i => {
    circles.push(
      new Circle(
        (i + 1) * 70,
        createVector(width / 2 + random(-i * 50, i * 50), height / 2 + random(-i * 50, i * 50)),
        100
      )
    );
  });
}

function draw() {
  background(0);
  circles.forEach((circle, i) => {
    circle.draw();
    if (i < circles.length - 1) {
      circles[i].points.forEach((point, j) => {
        ex.exLine(circles[i].points[j], circles[i + 1].points[j]);
      });
    }
  });
}
