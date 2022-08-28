const ex = p5ex.Extension;
const fn = p5ex.Function;

// 文字にドロップシャドウをつけるテスト

const canvasSize = Math.min(window.innerWidth, window.innerHeight);
const strings = ['ザフッ', 'ガッ', 'ササッ', 'スーッ', 'ボンッ', 'ビュー', 'ガガガッ', 'ヒューン', 'ドッ', 'バッ'];

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 1, 1, 1, 1);
  background(random(), random(), random());
  textFont('serif');

  fn.iterator(fn.randomInt(10, 60), i => {
    fill(random(), random(), random());

    const size = random(1, height / 2);
    const pos = createVector(0, random(-size, height));

    ex.exText(strings[fn.randomInt(0, strings.length - 1)], pos, size, {
      align: 'corner',
      dropShadow: {
        visible: true,
        offset: {
          x: random() * size / 20,
          y: random() * size / 20,
        },
        blur: 0,
        color: color(random(), random(), random())
      },
    });
  });
}
