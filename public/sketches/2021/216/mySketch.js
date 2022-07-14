const drawWord = () => {
	push();
	let translation = createVector(x, y);
	translate(x, y);
	for (let i = 0; i < points.length; i++) {
		let m = p5.Vector.sub(mouse, translation);
		beginShape();
		for (let j = 0; j < points[i].length; j++) {
			let p = points[i][j];
			let pm = p5.Vector.sub(p, m);
			let dis = pm.mag();
			let amp = cos(dis * 0.03 + t) * 20;
			let posFin = pm.normalize();
			posFin.setMag(amp);
			posFin.add(p);
			vertex(posFin.x, posFin.y);
		}
		endShape(CLOSE);
		translate(bounds[i].w + bounds[i].x, 0);
		translation.add(bounds[i].w + bounds[i].x);
	}
	pop();
};

const drawWord2 = () => {
	push();
	let translation = createVector(x, y);
	translate(x, y);
	for (let i = 0; i < points.length; i++) {
		// let m = p5.Vector.sub(mouse, translation);
		beginShape();
		// for (let j = 0; j < points[i].length; j++) {
		// 	let p = points[i][j];
		// 	let pm = p5.Vector.sub(p, m);
		// 	let dis = pm.mag();
		// 	let amp = cos(dis * 0.03 + t) * 20;
		// 	let posFin = pm.normalize();
		// 	posFin.setMag(amp);
		// 	posFin.add(p);
		// }
		vertex(points[i].x, points[i].y);
		endShape(CLOSE);
	}
	pop();
};

let font;
let txt = "B"
let bounds = [];
let totalBounds;
let points = [];
let mouse;
let raio = 100;
let x, y;
let t = 0;

function preload() {
	font = loadFont('HelveticaNeueLTStd-Blk.otf');
}

function setup() {
	mouse = createVector(0, 0);
	createCanvas(1000, 1000); //canvas作成

	moji = []; // 全てのパスを収めているオブジェクト

	let txtSize = min(width, height) * 0.3;

	[].forEach.call(txt, (t, key) => {
		moji[key] = {};
		moji[key].c = t;
		moji[key].path =
			font.textToPoints(t, 0, 0, txtSize, {
				sampleFactor: 0.3,
				simplifyThreshold: 0
			});
	});
	// 	bounds.push(font.textBounds(t, 0, 0, txtSize));
	// });



	totalBounds = font.textBounds(txt, 0, 0, txtSize);

	for (let i = 0; i < moji.length; i++) {
		points[i] = [];
		for (let j = 0; j < moji[i].length; j++) {
			let p = moji[i][j];
			points[i][j] = createVector(p.x, p.y);
		}
	}
	x = width - (totalBounds.w + totalBounds.x);
	y = 100 + (totalBounds.h);
	background(0);
	translate(100, 400);
	// noFill();
	// stroke(255);

	// beginShape();
	// moji[0].path.forEach(p => {
	// 	vertex(p.x, p.y);
	// });
	// endShape();

	fill(255);
	beginShape();
	moji[0].path.forEach((p, key) => {
		// console.log(key, p);
		// if(key)
		vertex(p.x, p.y);
	});
	endShape();

	// let first = moji[0].path[0];
	// let last = moji[0].path[343];
	// fill(255, 0, 0);
	// ellipse(first.x, first.y, 10);
	// fill(0, 0, 255);
	// ellipse(last.x, last.y, 10);

	// console.log(moji[0].path[0].x);
};
let count = 0;

function draw() {
	translate(100, 400);
	fill(0, 0, 255);

	ellipse(moji[0].path[count].x, moji[0].path[count].y, 10);
	count++;
	// background(0);
	// mouse.lerp(mouseX, mouseY, 0, 0.05);
	// clear();
	// drawWord2();
	// t -= 0.05;

	// if (frameCount%200==0) console.log(frameRate());
};

