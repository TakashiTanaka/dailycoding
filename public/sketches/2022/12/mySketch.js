const util = p5ex.Utility;
const ex = p5ex.Extension;

class flow {
  constructor(colNum, rowNum, drawCount = 10) {
    this.colNum = colNum;
    this.rowNum = rowNum;
    this.points = [];
    this.randomSeed = random(0.001, 1);
    this.drawCount = drawCount;
  }

  ellipse(size = width / 4) {
    for (let i = 0; i < 70; i++) {
      this.points.push(createVector(width / 2 + size * sin(i), height / 2 + size * cos(i)));
    }
    return this;
  }

  // グリッドの作成
  grid() {
    for (let column = -100; column <= width + 100; column += width / this.colNum) {
      for (let row = -100; row <= height + 100; row += height / this.rowNum) {
        this.points.push(createVector(column, row));
      }
    }

    return this;
  }

  // スタイル
  style(style, count, i) {
    style(count, i, this.drawCount);
    return this;
  }

  // 描画
  draw(style) {
    // noiseの調整
    noiseDetail(0.001);

    new util.Iterator(this.drawCount, count => {
      this.points.forEach((point, i) => {
        let angle = map(
          // noise(point.x * this.randomSeed, point.y * this.randomSeed),
          noise(point.x * 0.001, point.y * 0.001),
          0,
          1,
          0,
          TAU * 2
        );

        // 新しいベクトルを作成
        let newVec = p5.Vector.add(point, createVector(cos(angle), sin(angle)).mult(20));

        // スタイルを適用
        this.style(style, count, i);

        // 古いベクトルと新しいベクトルをつなぐ線を描画
        ex.exLine(point, newVec);

        // 古いベクトルを新しいベクトルに置き換え
        point.set(newVec);
      });
    });
  }
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noFill();

  new util.Iterator(5, ellipseCount => {
    new flow(20, 20, 50).ellipse(width / (ellipseCount + 2)).draw((count, i, drawTotalCount) => {
      let weight = map(count, 0, drawTotalCount, 0, 4);
      strokeWeight(weight);
      stroke(255);
    });
  });
}
