let x1 = 250;
let y1 = 0;
let x2 = 250;
let y2 = 500;
let value = 5;


function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(255);
}

function draw() {
  x2 = x1 + random(-value,value);
  y2 = y1 + random(value);
  strokeWeight((y2+20)/100*noise(frameCount))

  line(x1, y1, x2, y2);

  x1 = x2;
  y1 = y2;


}