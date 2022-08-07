let car = [];
const carNum = 50;
let pallet = ['#85C654', '#FFA76C', '#60B0DE'];

function setup() {
	let canvas = createCanvas(windowWidth, 400);
	canvas.parent('canvas');
	colorMode(HSB);
	for (let i = 0; i < carNum; i++) {
		car[i] = new Drawcar(-width / 2, random(height * 0.1, height * 0.9), pallet[floor(random(pallet.length))]);
	}
}

function draw() {
	background(90);
	for (let i = 0; i < carNum; i++) {
		car[i].display();
		if (car[i].carPosX < width + 20) {
			car[i].move();
		} if (car[i].carPosX >= width + 20) {
			car[i].carPosX = 0;
		}
	}
}

class Drawcar {
	constructor(carPosX, carPosY, carColor) {
		this.carPosX = carPosX;
		this.carPosY = carPosY;
		this.carColor = carColor;
		this.speed = random(2, 5);
	}

	display() {
		rectMode(CENTER);
		noStroke();
		fill(this.carColor);
		rect(this.carPosX, this.carPosY, 20, 10);
		rect(this.carPosX, this.carPosY + 8, 36, 8);
		fill(0, 100, 0);
		circle(this.carPosX - 8, this.carPosY + 12, 6);
		circle(this.carPosX + 8, this.carPosY + 12, 6);
	}

	move() {
		this.carPosX += this.speed + random(1);
	}
}