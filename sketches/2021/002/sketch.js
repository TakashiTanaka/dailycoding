const ex = p5ex.Extension;
const func = p5ex.Function;

let j = 0;
let v1 = [];

function setup() {
  func.createFullCanvas();
  background(0);
  stroke(255);
  strokeWeight(10);
  init();
}

const init = () => {
  v1 = []; // 初期化
  for (let i = 0; i < 1000; i++) {
    v1.push(createVector(random(width * 0.1, width * 0.9), random(height * 0.1, height * 0.9)));
  }
}

function draw() {
  background(0);
  stroke(random(255), random(255), random(255));
  ex.exLine(v1[j], v1[j + 1]);
  ex.exLine(v1[j + 1], v1[j + 2]);
  ex.exLine(v1[j + 2], v1[j + 3]);
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
  init();
}
