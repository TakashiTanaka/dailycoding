let numbers = [];

function setup() {
	createCanvas(1000, 1000);
	noStroke();
	for (let i = 0; i < 6; i++) {
		numbers.push(new Numbers());
	}

}

function draw() {
	background(0);
	for (let i = 0; i < 6; i++) {
		numbers[i].display(i);
		numbers[i].update(i);
	}
}

class Numbers {
	constructor() {
		this.number = [];
		this.num = 10;
		this.counter;
		this.margin = 50;
		textFont('Helvetica');
		textAlign(LEFT, TOP);
		fill(255);
		textSize(150);
		for (let i = 0; i < this.num; i++) {
			this.number.push(i);
		}
	}
	display(y) {
		for (let i = 0; i < this.number.length; i++) {
			text(this.number[i], this.margin + width / 11 * i, 50 + y * 150);
		}
	}
	update(i) {
		if (frameCount % (int(random(10, 50))) === 0) {
			moveAt(this.number, 0, 9);
		}
	}
}

function moveAt(array, index, at) {
	if (index === at || index > array.length - 1 || at > array.length - 1) {
		return array;
	}
	const value = array[index];
	const tail = array.slice(index + 1);
	array.splice(index);
	Array.prototype.push.apply(array, tail);
	array.splice(at, 0, value);
	return array;
}