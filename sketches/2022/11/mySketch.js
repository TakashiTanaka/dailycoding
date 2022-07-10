const util = p5ex.Utility;
const ex = p5ex.Extension;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noFill();

  // noiseの調整
  noiseDetail(random(1, 100));

  const colNum = 30;
  const rowNum = 30;

  const points = [];

  // グリッドを作る
  for (let column = -100; column <= width + 100; column += width / colNum) {
    for (let row = -100; row <= height + 100; row += height / rowNum) {
      points.push(createVector(column, row));
    }
  }

  let randomSeed = random(0.001, 0.005);

  new util.Iterator(200, count => {
    points.forEach((point, i) => {
      let angle = map(noise(point.x * randomSeed, point.y * randomSeed), 0, 1, 0, TAU);

      // 新しいベクトルを作成
      let newVec = p5.Vector.add(point, createVector(cos(angle), sin(angle)).mult(20));

      stroke(random(255));

      // 古いベクトルと新しいベクトルをつなぐ線を描画
      ex.exLine(point, newVec);

      // 古いベクトルを新しいベクトルに置き換え
      point.set(newVec);
    });
  });
}
