// 三点間から角度を知りたい時

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  textSize(16);
  noFill();

  translate(width / 2, height / 2); // 座標を初期化（中央を原点とする）

  // 位置ベクトル
  const A = createVector((random() - 0.5) * canvasSize, (random() - 0.5) * canvasSize); // 点A
  const O = createVector((random() - 0.5) * canvasSize, (random() - 0.5) * canvasSize); // 原点O
  const B = createVector((random() - 0.5) * canvasSize, (random() - 0.5) * canvasSize); // 点B
  const C = p5.Vector.lerp(A, B, 0.5); // 点Aと点Bの中点C
  const X = createVector(O.x + 100, O.y); // 点Oの水平線の点X

  // ベクトル
  const OA = p5.Vector.sub(A, O);
  const OB = p5.Vector.sub(B, O);
  const OC = p5.Vector.sub(C, O);
  const OX = p5.Vector.sub(X, O);

  // 位置ベクトルを点で描画
  stroke(0, 100, 100); // 赤
  strokeWeight(10);
  [A, O, B, C, X].forEach(p => point(p.x, p.y));
  
  // ベクトルを描画
  stroke(180, 100, 100); // 水色
  strokeWeight(2);
  line(A.x, A.y, O.x, O.y);
  line(O.x, O.y, B.x, B.y);

  line(O.x, O.y, C.x, C.y);

  // 下記の処理はangleBetweenメソッドを使うことで楽に計算できる
  // const cosValue = p5.Vector.dot(OA, OB) / (OA.mag() * OB.mag()); // 内積の式を変形させてcosθを計算
  // const aCos = acos(cosValue); // 逆関数acosにcosθを引数として渡し、角度を計算

  const OBOA = OB.angleBetween(OA); // OBとOAのなす角度
  const normalizeOBOA = abs(OBOA); // 絶対値することで0≦角度≦180（0≦角度≦HALF_PI）に限定できる

  const OXOC = OX.angleBetween(OC); // OXとOCのなす角度
  const OXOA = OX.angleBetween(OA); // OXとOAのなす角度
  const OXOB = OX.angleBetween(OB); // OXとOBのなす角度

  const result = (OXOA + OXOB - OBOA) / 2;

  // OBとOAのなす角度を円弧で描く
  stroke(60, 100, 100); // 黄色
  push();
  translate(O.x, O.y);
  rotate(OXOC);
  arc(0, 0, 50, 50, 0, normalizeOBOA);
  pop();

  // 各値をテキストで描く

  fill(100);
  noStroke();

  const OACenter = p5.Vector.lerp(A, O, 0.5);
  const OBCenter = p5.Vector.lerp(O, B, 0.5);

  text('OA', OACenter.x, OACenter.y);
  text('OB', OBCenter.x, OBCenter.y);
  text('A', A.x, A.y);
  text('O', O.x, O.y);
  text('B', B.x, B.y);
  text('C', C.x, C.y);
  text('X', X.x, X.y);

  const info = [
    `A(${A.x}, ${A.y})`,
    `B(${B.x}, ${B.y})`,
    `O(${O.x}, ${O.y})`,
    `OBとOAのなす角度: ${OBOA}`,
    `OXとOCのなす角度:  ${OXOC}`,
    `OXとOAのなす角度: ${OXOA}`,
    `OXとOBのなす角度:  ${OXOB}`,
  ];

  info.forEach((data, i) => {
    text(data, -width / 2 + 20, -height / 2 + 20 * i + 20);
  });
}

// function draw() {
// }
