let ball = [];
let ballNum;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	noStroke();
	if (windowWidth > windowHeight) {
		ballNum = width / 2;
	} else if (windowWidth < windowHeight) {
		ballNum = height / 2;
	}
	for (let i = 0; i < ballNum; i++) {
		ball[i] = new DrawBall();
	}
}

function draw() {
	background(80);

	for (let i = 0; i < ballNum; i++) {
		ball[i].display();
		ball[i].move();
		if (ball[i].ballPosX > width + ball[i].ballSize / 2 ||
			ball[i].ballPosX < 0 - ball[i].ballSize / 2 ||
			ball[i].ballPosY > height + ball[i].ballSize / 2 ||
			ball[i].ballPosY < 0 - ball[i].ballSize / 2) {
			ball[i].ballPosX = width / 2;
			ball[i].ballPosY = height / 2;
			ball[i].ballColor = random(360);
			ball[i].ballSize = random(1, 100);
		}
	}
}

class DrawBall {
	constructor() {
		this.ballPosX = width / 2;
		this.ballPosY = height / 2;
		this.ballColor = random(360);
		this.ballVec1 = random(-1, 1);
		this.ballVec2 = random(-1, 1);
		this.ballSpeed = random(2, 20);
		this.ballSize = random(1, 100);
	}

	resetPosition() {
		translate(-width / 2, -height / 2);
	}

	display() {
		fill(this.ballColor, 100, 100, 0.7);
		circle(this.ballPosX, this.ballPosY, this.ballSize);
	}

	move() {
		this.ballPosX += this.ballVec1 * this.ballSpeed;
		this.ballPosY += this.ballVec2 * this.ballSpeed;
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	if (windowWidth > windowHeight) {
		ballNum = windowWidth / 2;
	} else if (windowWidth < windowHeight) {
		ballNum = windowHeight / 2;
	}
	for (let i = 0; i < ballNum; i++) {
		ball[i] = new DrawBall();
	}
}