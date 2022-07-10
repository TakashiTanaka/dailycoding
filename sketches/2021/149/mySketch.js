const iterator = (iNum, func) => {
  for (let count = iNum; count--;) { func(count) };
}

const drawEqDivLine = (beginXPos, endXPos, divNum, firstYpos, secondYpos) => {
  iterator(divNum, (count) => line(beginXPos + endXPos / divNum * count, firstYpos(count), endXPos / divNum + endXPos / divNum * count, secondYpos(count)));
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(1);
  let fc = frameCount;
  const beginXPos = 0;
  const endXPos = windowWidth;
  const divNum = int(endXPos / 50);
  const strength = height / 60 + height / 60 * sin(fc * 0.005);
  let columnFineness = height / 30;

  translate(0, columnFineness / 2);
  iterator(
    floor((height) / columnFineness),
    (rowCount) =>
      drawEqDivLine(
        beginXPos,
        endXPos,
        divNum,
        (columnCount) => columnFineness * rowCount + strength * cos((columnCount + rowCount) + fc * 0.05),
        (columnCount) => columnFineness * rowCount + strength * sin((columnCount + rowCount) + fc * 0.05))
  )

}

function draw() { setup(); }

function windowResized() { setup(); }
