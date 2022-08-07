let texLowerSet = [];
let texUpperSet = [];
let tex;
let startUnicode = 65;
let endUnicode = 90;
let counter = startUnicode;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	noCursor();
	textAlign(CENTER, CENTER);
	textFont("Old Standard TT");
	background(0);
	fill(100);
	stroke(0);
	strokeWeight(3);
	for (let i = 0; i < endUnicode + 1 - startUnicode; i++) {
		texLowerSet[i] = char(counter).toLowerCase();
		texUpperSet[i] = char(counter).toUpperCase();
		counter++;
	}
}

function draw() {
	drawText();
}

function drawText() {
	if (mouseIsPressed) {
		textSize(300 * noise(frameCount * 0.2));

		//Switch Lowercase or Uppercase
		if (random() < 0.5) {
			tex = texLowerSet[int(random(texLowerSet.length))];
		} else {
			tex = texUpperSet[int(random(texUpperSet.length))];
		}
		text(tex, mouseX, mouseY);
	}
}

function keyPressed() {
	if (keyCode === 83) {
		saveCanvas();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background(0);
}