let rec = [];
let recNum = 20;

function setup() {
	createCanvas(1000, 1000);
	for (let i = 0; i < recNum; i++) {
		rec.push(new drawRect());
	}
}

function draw() {
	blendMode(BLEND);
	background('#F5F3F4');
	for (let i = 0; i < recNum; i++) {
		rec[i].update(i);
		rec[i].display();
	}
	// drawGrid(25);
}

class drawRect {
	constructor() {
		this.sizeList = [100, 250, 500];
		this.rectSize = this.sizeList[int(random(this.sizeList.length))];
		this.motion;
		this.counter = 0;
		this.initPosX = width / 2;
		this.desX = this.rectSize / 2 * int(random(1, width / this.rectSize * 2));
		this.distanceX = this.desX - this.initPosX;
		this.initPosY = height / 2;
		this.desY = this.rectSize / 2 * int(random(1, height / this.rectSize * 2));
		this.distanceY = this.desY - this.initPosY;
		this.rectColor = int(random(100, 255));
		this.speed = 0.01 * int(random(1, 2));
		this.randomSelector = int(random(0, 2));
		rectMode(CENTER);
	}
	display() {
		noStroke();
		blendMode(MULTIPLY);
		fill(this.rectColor);
		if (this.randomSelector % 2 === 0) {
			rect(this.x, this.y, this.rectSize);
		} else {
			ellipse(this.x, this.y, this.rectSize);
		}
	}
	update() {
		this.motion = easeOutExpo(this.counter);
		this.x = int(this.initPosX + this.distanceX * this.motion);
		this.y = int(this.initPosY + this.distanceY * this.motion);
		if (this.counter == 1) {
			noLoop();
		} else if (this.counter < 1.1) {
			this.counter += this.speed;
		} else {
			this.counter = 0;
			this.speed = 0.01;
			this.initPosX = this.x;
			this.desX = this.rectSize / 2 * int(random(1, width / this.rectSize * 2));
			this.distanceX = this.desX - this.initPosX;
			this.initPosY = this.y;
			this.desY = this.rectSize / 2 * int(random(1, height / this.rectSize * 2));
			this.distanceY = this.desY - this.initPosY;
		}
	}
}

function easeOutExpo(x) {
	return x === 1 ? 1 : 1 - pow(2, -10 * x);
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