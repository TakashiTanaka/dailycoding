function setup() {
  createCanvas(500, 500);
  noFill();
  stroke(255);
  strokeWeight(2);

  // ベクトル加算
  // const pos = createVector(0, 0);
  // f.iterator(500, i => {
  //   pos.add(1, 1);
  //   point(pos.x, pos.y);
  // });

  // 2つのベクトルを足して新たなベクトルを作りたい時はp5.Vectorクラスのstaticメソッドを使用
  // const v1 = createVector(1, 1);
  // const v2 = createVector(1, 1);
  // const v3 = p5.Vector.add(v1, v2);
  // console.log(v3);
}

function draw() {
  // ベクトル正規化
  background(0);
  const mouse = createVector(mouseX, mouseY);
  const center = createVector(width / 2, height / 2);
  mouse.sub(center);
  mouse.normalize();
  // mouse.mult(50);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
  console.log(mouse.x.toFixed(0), mouse.y.toFixed(0));
}
