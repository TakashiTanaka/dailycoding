let object = [];
let objectNum = 10;

function setup() {
	createCanvas(1000, 1000);
	for (let i = 0; i < objectNum; i++) {
		object.push(new drawObject());
	}
}

function draw() {
	blendMode(BLEND);
	background(0);
	for (let i = 0; i < objectNum; i++) {
		object[i].update(i);
		object[i].display();
	}
	// drawGrid(25);
}

class drawObject {
	constructor() {
		this.counter = 0;
		this.counter2 = 0;
		this.interval = this.counter + 1.3;
		this.initSize = 100;
		this.desSize = 50 * int(random(1, 20));
		this.distanceSize = this.desSize - this.initSize;
		this.objectColor = 255;
		this.speed = 0.01 * int(random(1, 2));
		rectMode(CENTER);
		strokeWeight(2);
	}
	display() {
		stroke(255);
		noFill();
		ellipse(width / 2, height / 2, this.Size);
	}
	update() {
		this.motion = easeOutElastic(this.counter);
		this.Size = int(this.initSize + this.distanceSize * this.motion);
		if (this.counter < 1) {
			this.counter += this.speed;
			this.counter2 += this.speed;
		} else if (this.counter2 < this.interval) {
			this.counter2 += this.speed;
		} else {
			this.counter = 0;
			this.counter2 = 0;
			this.speed = 0.01 * int(random(1, 2));
			this.initSize = this.Size;
			this.desSize = 50 * int(random(1, 20));
			this.distanceSize = this.desSize - this.initSize;
		}
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