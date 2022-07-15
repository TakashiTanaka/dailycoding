let f = ['Georgia', 'Helvetica', 'Century', 'Century Gothic', 'Arial', 'Baskerville',
  'Bodoni MT', 'Consolas', 'Copperplate', 'Courier New', 'Didot', 'Franklin Gothic', 'Gill Sans', 'Impact'];
let num = 2;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;
let alphabet = [];
let charChange = 0;
let seed;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('canvas');
  textAlign(CENTER, CENTER);
  textSize(400);
  noCursor();
  seed = random(0, 100);
  for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
    alphabet[i] = char(counter).toUpperCase();
    counter++;
  }
}

function draw() {
  randomSeed(seed);
  for (let y = 0; y < height; y += height / num) {
    for (let x = 0; x < width; x += width / num) {
      drawingContext.save();
      noStroke();
      fill(0);
      rect(x, y, height / num);
      drawingContext.clip();
      fill(255);
      textFont(f[int(random(f.length))]);
      text(alphabet[charChange], width / 2, height / 2);
      drawingContext.restore();
    }
  }
  if (frameCount % 60 === 0) {
    if (charChange < 25) {
      charChange++;
    } else {
      charChange = 0;
    }
    seed++;
  }
}