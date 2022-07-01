let points, font, bounds;
let fontSize = 60,
  str;

function preload() {
  font = loadFont('SourceCodePro-SemiBoldItalic.ttf');
}

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  textSize(fontSize);
  str = randomAlphabet();
  console.log(str);
  points = font.textToPoints(str, 0, 0, fontSize, {
    sampleFactor: 20,
    simplifyThreshold: 0,
  });

  bounds = font.textBounds(str, 0, 0, fontSize);

  background(0);
  fill(360, 100, 100, 100);
  translate((-bounds.x * width) / bounds.w, (-bounds.y * height) / bounds.h);
  iterator(2, () => {
    stroke(0, 0, 100, 100);
    beginShape();
    for (let i = 0; i < points.length; i++) {
      strokeWeight(random(0.1, 2));
      let p = points[i];
      let pos = {
        x: (p.x * width) / bounds.w + 30 * cos(i * 0.01),
        y: (p.y * height) / bounds.h + 30 * sin(i * 0.01),
      };
      let randomNum = randomInt(0, points.length - 1);
      let randomPoint = {
        x: (points[randomNum].x * width) / bounds.w,
        y: (points[randomNum].y * height) / bounds.h,
      };
      if (dist(pos.x, pos.y, randomPoint.x, randomPoint.y) < 100) {
        line(pos.x, pos.y, randomPoint.x, randomPoint.y);
      }
    }
    endShape(CLOSE);
  });
}
