function preload() {
  font = loadFont('Prata-Regular.ttf');
}

function setup() {
  createCanvas(800, 800);
  background(245);
  colorMode(RGB, 255, 255, 255, 100);
  textAlign(CENTER, BOTTOM);
  textFont(font);

  for (let i = 0; i < 10; i++) {
    noFill();
    let radius = 100;
    // let radius = random(-5, 5) * pow(i, random(1, 1.5));
    let x = width / 2 + cos(i / 2) * radius;
    let y = height / 2 + sin(i / 2) * radius;
    point(x, y);
    push();
    translate(x, y);
    rotate(HALF_PI + cos(i / 2) * sin(i / 2));
    fill(0);
    textSize(width / 60);
    text('A', 0, 0);
    pop();
  }
}
