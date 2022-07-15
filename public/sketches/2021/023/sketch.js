let backgroundColor = 0;
let lineColor = 255;
let ellipseColor = 0;
let cir = [];
let circleNum;

function setup() {
	let canvas = createCanvas(1000, 1000);
	canvas.parent('canvas');
	fill(ellipseColor);
	stroke(lineColor);
	strokeWeight(1);
	angleMode(DEGREES);
	circleNum = width / 34;
	for (let i = 0; i < circleNum; i++) {
		cir[i] = new drawEllipse();
	}
}

function draw() {
	background(backgroundColor);
	for (let i = 0; i < circleNum; i++) {
		cir[i].createEllipsePoint(
			width / 2,
			height * 0.78 - i * width / 50,
			width / 3 * noise(i),
			width / 50 - i,
			i * noise(i / 2));
		cir[i].display();
	}
}

class drawEllipse {
	constructor() {
		this.circlePointXPos = [];
		this.circlePointYPos = [];
		this.circleRoughness = 1.5;
		this.circleNoiseSpeed = 0.01;
		this.circleNoiseLevel = width / 5;
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
				this.circleNoiseLevel * cos(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed); ////Define noise value circlePointXPos
			this.circlePointYPos[i] =
				this.circleCenterYPos + this.circleHeight * sin(i * this.circleRoughness) + //Define base circlePointYPos
				this.circleNoiseLevel * sin(i * this.circleRoughness) * noise(i * noise(this.noiseValue) + frameCount * this.circleNoiseSpeed); ////Define noise value circlePointYPos
		}
	}

	display() {
		beginShape();
		for (let i = 0; i < 360 / this.circleRoughness; i++) {
			curveVertex(this.circlePointXPos[i], this.circlePointYPos[i]);
		}
		curveVertex(this.circlePointXPos[0], this.circlePointYPos[0]);
		curveVertex(this.circlePointXPos[1], this.circlePointYPos[1]);
		curveVertex(this.circlePointXPos[2], this.circlePointYPos[2]);
		endShape();
	}
}