function setup() {
  const sizeList = [2, 5, 10, 20, 40, 80, 160, 200, 400];
  const array = [];
  colorMode(HSB, 360, 100, 100, 100);
  createCanvas(800, 800);
  noStroke();
  ellipseMode(CORNER);
  const baseHue = randomInt(0, 360);
  const colors = [
    color(baseHue, 60, 90, randomInt(5, 40)),
    color(normalizeHSB(baseHue - 120), 60, 90, randomInt(5, 40)),
    color(normalizeHSB(baseHue - 180), 60, 90, randomInt(5, 40)),
  ];
  background(0);
  blendMode(SCREEN);
  iterator(20, () => {
    let maxSize = sizeList[randomInt(0, sizeList.length)];
    gridLayout({
      count: { x: width / maxSize, y: height / maxSize },
      fn: (x, y) => {
        if (randomInt(0, 1)) {
          array.push(() => {
            fill(anyValue(colors[0], colors[1], colors[2]));
            anyValue(
              () => isoscelesRightTriangle(x * maxSize, y * maxSize, maxSize),
              () => ellipse(x * maxSize, y * maxSize, maxSize),
              () => rect(x * maxSize, y * maxSize, maxSize)
            )();
          });
        }
      },
    });
  });
  const shuffleArray = shuffle(array);
  shuffleArray.forEach(fn => fn());
}

function draw() {}
