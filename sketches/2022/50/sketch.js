// const p5 = require("p5");

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  stroke(160, 100, 100);
  fill(360, 100, 100);

  function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }

  function easeInSine(x) {
    return 1 - cos((x * PI) / 2);
  }

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - pow(2, -10 * x);
  }

  function easeInBounce(x) {
    return 1 - easeOutBounce(1 - x);
  }

  for (let i = 0; i < width; i++) {
    const ease = easeInBounce(map(i, 0, width, 0, 1));
    point(i, height - ease * height);
    console.log(ease);
  }
}
