let drawLine;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	stroke(255);
	strokeWeight(1);
	fill(0);
	drawLine = new DrawShape();
}

function draw() {
	background(0);
	drawLine.display();
}

class DrawShape {
	constructor() {
		this.baseXPos = -10;
		this.fixYPos = height / 10;
		this.YPos = -this.fixYPos;
		this.XPos = [];
		this.fixXPos = width / 10;
		this.lineFineness = 12;
		this.lineHeight = 5;
		this.lineNum = 50;
		this.lineSpeed = 200;
	}

	display() {
		//Set base x position.
		for (let i = 0; i <= width + this.fixXPos; i++) {
			this.XPos[i] = this.baseXPos + i;
		}
		//Draw lines.
		for (let yi = 0; yi < height + this.fixYPos; yi += height / this.lineNum) {
			beginShape();
			curveVertex(0, height);
			curveVertex(0, height);
			curveVertex(this.XPos[0], this.YPos + yi);
			for (let xi = 0; xi <= width + this.fixXPos; xi += int(width / this.lineFineness)) {
				curveVertex(this.XPos[xi], this.YPos + height / this.lineHeight * noise(xi + yi + frameCount * noise(xi) / this.lineSpeed) + yi);
			}
			curveVertex(this.XPos[this.XPos.length - 1], this.YPos + noise(yi) + yi);
			curveVertex(this.XPos[this.XPos.length - 1], height);
			curveVertex(this.XPos[this.XPos.length - 1], height);
			endShape();
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	drawLine = new DrawShape();
}
