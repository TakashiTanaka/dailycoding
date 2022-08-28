const ex = p5ex.Extension;
const fn = p5ex.Function;

// 文字に背景をつけるテスト

const canvasSize = Math.min(window.innerWidth, window.innerHeight);

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(0.8);
  const center = createVector(fn.centerX(), fn.centerY());
  
  fill(0.5, 1, 1, 1);
  ex.exText('TEST', center, 60, {
    align: 'corner',
    background: {
      visible: true,
      color: 'red',
      border: {
        visible: true,
        color: 'yellow',
        weight: 2,
      },
    },
  });
}
