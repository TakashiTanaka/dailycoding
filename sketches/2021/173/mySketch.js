let w;
let h;
let p;
let size = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(HSB);
  ellipseMode(CENTER);
  background(0);
  fill(255);

  w = width;
  h = height;
  p = 4;

  for (let i = 0; i <= width; i++) {
    size[i] = random(16);
  }

}

function draw() {  
  for (let j = 0; j <= 5; j++) {
    fill(random(0, 360), 100, 100);
    for (y = h * p / 100; y < h; y += h * p / 100) {
      for (x = w * p / 100; x < w; x += w * p / 100) {
        ellipse(x, y, random(4,16));
      }
    }
  }
  noLoop();

}