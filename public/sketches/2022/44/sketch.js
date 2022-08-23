// 三点間から角度を知りたい時

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
  const p1 = createVector(0, 0);
  const p2 = createVector(100 * cos(frameCount * 0.05), 100 * sin(frameCount * 0.05));
  const xLine = createVector(width / 2, 0);
  const vectorA = p5.Vector.sub(p1, p2);
  const vectorB = p5.Vector.sub(p1, xLine);

  strokeWeight(10);
  point(p1.x, p1.y);
  point(p2.x, p2.y);

  strokeWeight(2);
  line(p1.x, p1.y, p2.x, p2.y);
  line(p1.x, p1.y, xLine.x, xLine.y);

  push();
  arc(p1.x, p1.y, 50, 50, 0, vectorB.angleBetween(vectorA));
  pop();

  fill(100);
  noStroke();

  const vectorACenter = p5.Vector.lerp(p1, p2, 0.5);

  textSize(20);

  text('a', vectorACenter.x, vectorACenter.y);

  const info = [`p1.x: ${p1.x}`, `p1.y: ${p1.y}`, `p2.x: ${p2.x}`, `p2.y: ${p2.y}`];

  info.forEach((data, i) => {
    text(data, -width / 2 + 20, -height / 2 + 20 * i + 20);
  });
}
