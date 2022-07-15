// 2点間のベクトルの角度を測る

function draw() {
  createCanvas(800, 800);
  background(240);
  textAlign(CENTER, BOTTOM);

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

  let v1 = createVector(500, 300);
  let v2 = createVector(mouseX, mouseY);
  let v3 = createVector(400, 400);

  fill('red');
  ellipse(v1.x, v1.y, 100);

  fill('yellow');
  ellipse(v2.x, v2.y, 100);

  fill('blue');
  ellipse(v3.x, v3.y, 100);

  console.log(v1.angleBetween(v3));

  line(v1.x, v1.y, v2.x, v2.y);
  line(v2.x, v2.y, v3.x, v3.y);

  let newV = p5.Vector.sub(v1, v2);
  let newV2 = p5.Vector.sub(v3, v2);

  fill('pink');
  ellipse(newV.x, newV.y, 100);

  fill('skyblue');
  ellipse(newV2.x, newV2.y, 100);

  line(0, 0, newV.x, newV.y);
  line(0, 0, newV2.x, newV2.y);

  let angleBetween = calcAngleBetween(v1, v2, v3);

  // console.log(newV, newV2, angleBetween);
}
