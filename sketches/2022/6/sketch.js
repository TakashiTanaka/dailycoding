function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  // 背景・光の設定
  background(250, 200, 200);
  directionalLight(255, 255, 255, 0.5, 0.5, -1);
  ambientLight(150);

  // 回転するドーナツの描画
  rotateX(millis() / 1000);
  rotateY(millis() / 3000);
  noStroke();
  fill(230, 180, 100);
  torus(120, 40, 60, 40); // 作成するドーナツの代わり
}
