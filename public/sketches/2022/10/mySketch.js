const util = p5ex.Utility;
const ex = p5ex.Extension;

// ポイントの数
let pointCount = 50;

// ベクトルを格納する配列
let points = [];

function setup() {
  createCanvas(1000, 1000);
  colorMode(RGB, 255, 255, 255, 100);
  background(0);
  const margin = width / 20;

  // ベクトルを作る
  new util.Iterator(pointCount, i => {
    points.push(
      createVector(
        random(margin, width - margin),
        random(margin, height - margin)
      )
    );
  });

  // 描画
  for (let i1 = 0; i1 < pointCount; i1++) {
    for (let i2 = 0; i2 < i1; i2++) {
      let d = points[i1].dist(points[i2]);
      stroke(255, 100 - d / 10);
      ex.exLine(points[i1],points[i2]);
    }
  }
}
