// lerpVectorsを応用してなんか作ってみる

const canvasSize = Math.min(window.innerWidth, window.innerHeight);
const utils = p5ex.Utility;
const fn = p5ex.Function;
const vectors = [];

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(0);

  const n = 800;
  fn.iterator(n, i => {
    // vectors.push(createVector(random(), random()));
    const m = map(i, 0, n - 1, 0, 1);
    vectors.push(createVector(0.5 + sin(i / PI) * 0.5, m));
  });
}

function draw() {
  background(0);
  const newVectors = fn.lerpVectors(vectors, 8);

  newVectors.forEach((vectors, i) => {
    vectors.flat().forEach((v, j) => {
      noStroke();
      fill(1);
      ellipse(v.x, v.y + sin(i * j + frameCount * 0.05), 2 + sin(i * j + frameCount * 0.05));
      fill(1, 1, 1);
    });
  });
}
