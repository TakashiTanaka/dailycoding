function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  stroke(100);
  noFill();

  class LineAnyPoints {
    /* xy座標を格納した配列を受け取る */
    constructor([...args]) {
      this.paths = args;
    }

    draw() {
      // 描画開始
      beginShape();

      // const startPath = this.paths[0];
      // const startV = createVector(startPath[0], startPath[1]);

      // const endPath = this.paths[this.paths.length - 1];
      // const endV = createVector(endPath[0], endPath[1]);

      // パスの数（配列の数）だけ実行する
      this.paths.forEach((path, count, paths) => {
        // 配列に格納されている値をベクトルに変換する
        const currentV = createVector(path[0], path[1]);

        // 最後のパスの1つ前までループしたら処理を終了
        if (count + 1 === paths.length) return;

        // 次のパス情報を取得
        const nextPath = paths[count + 1];

        // 次のパスをベクトルに変換
        const nextV = createVector(nextPath[0], nextPath[1]);

        // 現在のベクトルと次のベクトルの距離を計算（初期値）
        let dist = p5.Vector.dist(currentV, nextV);
        console.log(`initDist = ${dist}`);

        // 方向を取得するためにベクトルの差分を計算
        let sub = p5.Vector.sub(nextV, currentV);

        // 距離の数だけ繰り返す
        while (dist > 1) {
          sub = p5.Vector.sub(nextV, currentV);

          // 差分を正規化して方向を取得
          const direction = sub.copy().normalize();

          // 方向を現在のベクトルに加算
          currentV.add(direction.x, direction.y);

          // vertexを追加
          vertex(currentV.x, currentV.y);
          point(currentV.x, currentV.y - 20);
          point(currentV.x, currentV.y + 20);

          // 距離を再計算
          dist = p5.Vector.dist(currentV, nextV);
          // console.log(dist, currentV, nextV);
        }

        // 距離の数だけ繰り返す
        // f.iterator(round(dist), i => {
        //   // 方向を取得するためにベクトルの差分を計算
        //   const sub = p5.Vector.sub(currentV, nextV);

        //   // 差分を正規化して方向を取得
        //   const direction = sub.normalize().mult(10);

        //   // 方向を現在のベクトルに加算
        //   currentV.add(-direction.x, -direction.y);

        //   // vertexを追加
        //   vertex(currentV.x, currentV.y);
        //   point(currentV.x, currentV.y - 20);
        //   point(currentV.x, currentV.y + 20);

        //   // 距離を再計算
        //   dist = p5.Vector.dist(currentV, nextV);
        //   console.log(dist);
        // });
      });
      // vertex(endV.x, endV.y);
      // vertex(startV.x, startV.y);

      // 描画終了
      endShape();
    }
  }

  new LineAnyPoints([
    [100, 200],
    [300, 200],
    [500, 200],
  ]).draw();
}
