import { Extension as ex, Function as fn } from 'my-p5-ex';

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  textFont('serif');
  background(fn.randomColor());


  const randomNum = fn.randomInt(10,50);
  fn.iterator(randomNum, (x: number) => {
    fn.iterator(randomNum, (y: number) => {
      ex.exText(
        fn.randomAlphabet(),
        createVector(
          (canvasSize / (randomNum + 1)) * (x + 1) - canvasSize / (randomNum + 1) / 2,
          (canvasSize / (randomNum + 1)) * (y + 1) - canvasSize / (randomNum + 1) / 2
        ),
        canvasSize / (randomNum + 2),
        {
          color: fn.randomColor(),
          background: {
            visible: x % fn.randomInt(2, 6) === 0 && y % fn.randomInt(2, 6) === 0,
            color: fn.randomColor(),
            border: {
              visible: true,
              color: fn.randomColor(),
              weight: 6,
            },
          },
          align: 'corner',
        }
      );
    });
  });
}

window.setup = setup;
