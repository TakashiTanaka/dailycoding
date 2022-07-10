const util = p5ex.Utility;

function setup() {
  createCanvas(800, 800);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  stroke(360, 100);

  new util.Iterator(800, i => {
    // let m = map(i, 0, 100, 100, 700);
    // let m = map(cos(i), -1, 1, 100, 700);
    // let m = map(noise(i, i * 2), 0, 1, 100, 700);
    // let m = map(randomGaussian(0, 0.25), -1, 1, 100, 700);
    // let m = map(i, 0, 800, 0, 1);
    // let n = map(new p5.Gen().window(m, 'hyperelliptic', [0.5]), 0, 1, 0, height);
    // let x = map(i, 0, 800, 100, 700);
    // point(x, n);
  });

  let pointNum = 5000;

  new util.Iterator(pointNum, i => {
    let type = 'squircular';
    let g = new p5.Gen();
    let m = map(random(i), 0, 800, 0, 1);
    let n = map(g.window(m, type, [1.0]), 0, 1, 500, width - 100);
    point(n, random(100, height - 100));
    n = map(g.window(m, type, [1.0]), 0, 1, width - 500, 100);
    point(n, random(100, height - 100));
    n = map(g.window(m, type, [1.0]), 0, 1, height - 500, 100);
    point(random(100, width - 100), n);
    n = map(g.window(m, type, [1.0]), 0, 1, 500, height - 100);
    point(random(100, width - 100), n);
  });

  // new util.Iterator(pointNum, i => {
  //   let type = 'squircular';
  //   let g = new p5.Gen();
  //   let m = map(random(i / 100), 0, pointNum, 0, 1);
  //   let n = map(g.window(m, type, [0.5]), 0, 1, height, 0);
  //   let s = map(i, 0, pointNum, 100, 700);
  //   point(s, n);
  // });

  // 逆正規分布的な事をしたかった
  // new util.Iterator(3, j => {
  //   new util.Iterator(10000, i => {
  //     let step = j * 100;
  //     point(
  //       random(100 + step, width - 100 - step),
  //       random(100 + step, width - 100 - step)
  //     );
  //   });
  // });

  // new util.Iterator(4, j => {
  //   new util.Iterator(10000, i => {
  //     // ボックス
  //     // point(random(100, width - 100), random(100, width - 100));
  //     // ざらザラライン
  //     // point(randomGaussian(100, 10), random(100, width - 100));
  //     // 円形
  //     // point(randomGaussian(width / 2, 100), randomGaussian(height / 2, 100));

  //     let step = j * 100;
  //     let n = map(
  //       cos(noise(i, i / 100) * 10),
  //       -1,
  //       1,
  //       100 + step,
  //       width - 100 - step
  //     );
  //     let n2 = map(noise(i, i / 10), 0, 1, 100 + step, width - 100 - step);
  //     point(n, n2);

  //     n = map(noise(i, i / 10), 0, 1, 100 + step, width - 100 - step);
  //     n2 = map(
  //       sin(noise(i, i / 100) * 10),
  //       -1,
  //       1,
  //       100 + step,
  //       width - 100 - step
  //     );

  //     point(n, n2);
  //   });
  // });
}
