let r1;
let r2;
let r3;
let r1Plus = 3;
let r2Plus = 3;
let r3Plus = 2;
let a = 60;
let b = 20;
let c = 2;
let l = 59;

function setup() {
	createCanvas(728, 1030);
	background(0);
	
	r1 = 0;
	r2 = 0;
    r3 = 0;
}

function draw() {
	for(let i = 0; i < width+100; i += width/l){
      strokeWeight(4);
		stroke(255, 255, 0);
		line(i, 0, i, height);
      strokeWeight(2);
		stroke(255, 0, 0);
		line(i+10, 0, i+a*sin(radians(r1)), height);
		r1 += r1Plus;
      strokeWeight(2);
		stroke(0, 0, 255);
		line(i, 0, i+b*sin(radians(r2)), height);
		r2 += r2Plus;
      
//         stroke(0,255,0);
// 		line(i, 0, i+c*sin(radians(r3)), height);
// 		r3 += r3Plus;
	}
	noLoop();
}