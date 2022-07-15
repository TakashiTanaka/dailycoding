let ball = [];
let ballNum = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0);
  noFill();
  strokeWeight(0.5);
  for (let i = 0; i < ballNum; i++) {
    ball[i] = new Ball(createVector(width / 2, height / 2), random(1, width / 5));
  }
}

function draw() {
  background(0, 0.2);
  for (let i = 0; i < ballNum; i++) {
    ball[i].display();
    ball[i].move();
    ball[i].collision();
  }
}

const exCircle = (vector, radius) => circle(vector.x, vector.y, radius * 2);

class Ball {
  constructor(v, radius) {
    this.v = v;
    this.ballColor = 100;
    this.direction = createVector(random(-1, 1), random(-1, 1));
    this.speed = random(2, 5);
    this.radius = radius;
  }

  display() {
    stroke(this.ballColor);
    exCircle(this.v, this.radius);
  }

  move() {
		const velocity = p5.Vector.mult(this.direction,this.speed);
		this.v.add(velocity);
  }

  collision() {
    if (this.v.x >= width - this.radius || this.v.x <= 0 + this.radius) {
      this.direction.x *= -1;
    } else if (this.v.y >= height - this.radius || this.v.y <= 0 + this.radius) {
      this.direction.y *= -1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < ballNum; i++) {
    ball[i] = new Ball();
  }
}
