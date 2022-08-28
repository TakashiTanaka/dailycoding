// 三点間から角度を知りたい時
// aCosを使う（引数に底辺 / 斜辺を与える）

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
}

function draw() {
  background(0);

  translate(width / 2, height / 2); // 座標を初期化（中央を原点とする）

  noFill();
  stroke(160, 100, 100);
  const r = width / 4; // 半径

  const p1 = createVector(0, 0); // 原点
  const p2 = createVector(r * cos(frameCount * 0.01), r * sin(frameCount * 0.01));
  const p3 = createVector(p2.x, p1.y);

  strokeWeight(10);
  point(p1.x, p1.y);
  point(p2.x, p2.y);
  point(p3.x, p3.y);

  strokeWeight(2);
  drawingContext.setLineDash([]);
  line(p1.x, p1.y, p2.x, p2.y);

  drawingContext.setLineDash([5, 15]);
  line(p1.x, p1.y, p3.x, p3.y);
  line(p2.x, p2.y, p3.x, p3.y);

  const aCos =  acos(abs(p2.x) / r);

  // const startRad = p2.x > 0 ? 0: PI;
  push();
  // rotate();
  if(p2.x <= 0) {
    scale(-1.0, 1.0);
  } 
  if(p2.y <= 0) {
    scale(1.0, -1.0);
  }
  arc(p1.x, p1.y, 100, 100, 0, aCos);
  pop();

  fill(100);
  noStroke();

  const info = [
    `p1.x: ${p1.x}`,
    `p1.y: ${p1.y}`,
    `p2.x: ${p2.x}`,
    `p2.y: ${p2.y}`,
    `p3.x: ${p3.x}`,
    `p3.y: ${p3.y}`,
    `acos(p2 / r): ${aCos}`,
  ];

  info.forEach((data, i) => {
    text(data, -width / 2 + 20, -height / 2 + 20 * i + 20);
  });
}
