// 四角形の重心っぽいものを計算して描画する

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

  const createRandomVector = () => createVector(random(width), random(height));
  A = createRandomVector();
  B = createRandomVector();
  C = createRandomVector();
  D = createRandomVector();

  const folderA = gui.addFolder('A');
  const folderB = gui.addFolder('B');
  const folderC = gui.addFolder('C');
  const folderD = gui.addFolder('D');
  folderA.add(A, 'x').min(0).max(width);
  folderA.add(A, 'y').min(0).max(height);
  folderB.add(B, 'x').min(0).max(width);
  folderB.add(B, 'y').min(0).max(height);
  folderC.add(C, 'x').min(0).max(width);
  folderC.add(C, 'y').min(0).max(height);
  folderD.add(D, 'x').min(0).max(width);
  folderD.add(D, 'y').min(0).max(height);
}

function draw() {
  background(0);

  plotPointName('A', A);
  ellipse(A.x, A.y, 10);
  plotPointName('B', B);
  ellipse(B.x, B.y, 10);
  plotPointName('C', C);
  ellipse(C.x, C.y, 10);
  plotPointName('D', D);
  ellipse(D.x, D.y, 10);
  drawQuad(A, B, C, D);

  G = calcApproximateQuadOfGravity(A, B, C, D);
  plotPointName('G', G);
  ellipse(G.x, G.y, 10);
}

const calcApproximateQuadOfGravity = (v1, v2, v3, v4) => {
  return p5.Vector.add(v1).add(v2).add(v3).add(v4).div(4);
};

const drawQuad = (v1, v2, v3, v4) => {
  quad(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y, v4.x, v4.y);
};

const plotPointName = (name = 'name', point) => {
  push();
  noStroke();
  fill(100);
  textAlign(CENTER, CENTER);
  text(name, point.x - canvasSize / 50, point.y);
  pop();
};
