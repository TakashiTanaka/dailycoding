const util = p5ex.Utility;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  const baseColor = random(0, 360);
  noFill();
  stroke(255);
  strokeWeight(2);
  background(random(baseColor - 60, baseColor), random(20, 30), random(10, 20));

  // 水平にのびる単純な線
  // (() => {
  //   const v1 = createVector(0, 50);

  //   new util.Iterator(500, i => {
  //     v1.add(1, 0);
  //     point(v1.x, v1.y);
  //   });
  // })();

  // 開始点と目的地を定める
  // 100,100 -> 400,400とする
  // (() => {
  //   const v1 = createVector(100, 100);
  //   const v2 = createVector(400, 400);

  //   strokeWeight(10);
  //   point(v1.x, v1.y);
  //   point(v2.x, v2.y);

  //   const dist = p5.Vector.dist(v1, v2);
  //   console.log(dist);

  //   const sub = p5.Vector.sub(v1, v2);
  //   console.log(sub.x, sub.y);

  //   const direction = sub.normalize();
  //   console.log(direction.x, direction.y);

  //   strokeWeight(2);

  //   new util.Iterator(floor(dist), i => {
  //     v1.add(-direction.x, -direction.y);
  //     point(v1.x, v1.y);
  //   });
  // })();

  // 開始点と目的地を定め、変化が起きても大丈夫なようにする
  // 100,100 -> 400,400とする
  // const test = (x1, y1, x2, y2) => {
  //   const v1 = createVector(x1, y1);
  //   const v2 = createVector(x2, y2);

  //   strokeWeight(10);
  //   // point(v1.x, v1.y);
  //   // point(v2.x, v2.y);

  //   strokeWeight(2);

  //   let dist = p5.Vector.dist(v1, v2);
  //   console.log(dist);

  //   new util.Iterator(floor(dist), i => {
  //     const sub = p5.Vector.sub(v1, v2);
  //     const direction = sub.normalize();
  //     dist = p5.Vector.dist(v1, v2);
  //     v1.add(-direction.x + cos(i / 50), -direction.y + sin(i / 10));
  //     point(v1.x, v1.y);
  //   });
  // };

  // test(10, 10, 200, 500);

  class Line {
    constructor({ x1, y1, x2, y2 }) {
      this.v1 = createVector(x1, y1);
      this.v2 = createVector(x2, y2);
    }

    draw({ fluct, strokeWeight }) {
      let dist = p5.Vector.dist(this.v1, this.v2);
      beginShape();
      new util.Iterator(floor(dist), i => {
        if (strokeWeight) {
          strokeWeight(strokeWeight(i));
        } else {
          strokeWeight(1);
        }

        const sub = p5.Vector.sub(this.v1, this.v2);
        const direction = sub.normalize();
        dist = p5.Vector.dist(this.v1, this.v2);

        if (fluct) {
          this.v1.add(-direction.x + fluct.x(i), -direction.y + fluct.y(i));
        } else {
          this.v1.add(-direction.x, -direction.y);
        }

        curveVertex(this.v1.x, this.v1.y);
      });
      endShape();
    }
  }

  // new Line({ x1: 10, y1: 10, x2: 200, y2: 400 }).draw({
  //   fluct: {
  //     x: i => cos(i / 50),
  //     y: i => sin(i / 50),
  //   },
  //   strokeWeight: i => noise(i) * 2,
  // });

  // 作ったLineクラスで複数書いてみる
  // new util.Iterator(20, count => {
  //   stroke(random(50, 255));
  //   new Line({
  //     x1: 0,
  //     y1: random(height),
  //     x2: width,
  //     y2: random(height),
  //   }).draw({
  //     fluct: {
  //       x: i => cos(i / count) * (10 + 100 * cos(i / random(5, 60))),
  //       y: i => sin(i / count) * (10 + 100 * sin(i / random(5, 60))),
  //     },
  //     strokeWeight: i => noise(i + count),
  //   });
  // });

  // 作ったLineクラスで複数書いてみる
  new util.Iterator(100, count => {
    const randomFluct = random(10, 200);
    count % 5
      ? stroke(random(baseColor - 60, baseColor), random(50, 80), random(50, 100))
      : stroke(baseColor + 180 + random(-30, 30), random(50, 80), random(50, 100));
    new Line({
      x1: random(width),
      y1: random(height),
      x2: random(width),
      y2: random(height),
    }).draw({
      fluct: {
        x: i => cos(i / randomFluct - count),
        y: i => sin(i / randomFluct - count),
      },
      strokeWeight: i => noise(i + count) * 1.5,
    });
  });

  // 水平に波打つ線
  // (() => {
  //   const v1 = createVector(0, 50);

  //   new util.Iterator(500, i => {
  //     v1.add(1, sin(i / 10));
  //     point(v1.x, v1.y);
  //   });
  // })();

  // (() => {
  //   const v1 = createVector(100, 50);

  //   new util.Iterator(500, i => {
  //     v1.add(1, sin(i / 10) + 1);
  //     point(v1.x, v1.y);
  //   });
  // })();
}

function draw() {
  // const center = createVector(width / 2, height / 2);
  // center.add(p5.Vector.random2D().normalize().mult(10));
  // point(center.x, center.y);
  // console.log(randomGaussian(1, 10));
}
