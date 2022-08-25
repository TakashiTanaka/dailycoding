const ex = p5ex.Extension;
const fn = p5ex.Function;

// 文字に背景をつけるテスト

const canvasSize = Math.min(window.innerWidth, window.innerHeight);
const strings = ['智に', '働けば', '角が立つ', '情に', '棹させば', '流される'];

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(random(), random(), random());

  fn.iterator(100, i => {
    fill(random(), random(), random());

    const pos = createVector(random() * height, random() * height);
    const size = random(1, height / 8);

    ex.exText(strings[fn.randomInt(0, strings.length - 1)], pos, size, {
      align: 'center',
      background: {
        visible: true,
        color: color(random(), random(), random()),
        border: {
          visible: i % 2 === 0,
          color: color(random(), random(), random()),
          weight: random(1, 10),
        },
      },
    });
  });
}
