let snow = [];
const snowNum = 100;

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvas');
	colorMode(HSB);
	noStroke();
	for (let i = 0; i < snowNum; i++) {
		snow[i] = new Drawsnow(random(width), random(-50, -500));
	}
}

function draw() {
	background(200, 50, 20);
	fill(50, 60, 100);
	ellipse(width * 0.8, height * 0.2, 80);
	for (let i = 0; i < snowNum; i++) {
		snow[i].display();
		if (snow[i].snowPosY < height + 20) {
			snow[i].move();
		}
		if (snow[i].snowPosY >= height + 20) {
			snow[i].snowPosY = 0;
			snow[i].snowPosY = random(-50, -500);
		}
	}
}

class Drawsnow {
	constructor(snowPosX, snowPosY, snowColor) {
		this.snowPosX = snowPosX;
		this.snowPosY = snowPosY;
		this.snowColor = snowColor;
		this.speed = random(3);
		this.size = random(10);
	}

	resetPosition() {
		translate(-width / 2, -height / 2);
	}

	display() {
		fill(0, 0, 100, 0.8);
		circle(this.snowPosX, this.snowPosY, this.size);
	}

	move() {
		this.snowPosY += this.speed;
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	for (let i = 0; i < snowNum; i++) {
		snow[i] = new Drawsnow(random(windowWidth), random(-50, -500));
	}
}