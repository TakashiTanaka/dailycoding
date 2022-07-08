// ポイントの数
let pointCount = 800;

// ベクトルを格納する配列
let lissajousPoints = [];

let phi = 15;

let modFreqX = 3;
let modFreqY = 2;

let lineWeight = 0.5;
let lineColor;
let lineAlpha = 50;

let connectionRadius = 100;
let connectionRamp = 6;
let freq;

function setup() {
  createCanvas(800, 800);
  colorMode(RGB, 255, 255, 255, 100);
  background(0);
  noFill();
  freq = {
    x: int(random(1, 20)),
    y: int(random(1, 20)),
  };
  lineColor = color(255, 50);

  calculateLissajousPoints();
  drawLissajous();
}

function calculateLissajousPoints() {
  for (let i = 0; i <= pointCount; i++) {
    let angle = map(i, 0, pointCount, 0, PI);

    let x = cos(angle * freq.x) * cos(angle * angle + 2 * random(-0.2, 0.2));
    let y = sin(angle * freq.y) * cos(angle + 2 * random(-0.2, 0.2));
    x *= width / 2 - 30;
    y *= height / 2 - 30;

    lissajousPoints[i] = createVector(x, y);
  }
}

function drawLissajous() {
  strokeWeight(lineWeight);
  push();
  translate(width / 2, height / 2);

  // ポイントの数だけ実行
  for (let i1 = 0; i1 < pointCount; i1++) {
    stroke(255);
    strokeWeight(2 + 1 * sin(i1 / 10));
    line(
      lissajousPoints[i1].x,
      lissajousPoints[i1].y,
      lissajousPoints[i1 + 1].x,
      lissajousPoints[i1 + 1].y
    );
  }
  pop();
}
