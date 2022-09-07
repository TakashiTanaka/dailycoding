const ex = p5ex.Extension;
const fn = p5ex.Function;
const obj = p5ex.Object;
// const util = p5ex.Utility;

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  textFont('serif');
  background(fn.randomColor());

  fn.iterator(10, i => {
    fn.randomColor();
    ex.exText(
      fn.randomAlphabet(),
      // createVector(random() * canvasSize, random() * canvasSize),
      createVector(canvasSize / 2, canvasSize / 2),
      (random() * canvasSize),
      {
        align: 'center',
        rotate: i * TAU / 360,
      }
    );
  });
}
