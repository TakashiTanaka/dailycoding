let x1 = [];
let y1 = [];
let x2 = [];
let y2 = [];
let j = 0;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.getElementById('canvas'));
  background(0);
  stroke(255);
  strokeWeight(10);
  for (let i = 0; i < 1000; i++) {
    x1[i] = random(width * 0.1, width * 0.9);
    y1[i] = random(height * 0.1, height * 0.9);
  }
}

function draw() {
  background(0);
  stroke(random(255), random(255), random(255));
  line(x1[j], y1[j], x1[j + 1], y1[j + 1]);
  line(x1[j + 1], y1[j + 1], x1[j + 2], y1[j + 2]);
  line(x1[j + 2], y1[j + 2], x1[j + 3], y1[j + 3]);
  if (frameCount % 3 === 0) {
    if (j < 1000) {
      j++;
    } else {
      j = 0;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i++) {
    x1[i] = random(width * 0.1, width * 0.9);
    y1[i] = random(height * 0.1, height * 0.9);
  }
}
