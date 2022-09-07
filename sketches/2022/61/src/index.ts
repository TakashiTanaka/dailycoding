import { Extension as ex, Function as fn } from 'my-p5-ex';

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(fn.randomColor());
  textFont('serif');
  fn.iterator(100, (i: number) => {
    ex.exText(fn.randomAlphabet(), createVector(canvasSize / 2, canvasSize / 2), canvasSize, {
      color: color(random(),random(),random(),random()),
      blur: random() * canvasSize / 40 + canvasSize / 1000,
      align: 'center'
    });
  })
}

window.setup = setup;
