// wordsの初期化
const words = [
  '朝',
  'の',
  '林檎',
  '髪',
  'と',
  '聴け',
  '風',
  '失う',
  '言葉',
  'そこに',
  '水',
  'しかし',
  'そうだ',
  '解像度',
  '耳',
  'で',
  'は',
  'を',
  'まだ',
  'すでに',
  'あったの',
  '。',
  '、',
  '輪郭',
  '消える',
  'マクドナルド',
  '機能',
  '&',
  '「',
  '」',
  '（',
  ')',
];

let clicked = false;
let log = [];
let layer;
let count = 0;

function setup() {
  // フォント設定の初期化
  const font = {
    size: windowWidth / 70,
    family: 'serif',
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
  layer = createGraphics(width, height);
  layer.textSize(font.size);
  layer.textFont(font.family);
  layer.textAlign(font.align.horizontal, font.align.vertical);
}

function draw() {
  let mouse = {
    x: mouseX,
    y: mouseY,
  };
  let word = words[int(random(words.length))];

  background(255);

  image(layer, 0, 0);

  stroke(0);
  noFill();
  rect(0, 0, width, height);

  fill(0);
  noStroke();
  layer.noStroke();
  if (clicked) {
    log.push({ word: word, x: mouseX, y: mouseY });
    layer.text(log[count].word, log[count].x, log[count].y);
    count++;
    clicked = false;
  }
  text(word, mouse.x, mouse.y);
}

function mouseClicked() {
  clicked = true;
}

// function windowResized() {
//   setup();
// }
