let backgroundColor = 0;
let waveellipses;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	noStroke();
	waveellipses = new drawWaveEllipse();
}

function draw() {
	background(backgroundColor);
	waveellipses.display();
}

class drawWaveEllipse {
	constructor() {
		this.baseXpos = width * 0.8;
		this.baseYpos = height * 0.5;
		this.circleSize = height * 0.2;
		this.fineness = 0.1;
		this.waveAmplitude = 150;
		this.waveYSpeed1 = 0.05;
		this.wavePeriod = 10;
		this.circlesLength = 16;
	}

	display() {
		for (let i = 0; i < width / this.circlesLength; i += this.fineness) {
			let move = sin(i / 2 + frameCount * this.waveYSpeed1);
			let ellipseColor = map(i, 0, width / this.circlesLength, 100, 255)
			fill(ellipseColor);
			ellipse(
				this.baseXpos - i * this.wavePeriod,
				this.baseYpos + this.waveAmplitude * move,
				this.circleSize - 30 * sin(i / 4 + frameCount * 0.1));
		}
	}
}

