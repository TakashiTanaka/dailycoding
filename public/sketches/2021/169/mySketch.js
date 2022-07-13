function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  stroke(100);
  strokeWeight(2);
  noFill();
  angleMode(DEGREES);

  class LineAnyPoints {
    /* xy座標を格納した配列を受け取る */
    constructor([...args]) {
      this.points = args;
      this.vectors = [];
    }

    /* 受け取った座標を計算してベクトルに変換 */
    calc() {
      // ポイントの数（配列の数）だけ実行する
      this.points.forEach((path, count, points) => {
        // 配列に格納されている値をベクトルに変換する
        const currentV = createVector(path[0], path[1]);

        // 最後のパスの1つ前までループしたら処理を終了
        if (count + 1 === points.length) return;

        // 次のパス情報を取得
        const nextPoint = points[count + 1];

        // 次のパスをベクトルに変換
        const nextV = createVector(nextPoint[0], nextPoint[1]);

        const dist = p5.Vector.dist(currentV, nextV);

        // 中間ベクトルを作成
        const lerpV = [];

        // 中間ベクトルを作成
        for (let i = 1; i < dist; i += 1) {
          let m = map(i, 0, dist, 0, 1);
          lerpV.push(p5.Vector.lerp(currentV, nextV, m));
        }

        this.vectors.push(currentV);
        this.vectors.push(...lerpV);
        this.vectors.push(nextV);
      });
    }

    transform({ fluct }) {
      // 最初と最後のベクトルを抽出
      const startV = this.vectors.slice(0, 1);
      const endV = this.vectors.slice(-1);

      // 間のベクトルを抽出
      const lerpV = this.vectors.slice(1, -1);

      // 間のベクトルを操作
      lerpV.forEach((vec, i) => {
        vec.add(fluct.x(i), fluct.y(i));
      });

      // 当然、変形後のベクトルは元のベクトルとは乖離するが、、
      // 元のベクトルと比較してスケーリングさせたい

      // 結合
      // this.vectors = [...lerpV];
      this.vectors = [...startV, ...lerpV, ...endV];
    }

    debug() {
      // デバッグ用
      push();
      strokeWeight(2);
      stroke(0, 100, 100);
      this.vectors.forEach(vec => {
        point(vec.x, vec.y);
      });
      pop();
    }

    draw(options) {
      // ベクトルを計算
      // this.calc();

      // ベクトルを変形
      this.transform(options);

      // 描画開始
      beginShape();

      // 描画
      this.points.forEach((vec, i, points) => {
        const V = createVector(vec[0], vec[1]);
        vertex(V.x, V.y);

        if (i < points.length - 1) {
          const nextV = createVector(points[i + 1][0], points[i + 1][1]);
          push();
          strokeWeight(10);
          stroke('red');
          let angle = V.angleBetween(nextV);
          console.log(angle);
          point(V.x + 20 * cos(angle + 90), V.y - 20 * sin(angle + 90));
          stroke('blue');
          point(V.x + 20 * -cos(angle + 90), V.y - 20 * -sin(angle + 90));
          pop();
        }
      });

      // 描画終了
      endShape();

      return this;
    }
  }

  const options = {
    fluct: {
      x: i => cos(i / 100) * 50,
      y: i => sin(i / 100) * 50,
    },
  };

  new LineAnyPoints([
    [100, 100],
    [250, 200],
    [500, 100],
    [200, 500],
  ])
    .draw(options)
    .debug();
}
