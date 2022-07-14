let r1;
let r2;
let r3;
let r1Plus = 2;
let r2Plus = 10;
let r3Plus = 3;
let a = 60;
let b = 20;
let c = 20;

function setup() {
	createCanvas(728, 1030);
	background(0);
	strokeWeight(3);
	r1 = 0;
	r2 = 0;
	r3 = 0;
}

function draw() {
	for (let i = 0; i < width + 100; i += width / 70) {
		stroke(255, 0, 0);
		line(i, 0, i, height);

		stroke(255, 255, 0);
		line(i, 0, i + a * sin(radians(r1)), height);
		r1 += r1Plus;

		stroke(0, 0, 255);
		line(i + b * sin(radians(r2)), 0, i, height);
		r2 += r2Plus;

		// 		stroke(200, 200, 0);
		// 		line(i, 0, i+c*cos(radians(r3)), height);
		// 		r3 += r3Plus;
	}
	noLoop();
}