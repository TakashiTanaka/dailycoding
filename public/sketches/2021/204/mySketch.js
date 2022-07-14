// reference: http://www.bnn.co.jp/support/generativedesign_p5js/

let segmentCount = 360;
let radius = 300;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(360, 0, height);

  let angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);

  for (let angle = 0; angle <= 360; angle += angleStep) {
    let vx = width / 2 + cos(radians(angle)) * radius;
    let vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
    fill(angle, width, height);
  }
  endShape();

  // パスの流れ確認用
  noFill();
  stroke(0);
  strokeWeight(3);
  beginShape();
  vertex(width / 2, height / 2);
  for (let angle = 0; angle <= 360; angle += angleStep) {
    let vx = width / 2 + cos(radians(angle)) * radius;
    let vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
  }
  endShape();
  noStroke();

}

function keyPressed() {
  switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
  }
}