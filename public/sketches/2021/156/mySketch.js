function setup() {
  const font = {
    size: windowWidth / 50,
    family: 'helvetica',
    align: {
      horizontal: LEFT,
      vertical: CENTER,
    },
  };

  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(font.size);
  textFont(font.family);
  textAlign(font.align.horizontal, font.align.vertical);
  noStroke();

  const word = 'Good bye my printer.';
  const chars = word.split('');
  const firstX = font.size;
  const randomX = () => random(-font.size / 5, font.size / 5);
  const setOrigin = (originX, originY, beforeFunc, afterFunc) => {
    push();
    translate(originX, originY);
    beforeFunc();
    translate(-originX, -originY);
    afterFunc();
    pop();
  };

  [...Array(int(height / font.size - 1))].forEach((_, y) => {
    const randomY = random(-font.size, font.size) / 2;
    chars.forEach((char, x) => {
      let posX = firstX + (font.size * x) / 1.5 + randomX();
      let posY = font.size + font.size * y + randomY;
      let randomRad = 0.1;
      setOrigin(
        posX,
        posY,
        () => rotate(random(-randomRad, randomRad)),
        () => text(char, posX, posY)
      );
    });
  });
}

function windowResized() {
  setup();
}
