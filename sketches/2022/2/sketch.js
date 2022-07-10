// 1. 10000までの数が入った配列を作って、
// 2. そこからランダムに数値を取り出して、
// 3. 取り出した要素は配列から取り除いて、
// 4. 2の工程から繰り返す（10000に達するまで）

const util = p5ex.Utility;
const func = p5ex.Function;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('helvetica');
  noStroke();
  background('black');
  fill(255);
  func.dropShadow({ x: 0, y: 0, blur: 4, color: 'black' });
  const margin = width / 20;

  let numbers = [...Array(10000).keys()].map(number => number + 1);
  let num;

  new util.Iterator(numbers.length, i => {
    num = numbers[int(random(0, numbers.length))];
    textSize(Math.trunc(random(4, 16)));
    text(num, random(margin, width - margin), random(margin, height - margin));
    numbers = numbers.filter(number => number !== num);
  });
}

