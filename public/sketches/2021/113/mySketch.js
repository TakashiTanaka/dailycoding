let object = [];
let objectNum = 30;

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
		this.sizeList = [50, 100, 250, 500];
		this.objectSize = this.sizeList[int(random(this.sizeList.length))];
		this.objectWidth = this.sizeList[int(random(this.sizeList.length))];
		this.objectHeight = this.sizeList[int(random(this.sizeList.length))];
		this.counter = 0;
		this.counter2 = 0;
		this.interval = this.counter + 1.3;
		this.initPosX = width / 2;
		this.desX = this.objectWidth / 2 * int(random(1, width / this.objectWidth * 2));
		this.distanceX = this.desX - this.initPosX;
		this.initPosY = height / 2;
		this.desY = this.objectHeight / 2 * int(random(1, height / this.objectHeight * 2));
		this.distanceY = this.desY - this.initPosY;
		this.objectColor = 255;
		this.speed = 0.01 * int(random(1, 2));
		this.randomSelector = int(random(0, 3));
		this.randomTex = int(random(0, 10));
		rectMode(CENTER);
		strokeWeight(2);
	}
	display() {
		// noFill();
		// stroke(this.objectColor);
		if (this.objectWidth > this.objectHeight) {
			stroke(255);
			fill(0);
		} else if (this.objectWidth < this.objectHeight) {
			stroke(0);
			fill(255);
		} else {
			stroke(255);
			fill(240, 100, 30);
		}
		rect(this.x, this.y, this.objectWidth, this.objectHeight);
	}
	update() {
		this.motion = easeOutExpo(this.counter);
		this.x = int(this.initPosX + this.distanceX * this.motion);
		this.y = int(this.initPosY + this.distanceY * this.motion);
		if (this.counter < 1) {
			this.counter += this.speed;
			this.counter2 += this.speed;
		} else if (this.counter2 < this.interval) {
			this.counter2 += this.speed;
		} else {
			this.randomSelector = int(random(0, 3));
			this.counter = 0;
			this.counter2 = 0;
			this.speed = 0.01;
			this.initPosX = this.x;
			this.desX = this.objectWidth / 2 * int(random(1, width / this.objectWidth * 2));
			this.distanceX = this.desX - this.initPosX;
			this.initPosY = this.y;
			this.desY = this.objectHeight / 2 * int(random(1, height / this.objectHeight * 2));
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