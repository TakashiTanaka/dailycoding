// 2点間（A, B）の中点（C）を計算して描画

const canvasSize = Math.min(window.innerWidth, window.innerHeight);
const gui = new lil.GUI();
let A, B, C;

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noFill();
  stroke(100);
  strokeWeight(2);

  A = { x: random(width), y: random(height) };
  B = { x: random(width), y: random(height) };

  const folderA = gui.addFolder('A');
  const folderB = gui.addFolder('B');
  folderA.add(A, 'x').min(0).max(width);
  folderA.add(A, 'y').min(0).max(height);
  folderB.add(B, 'x').min(0).max(width);
  folderB.add(B, 'y').min(0).max(height);
}

function draw() {
  background(0);

  plotPointName('A', A);
  ellipse(A.x, A.y, 10);
  plotPointName('B', B);
  ellipse(B.x, B.y, 10);
  
  C = calcMidPoint(A.x, A.y, B.x, B.y);
  plotPointName('C', C);
  ellipse(C.x, C.y, 10);

  line(A.x, A.y, B.x, B.y);
}

const calcMidPoint = (x1, y1, x2, y2) => ({ x: (x1 + x2) / 2, y: (y1 + y2) / 2 });


const plotPointName = (name = 'name', point) => {
  push();
  noStroke();
  fill(100);
  textAlign(CENTER, CENTER);
  text(name, point.x - canvasSize / 50, point.y);
  pop();
};
