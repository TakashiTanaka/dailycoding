let r1;
let r2;
let sliderr1Plus;
let sliderr2Plus;

let sliderA;
let sliderB;

let pdf;


function setup() {
  createCanvas(728, 1030);
  background(0);
  strokeWeight(3);
  strokeCap(PROJECT);
  r1 = 0;
  r2 = 0;
  r3 = 0;

  sliderr1Plus = createSlider(0, 20, 0.5); //0:最小値、255:最大値、0:初期値
  sliderr1Plus.position(10, 10);
  sliderr2Plus = createSlider(0, 20, 5); //0:最小値、255:最大値、0:初期値
  sliderr2Plus.position(10, 30);
  sliderA = createSlider(0, 100, 30); //0:最小値、255:最大値、0:初期値
  sliderA.position(10, 50);
  sliderB = createSlider(0, 100, 30); //0:最小値、255:最大値、0:初期値
  sliderB.position(10, 70);
}

function draw() {
  for (let i = 0; i < width + 100; i += width / 90) {
    stroke(255, 0, 0);
    line(i, 0, i + 20, height);

    stroke(255, 255, 0);
    line(i, 0, i + sliderA.value() * cos(radians(r1 * 0.01)), height);
    r1 += sliderr1Plus.value();

    stroke(0, 0, 255);
    line(i + sliderB.value() * sin(radians(r2 * 0.01)), 0, i, height);
    r2 += sliderr2Plus.value();

    // 		stroke(200, 200, 0);
    // 		line(i, 0, i+c*cos(radians(r3)), height);
    // 		r3 += r3Plus;
  }

  // save("mySVG.svg"); // give file name
  // print("saved svg");

}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}