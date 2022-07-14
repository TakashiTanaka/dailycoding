const balls = [];
const iterator = f => n => { for (let i = 0; i < n; i++) f(i); };
const createArray = (array, instance, num) => iterator(() => array.push(instance()))(num);
const randomX = () => random(0, width);
const randomY = () => random(0, height);
const centerX = () => width / 2;
const centerY = () => height / 2;
const randomSize = () => random(400, 500);

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	background(0);
	createArray(balls, () => new Ball(centerX(), centerY(), randomSize(), color(random(360), 80, 10, 10)), 500);
}

function draw() {
	blendMode(BLEND);
	background(0, 0, 0);
	blendMode(SCREEN);
	balls.forEach((ball, index) => {
		ball.display();
		ball.move(index);
	}
	);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

class Ball {
	constructor(x, y, size, color = 255) {
		this.initPos = { x, y };
		this.pos = { x, y };
		this.initSize = size;
		this.size = size;
		this.color = color;
		this.randomSpeed = random(0.001, 0.01);
		this.randomRadius = random(0, 100);
	}
	display() {
		fill(this.color);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.size);
	}
	move(index) {
		this.pos.x = this.initPos.x + this.randomRadius * cos(frameCount * this.randomSpeed + index);
		this.pos.y = this.initPos.y + this.randomRadius * sin(frameCount * this.randomSpeed + index);
		this.size = this.initSize + 100 * sin(frameCount * this.randomSpeed + index);
	}
}