let backgroundColor = 0;
let wave;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	noStroke();
	wave = new drawWaveEllipse();
}

function draw() {
	background(backgroundColor);
	wave.display();
}

class drawWaveEllipse {
	constructor() {
		this.baseXpos = width * 0.8;
		this.baseYpos = height * 0.5;
		this.circleSize = height * 0.2;
		this.fineness = 0.1;
		this.waveAmplitude = 150;
		this.waveYSpeed1 = 0.05;
		this.waveYSpeed2 = 0.01;
		this.wavePeriod = 10;
		this.circlesLength = 16;
		this.startGradientSize = 1;
		this.endGradientSize = 60;
		this.lineWeight = 1.5;
	}

	display() {
		rectMode(CENTER);
		this.lineColor = 0;
		this.rectColor = 255;
		strokeWeight(1.5);
		for (let i = 0; i < width / this.circlesLength; i += this.fineness) {
			let move = sin(i / 2 + frameCount * this.waveYSpeed1);
			fill(this.rectColor);
			stroke(this.lineColor);
			push();
			translate(this.baseXpos - i * this.wavePeriod, this.baseYpos + this.waveAmplitude * sin(frameCount * this.waveYSpeed2) * move);
			rotate(i / 10 + frameCount * 0.02);
			rect(0, 0, this.circleSize);
			pop();
		}
	}
}
