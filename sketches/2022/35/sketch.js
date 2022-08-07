const canvasSize = Math.min(window.innerWidth, window.innerHeight);
let myShader;

function preload() {
  /* シェーダーファイル */
  myShader = loadShader('./shader.vert', './shader.frag');
}

function setup() {
  createCanvas(canvasSize, canvasSize, WEBGL);
}

function draw() {
  background(240)
  shader(myShader); // シェーダーを適用
  myShader.setUniform('uResolution', [width, height]);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200);
  box(200,10,10);
  // quad(-1, -1, -1, 1, 1, 1, 1, -1);
  resetShader();
}
