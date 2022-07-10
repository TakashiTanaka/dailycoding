let backgroundColor = 0;
let cir;

function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
	cir = new drawEllipse();
}

function draw() {
	background(backgroundColor);
	cir.display();
}

class drawEllipse {

	constructor() {
		this.circlePointXPos = [];
		this.circlePointYPos = [];
		this.circleRoughness = 60;
		this.circleNoiseSpeed = 0.01;
		this.circleNoiseLevel = width * 0.05;
		this.circleCenterXpos = width * 0.5;
		this.circleCenterYpos = height * 0.6;
		this.firstCircleWidth = width * 0.3;
		this.firstCircleHeight = height * 0.3;
		this.circleNum = 80;
	}

	createEllipsePoint(circleCenterXPos, circleCenterYPos, circleWidth, circleHeight, noiseValue) {
		this.circleCenterXPos = circleCenterXPos;
		this.circleCenterYPos = circleCenterYPos;
		this.circleWidth = circleWidth;
		this.circleHeight = circleHeight;
		this.noiseValue = noiseValue;
		for (let i = 0; i <= 360 / this.circleRoughness; i++) {
			this.circlePointXPos[i] =
				this.circleCenterXPos + this.circleWidth * cos(i * this.circleRoughness) +  //Define base circlePointXPos
				this.circleNoiseLevel * cos(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed); //Define noise value circlePointXPos
			this.circlePointYPos[i] =
				this.circleCenterYPos + this.circleHeight * sin(i * this.circleRoughness) + //Define base circlePointYPos
				this.circleNoiseLevel * sin(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed); //Define noise value circlePointYPos
		}
	}

	createEllipse() {
		beginShape();
		for (let i = 0; i < 360 / this.circleRoughness; i++) {
			curveVertex(this.circlePointXPos[i], this.circlePointYPos[i]);
		}
		curveVertex(this.circlePointXPos[0], this.circlePointYPos[0]);
		curveVertex(this.circlePointXPos[1], this.circlePointYPos[1]);
		curveVertex(this.circlePointXPos[2], this.circlePointYPos[2]);
		endShape();
	}

	display() {
		this.ellipseColor = 0;
		for (let i = 0; i < this.circleNum; i++) {
			noStroke();
			fill(this.ellipseColor);
			this.createEllipsePoint(
				this.circleCenterXpos,
				this.circleCenterYpos - i * 3,
				this.firstCircleWidth - i * 2,
				this.firstCircleHeight - i * 2,
				i / 10);
			this.createEllipse();
			if (this.ellipseColor === 0) {
				this.ellipseColor = 255;
			} else {
				this.ellipseColor = 0;
			}
		}
	}
}

