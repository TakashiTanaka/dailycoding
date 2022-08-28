// 三角形ABCの重心Gを計算して描画する
// また重心Gを頂点とした三角形△AGB, △BGC, △CGAを描画する

const canvasSize = Math.min(window.innerWidth, window.innerHeight);
const gui = new lil.GUI();
let A, B, C, G;

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noFill();
  stroke(100);
  strokeWeight(2);

  A = { x: random(width), y: random(height) };
  B = { x: random(width), y: random(height) };
  C = { x: random(width), y: random(height) };

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

  G = calcTrianglesCenterOfGravity(A.x, A.y, B.x, B.y, C.x, C.y);
  plotPointName('G', G);
  ellipse(G.x, G.y, 10);

  drawInnerTriangles(A, B, C, G);
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
