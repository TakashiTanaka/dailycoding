import type p5 from 'p5';

// グリッドを描く
export const drawGrid = unitSize => {
  const iterator = (iNum, func) => {
    for (let count = iNum; count--; ) {
      func(count);
    }
  };
  iterator(ceil(width / unitSize), count => {
    line(count * unitSize, 0, count * unitSize, height);
    line(0, count * unitSize, width, count * unitSize);
  });
};

export const randomColor = (i: p5) =>
  i.color(i.random(255), i.random(255), i.random(255));

export const randomInt = (i: p5, min: number, max: number): number =>
  i.int(i.random(min, max + 1));

// 繰り返し処理
export const iterator = (count: number, fn: Function) => {
  [...Array(count).keys()].forEach(i => {
    fn(i);
  });
};

// グリッドレイアウトに使用できる関数
export const gridLayout = options => {
  const { count, fn } = options;
  iterator(count.x, x => {
    iterator(count.y, y => {
      fn(x, y);
    });
  });
};

// テキストの描写
export const cText = (
  i: p5,
  text: string,
  size = 16,
  position = { x: 0, y: 0 },
  fillColor = { fill: true, color: 0 },
  strokeColor: { fill: boolean; color: p5.Color } = {
    fill: true,
    color: 255,
  },
  rotate = { isRotate: false, degree: 0, angleMode: i.DEGREES }
) => {
  i.push();
  if (rotate.isRotate) {
    i.translate(position.x, position.y);
    i.angleMode(rotate.angleMode);
    i.rotate(rotate.degree);
    i.translate(-position.x, -position.y);
  }
  if (!fillColor.fill) i.noFill();
  else i.fill(fillColor.color);
  if (!strokeColor.fill) i.noStroke();
  else i.stroke(strokeColor.color);
  i.textSize(size);
  i.text(text, position.x, position.y);
  i.pop();
};

// フォントの初期化
export const initFont = (
  i: p5,
  size = 10,
  font = 'helvetica-light',
  horizontalAlign: p5.HORIZ_ALIGN = i.LEFT,
  verticalAlign: p5.VERT_ALIGN = i.TOP,
  leading = 1.5
) => {
  i.textSize(size);
  i.textFont(font);
  i.textAlign(horizontalAlign, verticalAlign);
  i.textLeading(leading);
};

// サインの値を返す
export const fSin = (i: p5, base: number, strength: number, angle: number) =>
  base + strength * i.sin(angle);

// コサインの値を返す
export const fCos = (i: p5, base: number, strength: number, angle: number) =>
  base + strength * i.cos(angle);

// 等間隔の線分を描く
export const drawEqDivLine = (
  beginXPos,
  endXPos,
  divNum,
  firstYpos,
  secondYpos
) => {
  iterator(divNum, count =>
    line(
      beginXPos + (endXPos / divNum) * count,
      firstYpos,
      endXPos / divNum + (endXPos / divNum) * count,
      secondYpos
    )
  );
};

// 繰り返しのテキストを描く
export const drawRepeatText = (str, textColor) => {
  const fontSize = windowWidth / 80;
  initFont(fontSize);
  const msg = str;
  const msgWidth = textWidth(msg);
  const margin = msgWidth / 5;

  fill(textColor);

  iterator(floor(width / msgWidth), columnCount =>
    iterator(floor(height / fontSize), rowCount =>
      text(
        msg,
        columnCount * (msgWidth + margin),
        rowCount * (fontSize + margin)
      )
    )
  );
};

// 原点を設定する
export const setOrigin = (originX, originY, beforeFunc, afterFunc) => {
  translate(originX, originY);
  push();
  beforeFunc();
  translate(-originX, -originY);
  afterFunc();
  pop();
};

// テキストをカーニング指定して表示
export const kerningText = (word, value, y) => {
  const wordSplitter = word => word.split('');
  const chars = wordSplitter(word);
  chars.forEach((char, n) => {
    text(char, n * value, y);
  });
};
