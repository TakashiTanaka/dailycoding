const proxyurl = "https://cors-anywhere.herokuapp.com/";
let ctx;
let spaceData;
let humanball = [];
let renderer;
let titleSize;
let nameSize;
let txLeftPos;
let starXPos = [];
let starYPos = [];
let starNum = 1000;

function setup() {
	renderer = createCanvas(windowWidth, windowHeight);
	loadJSON(proxyurl + 'http://api.open-notify.org/astros.json', gotData);
	colorMode(HSB, 360, 100, 100);
	noStroke();
	textFont('Spartan');
	textAlign(LEFT, TOP);
	for (let i = 0; i < starNum; i++) {
		starXPos[i] = random(width);
		starYPos[i] = random(height);
	}
}

function draw() {
	regulation();
	background(0);
	fill(100);
	for (let i = 0; i < starNum; i++) {
		ellipse(starXPos[i], starYPos[i], random(0, 1));
	}
	if (spaceData) {
		makeText("Who are in space right now?", txLeftPos, height / 25, titleSize, 100, 100, 100, 8);
		for (let i = 0; i < spaceData.number; i++) {
			makeText(spaceData.people[i].name, txLeftPos, height / 6 + i * height / spaceData.number * 0.8, nameSize, 0, 0, 100, 8);
			humanball[i].display();
		}
	}
}

function gotData(data) {
	spaceData = data;
	for (let i = 0; i < spaceData.number; i++) {
		humanball[i] = new humanBall();
	}
}

class humanBall {
	constructor() {
		this.ballXPos = random(width);
		this.ballYPos = random(height);
		this.ballUpDown = random(10, 50);
		this.ballSpeed = random(0.01, 0.03);
		this.ballSize = 100;
	}

	display() {
		fill(100, 100, 100, 0.9);
		ellipse(this.ballXPos, this.ballYPos + this.ballUpDown * cos(frameCount * this.ballSpeed), this.ballSize);
	}
}

function makeText(inputText, x, y, size, textHue, textSaturation, textBrightness, ker) {
	ctx = renderer.drawingContext;
	select('canvas').elt.style.letterSpacing = `${ker}px`;
	fill(textHue, textSaturation, textBrightness);
	textSize(size);
	text(`${inputText}`, x, y);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	for (let i = 0; i < spaceData.number; i++) {
		humanball[i] = new humanBall();
	}
	for (let i = 0; i < starNum; i++) {
		starXPos[i] = random(width);
		starYPos[i] = random(height);
	}
}

function regulation() {
	if (windowWidth < 768) {
		titleSize = 15;
		nameSize = 20;
		txLeftPos = 30;
	} else if (windowWidth > 768) {
		titleSize = 15;
		nameSize = 20;
		txLeftPos = 50;
	}
}
