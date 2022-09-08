import { Extension as ex, Function as fn } from 'my-p5-ex';

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(0.1);
  const count = 300;
  fn.iterator(count, (i: number) => {
    ex.exRect(createVector(canvasSize / 2, canvasSize / 2), canvasSize - (i * canvasSize) / count, {
      align: 'center',
      color: color(random(), random(), random(),random() + 0.5),
      dropShadow: {
        visible: true,
        color: color(random(), random(), random()),
        blur: random(canvasSize / 30),
        offset: {
          x: random(-canvasSize / 5, canvasSize / 5),
          y: random(-canvasSize / 5, canvasSize / 5),
        },
      },
    });
  });
}

window.setup = setup;
