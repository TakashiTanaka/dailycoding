//二次元配列についての考察

function setup() {
  createCanvas(1000, 1000);
  background(210);
  textAlign(LEFT, TOP);
  textSize(12);
  textFont('helvetica');
  const texSize = 12;
  const location = [];
  stroke(255);
  strokeWeight(2);
  for (let x = 0; x < 1000; x += 100) {
    for (let y = 0; y < 1000; y += 100) {
      location.push([x, y]);
      line(0, y, width, y);
    }
    line(x, 0, x, height);
  }

  for (let i = 0; i < location.length; i++) {
    noStroke();
    fill(0, 0, 255);
    text("x = " + location[i][0] + "\ny = " + location[i][1] + "\n[" + location[i][0] + ", " + location[i][1] + "]", location[i][0] + texSize, location[i][1] + texSize);
    circle(location[i][0], location[i][1], 8);
    stroke(0, 0, 255);
    strokeWeight(1);
    line(location[i][0], location[i][1], location[i][0] + texSize, location[i][1] + texSize);
  }
}