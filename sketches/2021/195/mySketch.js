
const sketch = P => {

	const B = f => f.bind(P);
	const createWindowSizeCanvas = () => P.createCanvas(P.windowWidth, P.windowHeight);
	const compose = (...fns) => arg => fns.reduce((compose, f) => f(compose), arg);
	const black = () => 0;
	const bgBK = compose(black, B(P.background));
	const dRect = x => y => s => P.rect(x, y, s);
	const iterate = f => n => {
		for (let i = 0; i < n; i++) {
			f(i);
		}
	};

	P.preload = () => {

	};

	P.setup = () => {
		createWindowSizeCanvas();
		// P.createCanvas(1000, 1000);
		P.background(0);

		// 何かを繰り返す場合やっぱりこういう方が自然なきがする
		// カウント数をコールバック関数にわたす形


		// P.rect(100, 100, 100);
		// P.strokeWeight(5);
		// bgBK();

		// for (let i = 0; i < 50; i++) {
		// 	dRect(10)(P.sin(i) * 10 + 20)(50);
		// }
		// console.log(iterateF((dRect(20)(20)(20)))(20));
		// console.log(iterateF(console.log)('hey')(20));

		// iterateの繰り返し数を利用したかったが複雑になってしまった
		// console.log(iterateF(((x, y, i) => P.point(x, y * (i + 1) / 10)))(50, 100)(20));

		// let count = 0;

		// const closer = () => {
		// 	return count++;
		// 	const counter = () => {

		// 	}
		// }


		// const closer = () => {
		// 	let count = 0;
		// 	return () => count++;
		// }

		// const counter = count => {
		// 	while (count > 0) {
		// 		console.log(count);
		// 		count--;
		// 	}
		// }


		// counter(10);

		// 即時関数
		(msg => console.log(msg))('hey');

		// ((x, y) => P.point(x, y))(10, 50);


		// iterateF(console.log)('hey')(20);
		// dRect(10)(10)(500);
		//const drawRects = compose(dRect(x)(y)(s))(200);
		// for (let i = 0; i < 100; i++) {
		// 	dRect(P.random(200))(P.random(200))(100);
		// }
		const con = (msg) => console.log(msg);
		// const mkGrid = f => count => iterate(iterate(f)(count))(count);
		// const mkGrid = f => count => iterate(y=> iterate(x => console.log(x))(count))(count);
		// mkGrid(x => console.log(x))(50);

		const matrix = (xNum, yNum, f) => {
			for (let y = 0; y < yNum; y++) {
				for (let x = 0; x < xNum; x++) {
					f(x, y);
				}
			}
		}


		P.textAlign(P.CENTER, P.TOP);
		P.textFont('Helvetica');
		P.colorMode(P.RGB, 255, 255, 255, 100);

		// iterate(count =>
		// 	matrix(
		// 		10, 10,
		// 		(x, y) => {
		// 			P.fill(255, 50);
		// 			P.textSize(150 - 10 * count);
		// 			P.text(
		// 				"You won't see me",
		// 				x * 100 + count * P.random(1, 10),
		// 				y * 100 + count * P.random(1, 10)
		// 			)
		// 		}
		// 	)
		// )(10);
		iterate(() =>
			iterate(count => {
				P.drawingContext.filter = `blur(${P.int(P.random(2, 200))}px)`;
				P.fill(255 - P.int(P.random(1, 50)), 255 - P.int(P.random(1, 50)), 255 - P.int(P.random(1, 50)), P.random(0.1, 5));
				P.textSize(P.width / 8);
				P.push();
				P.translate(P.width / 2, P.height / 2);
				P.rotate(P.random(0, 0.05));
				P.translate(-P.width / 2, -P.height / 2);
				P.text(
					"Daydreaming",
					P.width / 2,
					200 + 1.5 * count + P.random(0.1, 0.2)
				);
				P.pop();
			}
			)(400)
		)(10)



	}


	P.draw = () => {
		// P.background(0);
		// P.fill(255);
		// mkGrid(P.text('A', 10, 10))(50);
		// mkGrid(console.log(10))(50);
		// mkGrid(x => P.text('A', 10 * x, 10))(50);
		// iterate(y => iterate(count => P.text('A', 10 + count * 20, 10 + y * 20))(50))(50);


	};
};

new p5(sketch);

// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight);
// }