let alphabet = [];
let description = 'Press any key = Play\nClick mouse = Stop';

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  imageMode(CENTER);
  textFont('helvetica');
  textAlign(CENTER, CENTER);
  background(0);
  fill(255);
  textSize(20);
  textLeading(40);
  text(description, width / 2, height / 2);
  noCursor();
  noLoop();
}

function draw() {
  let i = counter();
  alphabet[i] = createGraphics(width, height);
  alphabet[i].blendMode(DIFFERENCE);
  alphabet[i].textAlign(CENTER, CENTER);
  alphabet[i].textFont('helvetica');
  if (frameCount % 2 === 0) {
    alphabet[i].fill(0);
  } else {
    alphabet[i].fill(255);
  }
  alphabet[i].textSize(random(100, 600));
  alphabet[i].text(key.toUpperCase(), width / 2, height / 2);
  image(alphabet[i], width / 2, height / 2, random(width * 2), random(height * 2));
  i++;
  if (mouseIsPressed) {
    noLoop();
    background(0);
    text(description, width / 2, height / 2);
  }
}

function counter() {
  let i = 0;
  i++;
  return i;
}

function keyPressed() {
  background(0);
  loop();
}
