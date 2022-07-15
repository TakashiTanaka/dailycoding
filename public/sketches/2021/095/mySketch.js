let drawLine = [];

function setup() {
	createCanvas(1000, 1000);
	noStroke();
	textFont('Helvetica');
	for (let i = 0; i < 3; i++) {
		drawLine.push(new DrawShape());
	}
}

function draw() {
	blendMode(BLEND);
	background(0);
	blendMode(SCREEN);
	drawLine[0].display(0.04, color(255, 50, 127));
	drawLine[1].display(0.03, color(0, 50, 255));
	drawLine[2].display(0.02, color(0, 255, 127));
	// noLoop();
}

class DrawShape {
	constructor() {
		this.tex = ['W', 'A', 'V', 'E'];
		this.texSize = width / 40;
		this.textSpacing = 4;
		this.lineFineness = 100;
		this.lineNum = 22;
		this.textNum = 0;
		this.margin = 100;
		textSize(this.texSize);
	}

	display(speed, color) {
		this.speed = speed;
		//Draw lines.
		fill(color);
		for (let yi = this.margin; yi < (height - this.margin); yi += height / this.lineNum) {
			for (let xi = this.margin; xi < (width - this.margin); xi += this.texSize + this.textSpacing) {
				text(this.tex[this.textNum], xi, yi + 30 * sin(frameCount * this.speed + xi / 200));
				if (this.textNum < this.tex.length - 1) {
					this.textNum++;
				} else {
					this.textNum = 0;
				}
			}
		}
	}
}