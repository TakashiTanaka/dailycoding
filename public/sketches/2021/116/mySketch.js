let object = [];
let objectNum = 11;

function setup() {
	createCanvas(1000, 1000);
	for (let i = 0; i < objectNum; i++) {
		object.push(new drawObject(width / (objectNum - 1) * i));
	}
}

function draw() {
	blendMode(BLEND);
	background(0);
	for (let x = 0; x < objectNum; x++) {
		for (let y = 0; y < objectNum; y++) {
			object[x].update(x, y);
			object[x].display(x * 100, y * 100);
		}
	}
	// drawGrid(100);
}

class drawObject {
	constructor() {
		this.counter = 0;
		this.initRad = 0;
		this.desRad = this.initRad;
		this.distanceRad = this.desRad - this.initRad;
		this.objectColor = 255;
		this.speed = 0.001;
		rectMode(CENTER);
		angleMode(DEGREES);
		noStroke();
	}
	update(x, y) {
		this.motion = easeOutExpo(this.counter);
		this.Rad = ceil(this.initRad + this.distanceRad * this.motion);
		if (this.counter < 1) {
			this.counter += this.speed;
		} else {
			this.counter = 0;
			this.initRad = this.Rad;
			this.desRad = this.initRad + (x + y) * 15;
			this.distanceRad = this.desRad - this.initRad;
		}
	}
	display(x, y) {
		fill(255);
		push();
		translate(x, y);
		rotate(this.Rad);
		rect(0, 0, 72);
		pop();
	}
}

function easeOutExpo(x) {
	return x === 1 ? 1 : 1 - pow(2, -10 * x);
}

function easeInBack(x) {
	const c1 = 1.70158;
	const c3 = c1 + 1;

	return c3 * x * x * x - c1 * x * x;
}

function easeInOutBack(x) {
	const c1 = 1.70158;
	const c2 = c1 * 1.525;

	return x < 0.5
		? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
		: (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeOutElastic(x) {
	const c4 = (2 * Math.PI) / 3;

	return x === 0
		? 0
		: x === 1
			? 1
			: pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
}

function drawGrid(gridSize) {
	stroke(255);
	strokeWeight(1);
	for (let x = 0; x <= 1000; x += gridSize) {
		for (let y = 0; y <= 1000; y += gridSize) {
			line(0, y, width, y);
		}
		line(x, 0, x, height);
	}
}