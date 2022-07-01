// // ドロップシャドウ
// const dropShadow = (
//   i: p5,
//   { x = 4, y = 4, blur = 4, color = 'black' }
// ) => {
//   i.drawingContext.shadowOffsetX = x;
//   i.drawingContext.shadowOffsetY = y;
//   i.drawingContext.shadowBlur = blur;
//   i.drawingContext.shadowColor = color;
// };

// // グリッドを描く
// const drawGrid = unitSize => {
//   const iterator = (iNum, func) => {
//     for (let count = iNum; count--; ) {
//       func(count);
//     }
//   };
//   iterator(ceil(width / unitSize), count => {
//     line(count * unitSize, 0, count * unitSize, height);
//     line(0, count * unitSize, width, count * unitSize);
//   });
// };

// // ランダムな配色
// const randomColor = (i: p5) =>
//   i.color(i.random(255), i.random(255), i.random(255));

/**
 * ランダムな整数を返す関数
 * @param { number } min
 * @param { number } max
 */
const randomInt = (min, max) => int(random(min, max + 1));

/**
 * 繰り返し処理
 * @param { number } count
 * @param { function } fn
 */
const iterator = (count, fn) => {
  for (let i = 0; i < count; i++) {
    fn(i);
  }
};

/**
 * グリッドレイアウトに使用できる関数
 * コールバック関数を各ループで実行
 * @param { { count:{x: number, y: number}, fn: function(x, y) } } [options={count, fn}]
 */
const gridLayout = (options = {}) => {
  const { count, fn } = options;
  iterator(count.x, x => {
    iterator(count.y, y => {
      fn(x, y);
    });
  });
};

/**
 * X座標の中心を返す関数
 * @returns number
 */
const centerX = () => width / 2;

/**
 * Y座標の中心を返す関数
 * @returns number
 */
const centerY = () => height / 2;

// テキストの描写
const cText = ({
  text,
  size,
  position,
  fillColor,
  strokeColor: { fill, color },
  rotate = { isRotate: false, degree: 0, angleMode: DEGREES },
}) =>
  // text: string,
  // size = 16,
  // position = { x: 0, y: 0 },
  // fillColor = { fill: true, color: 0 },
  // strokeColor: { fill: boolean, color: p5.Color } = {
  //   fill: true,
  //   color: 255,
  // },
  // rotate = { isRotate: false, degree: 0, angleMode: DEGREES }}
  {
    push();
    if (rotate.isRotate) {
      translate(position.x, position.y);
      angleMode(rotate.angleMode);
      rotate(rotate.degree);
      translate(-position.x, -position.y);
    }
    if (!fillColor.fill) noFill();
    else fill(fillColor.color);
    if (!strokeColor.fill) noStroke();
    else stroke(strokeColor.color);
    textSize(size);
    text(text, position.x, position.y);
    pop();
  };

/**
 * フォントの初期化
 * @param {{ size: number, font: string, horizontalAlign: LEFT | CENTER | RIGHT, verticalAlign: TOP | CENTER | BOTTOM, leading: float}} [options={}]
 */
const initFont = (options = {}) => {
  const {
    size = 10,
    font = 'helvetica-light',
    horizontalAlign = LEFT,
    verticalAlign = TOP,
    leading = size,
  } = options;
  textSize(size);
  textFont(font);
  textAlign(horizontalAlign, verticalAlign);
  textLeading(leading);
};

/**
 * 前後のスペースをトリムする関数
 * @param {string} str
 * @returns {string}
 */
const trSpace = str => str.trim();

// // サインの値を返す
// const fSin = (i: p5, base: number, strength: number, angle: number) =>
//   base + strength * i.sin(angle);

// // コサインの値を返す
// const fCos = (i: p5, base: number, strength: number, angle: number) =>
//   base + strength * i.cos(angle);

// // 等間隔の線分を描く
// const drawEqDivLine = (
//   beginXPos,
//   endXPos,
//   divNum,
//   firstYpos,
//   secondYpos
// ) => {
//   iterator(divNum, count =>
//     line(
//       beginXPos + (endXPos / divNum) * count,
//       firstYpos,
//       endXPos / divNum + (endXPos / divNum) * count,
//       secondYpos
//     )
//   );
// };

// // 繰り返しのテキストを描く
// const drawRepeatText = (str, textColor) => {
//   const fontSize = windowWidth / 80;
//   initFont(fontSize);
//   const msg = str;
//   const msgWidth = textWidth(msg);
//   const margin = msgWidth / 5;

//   fill(textColor);

//   iterator(floor(width / msgWidth), columnCount =>
//     iterator(floor(height / fontSize), rowCount =>
//       text(
//         msg,
//         columnCount * (msgWidth + margin),
//         rowCount * (fontSize + margin)
//       )
//     )
//   );
// };

// 原点を設定する
const setOrigin = (originX, originY, beforeFunc, afterFunc) => {
  translate(originX, originY);
  push();
  beforeFunc();
  translate(-originX, -originY);
  afterFunc();
  pop();
};

// // テキストをカーニング指定して表示
// const kerningText = (word, value, y) => {
//   const wordSplitter = word => word.split('');
//   const chars = wordSplitter(word);
//   chars.forEach((char, n) => {
//     text(char, n * value, y);
//   });
// };

/**
 * 配列をシャッフルする関数
 * @param { Array } array
 * @return { Array }
 */
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    // ランダムな数値（キーとして使用）を取得
    let j = Math.floor(Math.random() * (i + 1));
    // 元配列のi番目と元配列のj番目を入れ替える
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * 引数にとった値のどちらかを返す関数
 * @param { any } arg1
 * @param { any } arg2
 * @return { any }
 */
const whichValue = (arg1, arg2) => {
  if (randomInt(0, 1)) {
    return arg1;
  } else {
    return arg2;
  }
};

/**
 * 引数にとった値のどれかを返す関数
 * @param { any } args
 * @returns { any }
 */
const anyValue = (...args) => args[randomInt(0, args.length - 1)];

// unDublicateRandomNumber
/* 
  (min, max) => {
    for (let i = min; i < max; i++) {
      const num = array[i];
    }
  }
*/

// ランダムな直角二等辺三角形を描く
const isoscelesRightTriangle = (x, y, size) => {
  const randomPoints = shuffle([
    { x: x, y: y },
    { x: x + size, y: y },
    { x: x + size, y: y + size },
    { x: x, y: y + size },
  ]);
  triangle(
    randomPoints[0].x,
    randomPoints[0].y,
    randomPoints[1].x,
    randomPoints[1].y,
    randomPoints[2].x,
    randomPoints[2].y
  );
};

// もし0未満か360超過だったら正規化した値を返す
const normalizeHSB = hue => {
  if (hue > 360) {
    return normalizeHSB(hue - 360);
  } else if (hue < 0) {
    return normalizeHSB(hue + 360);
  }
  return hue;
};

/**
 * アルファベットの配列を作成する関数
 * @return { Array }
 */
const mkAlphabetArray = () => {
  let alphabet = [],
    startUnicode = 65,
    endUnicode = 90,
    counter = startUnicode;
  for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
    alphabet[i] = char(counter).toUpperCase();
    counter++;
  }
  return alphabet;
};

/**
 * ランダムなアルファベットを返す関数
 * @return { String }
 */
const randomAlphabet = () => {
  let alphabets = mkAlphabetArray();
  return alphabets[randomInt(0, alphabets.length - 1)];
};
