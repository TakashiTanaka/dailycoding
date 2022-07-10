const iterator = (iNum, func) => {
  for (let count = iNum; count--;) { func(count) };
}

const initFont = (size = 10, font = 'helvetica-light', horizAlign = LEFT, vertAlign = TOP, leading = 1.5) => {
  textSize(size);
  textFont(font);
  textAlign(horizAlign, vertAlign)
  textLeading(leading);
}

const drawRepeatText = (str, textColor, size) => {
  const fontSize = size;
  initFont(fontSize);
  const msg = str;
  const msgWidth = textWidth(msg);
  const margin = (width - msgWidth * floor(width / msgWidth)) / (floor(width / msgWidth) - 1);

  fill(textColor);

  iterator(floor(width / msgWidth), (columnCount) => iterator(floor(height / fontSize), (rowCount) => text(msg, columnCount * (msgWidth + margin), rowCount * (fontSize + margin))));
  ;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  background(0);
  let textSize = map(mouseX, 0, width, width / 200, width / 15);
  drawRepeatText('iterate', 255, textSize);
}

function draw() { setup(); }

function windowResized() { setup(); }
