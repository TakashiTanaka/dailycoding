let pg;
let x;
let y;
let turtle;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  turtle = new DrawTurtle();

}

function draw() {
  background(0, 0, 70);
  turtle.display(-width / 2 + frameCount / 10, 100);
  // drawGoal(0, 0);

}



function drawGoal(x, y) {
  pg.stroke(0);
  pg.line(width / 2, height / 2 - 50, width / 2, height / 2)
  pg.line(width / 2 + 50, height / 2 - 50, width / 2 + 50, height / 2)
  pg.rect();
  image(pg, x, y);
}

class DrawTurtle {
  constructor() {

  }

  display() {
    noStroke();
    fill(0, 50, 100);
    fill(135, 100, 100);
    circle(width / 2 - 4, height / 2, 4);
    circle(width / 2 + 4, height / 2, 4);
    circle(width / 2 + 10, height / 2 - 2, 4);
    triangle(width / 2 - 4, height / 2 - 4,
      width / 2 - 12, height / 2 - 2,
      width / 2 - 4, height / 2 + 1);
    fill(0, 0, 50);
    circle(width / 2 + 10, height / 2 - 2, 1);
    fill(135, 100, 80);
    arc(width / 2, height / 2, 16, 16, PI, TWO_PI);
  }
}