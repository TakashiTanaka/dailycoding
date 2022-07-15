let seed;
let size = 1500;
let fineness = 5;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;
let alphabet = [];
let charChange = 0;
let pallet = ['#DE14B5', '#40B7B7', '#E4F641', '#1343A2'];

function setup() {
  createCanvas(1000, 1000);
  frameRate(1);
  colorMode(HSB);
  angleMode(DEGREES);
  textFont('helvetica');
  textSize(800);
  textAlign(CENTER, CENTER);
  seed = random(1, 20);
  for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
    alphabet[i] = char(counter).toUpperCase();
    counter++;
  }
}

function draw() {
  let b = false;
  randomSeed(seed);
  background(0);
  for (let i = 0; i < size; i += fineness) {
    push();
    translate(width / 2, height / 2);
    if (b === false) {
      rotate(random(-20, 20));
      b = true;
    } else {
      rotate(random(-20, 20));
      b = false;
    }
    drawArc(0, random(10, 30), size - i);
    pop();
  }
}

function drawArc(start, end, radius) {
  drawingContext.save();
  noStroke();
  fill(0);
  arc(0, 0, radius, radius,
    start, end, PIE);
  drawingContext.clip();
  fill(pallet[int(random(pallet.length))]);
  text(alphabet[charChange], random(-20, 20), random(-20, 20));
  drawingContext.restore();
  if (end < 360) {
    start = end;
    if (end <= 330) {
      end = start + int(random(10, 30));
    } else {
      end = 360;
    }
    drawArc(start, end, radius);
  }
}

function mouseClicked() {
  charChange++;
  if (charChange > 25) {
    charChange = 0;
  }
}
