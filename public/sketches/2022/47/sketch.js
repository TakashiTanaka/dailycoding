// 三角形ABCの外心を求める

const canvasSize = Math.min(window.innerWidth, window.innerHeight);
const gui = new lil.GUI();
let A, B, C, U;

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noFill();
  stroke(100);
  strokeWeight(2);
  const createRandomVector = () => createVector(random(width), random(height));

  A = createRandomVector();
  B = createRandomVector();
  C = createRandomVector();

  const folderA = gui.addFolder('A');
  const folderB = gui.addFolder('B');
  const folderC = gui.addFolder('C');
  folderA.add(A, 'x').min(0).max(width);
  folderA.add(A, 'y').min(0).max(height);
  folderB.add(B, 'x').min(0).max(width);
  folderB.add(B, 'y').min(0).max(height);
  folderC.add(C, 'x').min(0).max(width);
  folderC.add(C, 'y').min(0).max(height);
}

function draw() {
  background(0);

  plotPointName('A', A);
  ellipse(A.x, A.y, 10);
  plotPointName('B', B);
  ellipse(B.x, B.y, 10);
  plotPointName('C', C);
  ellipse(C.x, C.y, 10);
  drawTriangle(A, B, C);

  U = calcCircumCenter(A, B, C);
  plotPointName('U', U);
  ellipse(U.x, U.y, 10);
  ellipse(U.x, U.y, circumRadius(A, B ,C) * 2);
}

const calcTrianglesCenterOfGravity = (x1, y1, x2, y2, x3, y3) => ({
  x: (x1 + x2 + x3) / 3,
  y: (y1 + y2 + y3) / 3,
});

const drawTriangle = (p1, p2, p3) => {
  triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
};

const drawInnerTriangles = (p1, p2, p3, g) => {
  drawTriangle(p1, g, p2);
  drawTriangle(p2, g, p3);
  drawTriangle(p3, g, p1);
};

const plotPointName = (name = 'name', point) => {
  push();
  noStroke();
  fill(100);
  textAlign(CENTER, CENTER);
  text(name, point.x - canvasSize / 50, point.y);
  pop();
};

const calcCircumCenter = (v1, v2, v3) => {
  const A = v1;
  const B = v2;
  const C = v3;
  const a = B.dist(C);
  const b = A.dist(C);
  const c = A.dist(B);
  const val1 = pow(a, 2) * (pow(b, 2) + pow(c, 2) - pow(a, 2));
  const val2 = pow(b, 2) * (pow(c, 2) + pow(a, 2) - pow(b, 2));
  const val3 = pow(c, 2) * (pow(a, 2) + pow(b, 2) - pow(c, 2));
  return p5.Vector.mult(A, val1)
    .add(p5.Vector.mult(B, val2))
    .add(p5.Vector.mult(C, val3))
    .div(val1 + val2 + val3);
};

const circumRadius = (v1, v2, v3) => {
  const A = v1;
  const B = v2;
  const C = v3;
  const a = B.dist(C);
  const b = A.dist(C);
  const c = A.dist(B);
  return (a * b * c) / sqrt((a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c));
};
