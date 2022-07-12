function setup() {
  const fontSize = windowWidth / 5;
  const words = ['coffee', 'store', 'figure', 'type', 'cafe', 'dog'];
  const word = words[int(random(words.length))];

  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(fontSize);
  textFont('helvetica');
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  noStroke();

  let centX = windowWidth / 2;
  let wordWidth = textWidth(word);
  let noiseY = height / 10;
  let baseY = fontSize;

  const randomDraw = y => {
    let flag = int(random(0, 2));
    if (flag === 0) return;
    fill(255);
    rect(centX, y, wordWidth, fontSize);
  };

  for (let y = baseY; y < height - baseY; y += baseY / 10) {
    let randomY = y + random(-noiseY, noiseY);
    randomDraw(randomY);
    fill(0);
    text(word, centX, randomY);
  }
}

function windowResized() {
  setup();
}
