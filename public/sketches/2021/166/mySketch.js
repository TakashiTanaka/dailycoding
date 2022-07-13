const util = p5ex.Utility;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  const baseColor = random(0, 360);
  background(random(baseColor - 60, baseColor), random(20, 30), random(10, 20));

  // class Line {
  //   constructor({
  //     x1,
  //     y1,
  //     x2,
  //     y2,
  //   }: {
  //     x1: number;
  //     y1: number;
  //     x2: number;
  //     y2: number;
  //   }) {
  //     this.v1 = createVector(x1, y1);
  //     this.v2 = createVector(x2, y2);
  //   }

  //   draw({
  //     fluct,
  //     strokeWeight,
  //   }: {
  //     fluct?: { x: Function; y: Function };
  //     strokeWeight?: Function;
  //   }) {
  //     let dist = p5.Vector.dist(this.v1, this.v2);
  //     beginShape();
  //     new util.Iterator(floor(dist), i => {
  //       if (strokeWeight) {
  //         strokeWeight(strokeWeight(i));
  //       } else {
  //         strokeWeight(1);
  //       }

  //       const sub = p5.Vector.sub(this.v1, this.v2);
  //       const direction = sub.normalize();
  //       dist = p5.Vector.dist(this.v1, this.v2);

  //       if (fluct) {
  //         this.v1.add(-direction.x + fluct.x(i), -direction.y + fluct.y(i));
  //       } else {
  //         this.v1.add(-direction.x, -direction.y);
  //       }

  //       curveVertex(this.v1.x, this.v1.y);
  //     });
  //     endShape();
  //   }
  // }

  // 作ったLineクラスで複数書いてみる
  // new util.Iterator(100, count => {
  //   const randomFluct = random(10, 200);
  //   count % 5
  //     ? stroke(
  //         random(baseColor - 60, baseColor),
  //         random(50, 80),
  //         random(50, 100)
  //       )
  //     : stroke(
  //         baseColor + 180 + random(-30, 30),
  //         random(50, 80),
  //         random(50, 100)
  //       );
  //   new Line({
  //     x1: random(width),
  //     y1: random(height),
  //     x2: random(width),
  //     y2: random(height),
  //   }).draw({
  //     fluct: {
  //       x: i => cos(i / randomFluct - count),
  //       y: i => sin(i / randomFluct - count),
  //     },
  //     strokeWeight: i => noise(i + count) * 1.5,
  //   });
  // });

  class LineAnyPoints {
    constructor([...args]) {
      this.paths = args;
      // this.v1 = createVector(x1, y1);
      // this.v2 = createVector(x2, y2);
    }

    draw() {
      // 描画開始
      beginShape();

      // const startPath = this.paths[0];
      // const startV = createVector(startPath[0], startPath[1]);

      // const endPath = this.paths[this.paths.length - 1];
      // const endV = createVector(endPath[0], endPath[1]);

      // パスの数だけ実行する
      this.paths.forEach((path, count, paths) => {
        // 配列に格納されている値をベクトルに変換する
        const currentV = createVector(path[0], path[1]);

        // 最後のパスの1つ前までループしたら処理を終了
        if (count + 1 === paths.length) return;

        const nextPath = paths[count + 1];
        const nextV = createVector(nextPath[0], nextPath[1]);

        // ここで最初のポイントと次のポイントの距離を測りたい
        let dist = p5.Vector.dist(currentV, nextV);

        new util.Iterator(round(dist), i => {
          const sub = p5.Vector.sub(currentV, nextV);

          const direction = sub.normalize();

          dist = p5.Vector.dist(currentV, nextV);

          currentV.add(
            -direction.x + cos(i / 6 / (count + 1)),
            -direction.y + sin(i / 6 / (count + 1))
          );

          vertex(currentV.x, currentV.y);
        });
      });
      // vertex(endV.x, endV.y);
      // vertex(startV.x, startV.y);

      // 描画終了
      endShape();
    }
  }

  // ランダムなパスを作成
  const array = [];

  // new util.Iterator(50, count =>
  //   array.push([count % 2 !== 0 ? 0 : width, count * 30])
  // );

  new util.Iterator(10, drawCount => {
    const array2 = [];

    new util.Iterator(10, count => {
      array2.push([random(0, width), random(0, height)]);
    });

    // 使ってみる
    stroke(250);
    fill(random(360), random(100), random(100));
    new LineAnyPoints(array2).draw();
  });
}
