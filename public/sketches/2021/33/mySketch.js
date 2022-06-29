let backgroundColor = 0;
let wave;

function setup() {
	createCanvas(500, 500);
	textAlign(CENTER, CENTER);
	noCursor();
	textSize(150);
	textFont('Helvetica-bold')
	wave = new drawWave();
}

function draw() {
	background(backgroundColor);
	wave.display();
	wave.timer();
}

class drawWave {

	constructor() {
		this.seed = 0;
		this.baseXpos = width * 0.8;
		this.baseYpos = height * 0.5;
		this.circleSize = height * 0.2;
		this.fineness = 0.3;
		this.waveAmplitude = 150;
		this.waveYSpeed1 = 0.05;
		this.waveYSpeed2 = 0.01;
		this.wavePeriod = 10;
		this.circlesLength = 16;
		this.startGradientSize = 1;
		this.endGradientSize = 60;
		this.lineWeight = 4;
	}

	display() {
		randomSeed(this.seed);
		this.rectColor = 255;
		this.lineColor = 0;
		strokeWeight(this.lineWeight);
		for (let i = 0; i < width / this.circlesLength; i += this.fineness) {
			let move = sin(i / 2 + frameCount * this.waveYSpeed1);
			fill(this.rectColor);
			stroke(this.lineColor);
			text(
				int(int(random(0, 9))),
				this.baseXpos - i * this.wavePeriod,
				this.baseYpos + this.waveAmplitude * sin(frameCount * this.waveYSpeed2) * move);
			this.randomNumber = "0";
			if (this.rectColor === 255 && this.lineColor === 0) {
				this.lineColor = 255;
				this.rectColor = 0;
			} else {
				this.lineColor = 0;
				this.rectColor = 255;
			}
		}
	}

	timer() {
		if (frameCount % 60 === 0) {
			this.seed++;
		}
	}
}

