let str = `sound`;
let count, fontSize, colors, splitStr, spaceWidth;

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

function setup() {
  createCanvas(800, 800);
  noStroke();
  fontSize = 24;
  splitStr = str.split('');
  initFont({
    size: fontSize,
    font: 'SourceCodePro-Regular',
    leading: fontSize,
  });
  textW = textWidth('m');
}

function draw() {
  background(0);
  fill(255);
  splitStr.forEach((c, i) => {
    let fluct = map(noise(frameCount * 0.01 + i), 0, 1, -1, 1);
    text(
      c,
      width / 2 + textW * i - textWidth(str) / 2,
      height / 2 - fontSize + ceil(fluct * fontSize * 8)
      // height / 2 - fontSize + fontSize * ceil(sin(frameCount * 0.1 + i))
    );
  });
}
