import * as f from './lib/p5Func';
import * as v from './lib/p5Variables';
import type p5 from 'p5';

// 強制リロード
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}

const sketch = (p: p5) => {
  let count = 0;
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textSize(80);
    p.textAlign(p.RIGHT, p.TOP);
    p.textFont('helvetica');
    p.strokeWeight(2);
    p.stroke(255);
    p.fill(0);
  };

  p.draw = () => {
    p.background('black');
    f.iterator(count, i => {
      p.text(i, 300 + p.cos(i / 100) * 100, 20 + i / 3);
    });
    if (count <= 2022) {
      count++;
    }
  };
};

new p5(sketch);
