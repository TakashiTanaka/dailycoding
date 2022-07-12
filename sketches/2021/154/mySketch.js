const words = [
  'sunday',
  'panda',
  'drop',
  'step',
  'clock',
  'cat',
  'exactly',
  'tuna',
  'day',
  'fool',
  'just',
  'head',
  'love',
  'you',
  'me',
  'can',
  "can't",
];
const fontSize = 16;
const longest = words.reduce((a, b) => (a.length > b.length ? a : b));

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
  textSize(fontSize);
  textFont('helvetica');
  const longWord = textWidth(longest);
  for (let x = 0; x < windowWidth; x += longWord) {
    for (let y = 0; y < windowHeight; y++) {
      text(words[int(random(0, words.length))], x, fontSize * (y + 1));
    }
  }
}

function windowResized() {
  setup();
}
