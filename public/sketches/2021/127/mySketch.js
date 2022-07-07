let radius = 10;
let deg;
let count = 1;


function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES);
	stroke(255);

}

function draw() {
	background(0);
	drawLoop(180, deg);
}

function drawLoop(radius, deg) {
	let fc = frameCount;
	deg = 1;
	strokeWeight(6);

	for (let i = 0; i < 360; i += deg) {
		line(width / 2 + (radius + fluctCos(100, fluctCos(100, 100, fc), fc * 8 + i * 10)) * ceiler(cos(i), 20),
			height / 2 + (radius + fluctSin(100, fluctSin(100, 100, fc), fc * 8 + i * 10)) * ceiler(sin(i), 20),
			width / 2 + (radius + fluctCos(100, fluctCos(100, 100, fc), fc * 8 + (i + deg) * 10)) * ceiler(cos(i + deg), 20),
			height / 2 + (radius + fluctSin(100, fluctSin(100, 100, fc), fc * 8 + (i + deg) * 10)) * ceiler(sin(i + deg), 20));
	}

}



function fluctSin(base, strength, sinArgument) {
	return ((base + strength) * ceiler(sin(sinArgument), 2));
}
function fluctCos(base, strength, sinArgument) {
	return ((base + strength) * ceiler(cos(sinArgument), 2));
}
function ceiler(num, digit) {
	return ceil(num * digit) / digit;
}