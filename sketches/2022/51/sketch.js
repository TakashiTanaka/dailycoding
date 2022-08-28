// 三角形ABCの重心Gを計算して描画する

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
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  G = calcTrianglesCenterOfGravity(A.x, A.y, B.x, B.y, C.x, C.y);
  plotPointName('G', G);
  ellipse(G.x, G.y, 10);

}

const calcTrianglesCenterOfGravity = (x1, y1, x2, y2, x3, y3) => ({ x: (x1 + x2 + x3) / 3, y: (y1 + y2 + y3) / 3 });

const plotPointName = (name = 'name', point) => {
  push();
  noStroke();
  fill(100);
  textAlign(CENTER, CENTER);
  text(name, point.x - canvasSize / 50, point.y);
  pop();
};
