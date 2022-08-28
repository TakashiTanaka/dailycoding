// 円の方程式を使って円を描く（http://www.geisya.or.jp/~mwm48961/kou3/circle1.htm）
// 円の中心が原点の場合

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  noFill();
  stroke(100);
}

const calcCircleY = (r,x) => {
  return sqrt(pow(r,2) - pow(x, 2));
}

function draw() {
  translate(canvasSize / 2, canvasSize / 2);
  background(0);
  const r = canvasSize / 4;
  point(0, 0);
  for (let i = 0; i < 1000; i++) {
    point(calcCircleY(r, i), i);
    point(-calcCircleY(r, i), i);
    point(calcCircleY(r, i), -i);
    point(-calcCircleY(r, i), -i);
  }
}
