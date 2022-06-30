function setup() {
  createCanvas(500, 1200);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(0);
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let x = 0,
    y = 0;

  /* second */
  (x = 0), (y = 0);
  iterator(second, i => {
    let xStep = 100;
    stroke('red');
    strokeWeight(2);
    let m = map(second, 1, 58, -HALF_PI, PI + HALF_PI);
    line(x + 50, y + 50, x + 50 + 50 * cos(m), y + 50 + 50 * sin(m));
    if (x >= width - xStep) {
      y += 100;
      x = 0;
    } else {
      x += xStep;
    }
  });

  /* minute */
  (x = 0), (y = 0);
  iterator(minute, i => {
    let xStep = 100;
    stroke('blue');
    strokeWeight(2);
    let m = map(minute, 1, 59, -HALF_PI, PI + HALF_PI);
    let length = 50 * 0.6;
    line(x + 50, y + 50, x + 50 + length * cos(m), y + 50 + length * sin(m));
    if (x >= width - xStep) {
      y += 100;
      x = 0;
    } else {
      x += xStep;
    }
  });

  (x = 0), (y = 0);
  /* hour */
  iterator(hour, i => {
    let xStep = 100;
    stroke('yellow');
    strokeWeight(2);
    let m = map(hour, 1, 23, -HALF_PI, PI + HALF_PI);
    let length = 50 * 0.3;
    line(x + 50, y + 50, x + 50 + length * cos(m), y + 50 + length * sin(m));
    if (x >= width - xStep) {
      y += 100;
      x = 0;
    } else {
      x += xStep;
    }
  });

  // line(width / 2, height / 2, width / 2 + 100 * cos(frameCount * 0.02), height / 2 + 100 * sin(frameCount * 0.02));
  /* 敷き詰めレイアウト */
  // let x = 0,
  //   y = 0;
  // iterator(12, i => {
  //   let xStep = 100;
  //   rect(x, y, 100);
  //   if (x >= width - xStep) {
  //     y += 100;
  //     x = 0;
  //   } else {
  //     x += xStep;
  //   }
  // });
}
