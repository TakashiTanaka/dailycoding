function setup() {
  // wordの初期化
  const word = 'space';

  // フォント設定の初期化
  const font = {
    size: windowWidth / 50,
    family: 'helvetica',
    align: {
      horizontal: LEFT,
      vertical: CENTER,
    },
  };

  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(font.size);
  textFont(font.family);
  textAlign(font.align.horizontal, font.align.vertical);
  noStroke();

  // テキストをカーニング指定して表示
  const kerningText = (word, value, y) => {
    const wordSplitter = word => word.split('');
    const chars = wordSplitter(word);
    chars.forEach((char, n) => {
      text(char, n * value, y);
    });
  };

  // windowHeight分だけ繰り返す
  [...Array(int(height / font.size - 1))].forEach((_, y, a) => {
    // y座標
    let pos = {
      y: {
        init: font.size,
        current: font.size + y * font.size,
      },
    };
    // y座標をwidthの幅でマッピング
    let x = map(
      y,
      0,
      a.length,
      font.size / 2,
      width / (word.length - 1) - word.length
    );
    // カーニングしたテキストを表示
    kerningText(word, x, pos.y.current);
  });
}

function windowResized() {
  setup();
}
