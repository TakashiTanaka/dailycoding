const ex = p5ex.Extension;
const fn = p5ex.Function;
const obj = p5ex.Object;
const util = p5ex.Utility;

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(0);
}

function draw() {
}
