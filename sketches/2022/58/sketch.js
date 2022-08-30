const ex = p5ex.Extension;
const fn = p5ex.Function;
const obj = p5ex.Object;
// const util = p5ex.Utility;

const canvasSize = Math.min(window.innerWidth, window.innerHeight);


function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(fn.randomColor());

  fn.iterator(500, i => {
    ex.exRect(
      createVector(random() * canvasSize, random() * canvasSize),
      (random() * canvasSize) / 2,
      (random() * canvasSize) / 40,
      {
        color: fn.randomColor(),
        border: {
          visible: i % 2 === 0,
          color: fn.randomColor(),
          weight: random() * 5 + 1,
        },
        dropShadow: {
          visible: true,
          offset: {
            x: 20,
            y: 10,
          },
          blur: 0,
          color: fn.randomColor(),
        },
        rotate: QUARTER_PI + (random() - 0.5) * QUARTER_PI / 2,
        // rotate: 0,
        rectMode: CENTER,
      }
    );
  });
}
