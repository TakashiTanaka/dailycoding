let number = [];
let num = 10;
let counter;
let margin = 50;

function setup() {
	createCanvas(1000, 1000);
	noStroke();
	textFont('Helvetica');
	textAlign(LEFT, TOP);
	fill(255);
	textSize(150);
	for (let i = 0; i < num; i++) {
		number.push(i);
	}

}

function draw() {
	background(0);
	for (let y = margin; y < height - margin; y += 150) {
		for (let i = 0; i < counter; i++) {
			text(number[i], margin + width / 11 * i, y);
		}
		counter = number.length + (number.length + 1) * sin(frameCount * 0.05 + y);
	}
}