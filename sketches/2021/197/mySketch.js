let ball;
let mover;
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
	ball = new Ball(centerX(), centerY(), 100, color(360, 0, 100, 100));
	mover = new Mover(ball);
	// console.log(mover);
}

function draw() {
	// blendMode(BLEND);
	background(0, 0, 0);
	// blendMode(SCREEN);
	ball.display();
	mover.rotate(100, 2);
	// mover.test();
	// balls.forEach((ball, index) => {
	// ball.display();
	// movers[index].debug();
	// ball.move(index);
	// // }
	// );
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

class Mover {
	constructor(obj) {
		this.obj = obj;
		this.initPos = { x: obj.pos.x, y: obj.pos.y }
	}
	rotate(rad, speed = 1) {
		this.obj.pos.x = this.initPos.x + rad * cos(frameCount * 0.01 * speed);
		this.obj.pos.y = this.initPos.y + rad * sin(frameCount * 0.01 * speed);
	}
	test() {
		// this.obj.pos.x += 100;
		// this.obj.pos.y += 100;
		// console.log(this.obj.pos.x, this.obj.pos.y);
	}
	debug() {
		console.log(this.initPos.x, this.initPos.y);
	}
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
	// move(index) {
	// 	this.pos.x = this.initPos.x + this.randomRadius * cos(frameCount * this.randomSpeed + index);
	// 	this.pos.y = this.initPos.y + this.randomRadius * sin(frameCount * this.randomSpeed + index);
	// 	this.size = this.initSize + 100 * sin(frameCount * this.randomSpeed + index);
	// }
}