let radius = 350;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(0);
  strokeWeight(3);
  stroke(255);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  let s = 0;
  let t = 0;
  let lastX = 0;
  let lastY = 0;
  let lastZ = 0;

  while (t < 180) {
    s += 18 * sin(frameCount * 0.01);
    t += 1;
    let radianS = radians(s);
    let radianT = radians(t);

    let thisX = 0 + (radius * cos(radianS) * sin(radianT));
    let thisY = 0 + (radius * sin(radianS) * sin(radianT));
    let thisZ = 0 + (radius * cos(radianT));
    if (lastX != 0) {
      line(thisX, thisY, thisZ, lastX, lastY, lastZ);
    }
    lastX = thisX;
    lastY = thisY;
    lastZ = thisZ;
  }
}