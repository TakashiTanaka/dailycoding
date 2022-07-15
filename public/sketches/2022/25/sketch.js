const util = p5ex.Utility;

function preload() {
  font = loadFont('Prata-Regular.ttf');
}

function setup() {
  createCanvas(800, 800);
  background(245);
  colorMode(RGB, 255, 255, 255, 100);
  textAlign(CENTER, BOTTOM);
  textFont(font);

  /**
   * 三点のベクトルから角度を計算する関数
   * @param {p5.Vector} beginV 始点のベクトル
   * @param {p5.Vector} betweenV 中間点のベクトル
   * @param {p5.Vector} endV 終点のベクトル
   * @return {number} 角度
   */
  const calcAngleBetween = (beginV, betweenV, endV) => {
    let normalizeBeginV = p5.Vector.sub(beginV, betweenV);
    let normalizeEndV = p5.Vector.sub(endV, betweenV);
    return normalizeBeginV.angleBetween(normalizeEndV);
  };

  // ベクトルを作る
  let pos = [];
  new util.Iterator(38, i => {
    // let x = i * 10 + 100 * cos(i * sin(i));
    // let y = height / 2 + sin(i) * 100;
    noFill();
    let radius = random(-5, 5) * pow(i, random(1, 1.5));
    let x = width / 2 + cos(i) * radius;
    let y = height / 2 + sin(i) * radius;
    // let x = random(width);
    // let y = random(height);
    // let x = random(width);
    // let y = random(height);
    // let x = i * 5 + noise(i, i * 2) * 100;
    // let y = height / 2 + noise(i, i * 2) * 100;
    pos.push(createVector(x, y));
    // point(x, y);
  });

  // デバッグ用のライン（各ポイントを線でつなぐ）
  for (let i = 0; i < 2; i++) {
    fill(random(200, 255), random(200, 255), random(200, 255));
    beginShape();
    for (let i = 0; i < pos.length - 1; i++) {
      strokeWeight(1);
      stroke(100);
      curveTightness(random(5, 10));
      curveVertex(pos[i].x, pos[i].y, pos[i + 1].x, pos[i + 1].y);
      line(pos[i].x, pos[i].y, pos[i + 1].x, pos[i + 1].y);
    }
    endShape();
  }

  let strArry = '#DAILYCODING'.split('');

  // ベクトル間の角度を計算
  for (let i = 0; i < pos.length - 2; i++) {
    let str = strArry[0];

    const offsetAngle = calcAngleBetween(
      createVector(pos[i + 2].x, pos[i + 1].y),
      pos[i + 1],
      pos[i + 2]
    );
    angleMode(DEGREES);
    const angle = calcAngleBetween(pos[i], pos[i + 1], pos[i + 2]);
    const normalizeAngle = angle > 0 ? angle : 360 + angle;
    push();
    translate(pos[i + 1].x, pos[i + 1].y);
    rotate(90 + offsetAngle - normalizeAngle / 2);

    fill(0);
    textSize(width / 90);
    text(str, 0, 0);
    pop();

    strArry.push(strArry[0]);
    strArry.splice(0, 1);
    console.log(angle, 180 - angle, offsetAngle);
  }
}
