// ベクトルが格納されている配列を渡し、lerpする関数を作る（lerpVectors）

const canvasSize = Math.min(window.innerWidth, window.innerHeight);
const utils = p5ex.Utility;
const fn = p5ex.Function;
const vectors = [];

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(0);

  fn.iterator(10, i => {
    vectors.push(createVector(random(), random()));
  });

  const newVectors = fn.lerpVectors(vectors, 4);

  newVectors.flat().forEach((v, i) => {
    noStroke();
    fill(1);
    ellipse(v.x, v.y, 2);
    fill(1,1,1);
  });
}
