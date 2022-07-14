const p = (sketch) => {
	let font;
	let txt = "hello"
	let bounds = [];
	let totalBounds;
	let points = [];
	let mouse;
	let raio = 100;
	let x, y;
	let t = 0;

	sketch.preload = () => {
		font = sketch.loadFont('HelveticaNeueLTStd-Blk.otf');
	}

	sketch.setup = () => {
		mouse = sketch.createVector(0, 0);
		sketch.createCanvas(1000, 1000); //canvas作成

		pts = []; // 一文字のpathを収める変数

		let txtSize = sketch.min(sketch.width, sketch.height) * 0.3;

		[].forEach.call(txt, function (t) {
			pts.push(font.textToPoints(t, 0, 0, txtSize, {
				sampleFactor: 0.3,
				simplifyThreshold: 0
			}));
			bounds.push(font.textBounds(t, 0, 0, txtSize));
		});
		totalBounds = font.textBounds(txt, 0, 0, txtSize);

		pts.forEach(pt => {

		});

		for (let i = 0; i < pts.length; i++) {
			points[i] = [];
			for (let j = 0; j < pts[i].length; j++) {
				let p = pts[i][j];
				points[i][j] = sketch.createVector(p.x, p.y);
			}
		}
		x = sketch.width - (totalBounds.w + totalBounds.x);
		y = 100 + (totalBounds.h);
		sketch.background(0);
		// sketch.fill(255);
		// sketch.stroke(255);
		// sketch.strokeWeight(txtSize * 0.01 * window.devicePixelRatio);
		// sketch.strokeJoin(sketch.ROUND);
	};

	sketch.draw = () => {
		sketch.background(0);
		mouse.lerp(sketch.mouseX, sketch.mouseY, 0, 0.05);
		// sketch.clear();
		drawWord();
		t -= 0.05;

		// if (sketch.frameCount%200==0) console.log(sketch.frameRate());
	};

	drawWord = () => {
		sketch.push();
		let translation = sketch.createVector(x, y);
		sketch.translate(x, y);
		for (let i = 0; i < points.length; i++) {
			let m = p5.Vector.sub(mouse, translation);
			sketch.beginShape();
			for (let j = 0; j < points[i].length; j++) {
				let p = points[i][j];
				let pm = p5.Vector.sub(p, m);
				let dis = pm.mag();
				let amp = sketch.cos(dis * 0.03 + t) * 20;
				let posFin = pm.normalize();
				posFin.setMag(amp);
				posFin.add(p);
				sketch.vertex(posFin.x, posFin.y);
			}
			sketch.endShape(sketch.CLOSE);
			sketch.translate(bounds[i].w + bounds[i].x, 0);
			translation.add(bounds[i].w + bounds[i].x);
		}
		sketch.pop();
	};
};

let skch = new p5(p);


// const p = (sketch) => {
//   let font;
//   let txt = "hello"
//   let bounds = [];
//   let totalBounds;
//   let points = [];
//   let mouse;
//   let raio = 100;
//   let x, y;
//   let t = 0;

//   sketch.preload = () => {
//     font = sketch.loadFont('HelveticaNeueLTStd-Blk.otf');
//   }

//   sketch.setup = () => {
//     mouse = sketch.createVector(0, 0);
//     sketch.createCanvas(window.innerHeight, window.innerHeight);

//     pts = [];
//     let txtSize = sketch.min(sketch.width, sketch.height) * 0.3
//     for (let i = 0; i < txt.length; i++) {
//       let c = txt.charAt(i);
//       pts[i] = font.textToPoints(c, 0, 0, txtSize, {
//         sampleFactor: 0.3,
//         simplifyThreshold: 0
//       });
//       bounds[i] = font.textBounds(c, 0, 0, txtSize);
//     }
//     totalBounds = font.textBounds(txt, 0, 0, txtSize);

//     for (let i = 0; i < pts.length; i++) {
//       points[i] = [];
//       for (let j = 0; j < pts[i].length; j++) {
//         let p = pts[i][j];
//         points[i][j] = sketch.createVector(p.x, p.y);

//       }
//     }
//     x = sketch.width - (totalBounds.w + totalBounds.x);
//     y = 100 + (totalBounds.h);

//     sketch.fill(255);
//     sketch.stroke(255);
//     sketch.strokeWeight(txtSize * 0.01 * window.devicePixelRatio);
//     sketch.strokeJoin(sketch.ROUND);
//   };

//   sketch.draw = () => {
//     mouse.lerp(sketch.mouseX, sketch.mouseY, 0, 0.05);
//     sketch.clear();
//     drawWord();
//     t -= 0.05;

//     // if (sketch.frameCount%200==0) console.log(sketch.frameRate());
//   };

//   drawWord = () => {
//     sketch.push();
//     let translation = sketch.createVector(x, y);
//     sketch.translate(x, y);
//     for (let i = 0; i < points.length; i++) {
//       let m = p5.Vector.sub(mouse, translation);
//       sketch.beginShape();
//       for (let j = 0; j < points[i].length; j++) {
//         let p = points[i][j];
//         let pm = p5.Vector.sub(p, m);
//         let dis = pm.mag();
//         let amp = sketch.cos(dis * 0.03 + t) * 20;
//         let posFin = pm.normalize();
//         posFin.setMag(amp);
//         posFin.add(p);
//         sketch.vertex(posFin.x, posFin.y);
//       }
//       sketch.endShape(sketch.CLOSE);
//       sketch.translate(bounds[i].w + bounds[i].x, 0);
//       translation.add(bounds[i].w + bounds[i].x);
//     }
//     sketch.pop();
//   };
// };

// let skch = new p5(p);
