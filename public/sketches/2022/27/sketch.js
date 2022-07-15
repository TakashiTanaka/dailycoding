function preload() {
  font = loadFont('SourceCodePro-Bold.ttf');
}

function setup() {
  createCanvas(800, 800);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  fill(360);
  textFont(font);
  main();
}

// 文字間に余白を入れるのは
// 文字数 + 1 パターンとなる

function main() {
  const baseStr = '#dailycoding';
  const str = baseStr.split('');
  const jointStr = ' ';
  let arry = [];

  for (let i = 0; i < str.length - 1; i++) {
    // テキストを別の配列に格納
    const newStr = str.slice();

    // 文字の間の数
    const betweenNum = str.length - 1;

    // 最初のループで空白を入れる位置
    const baseInsertPos = i + 1;

    // 頭文字の後に空白挿入
    newStr.splice(baseInsertPos, 0, jointStr);
    // console.log(newStr);
    arry.push(newStr.slice());

    // roop2の繰り返し数
    const roop2IterateCount = betweenNum - baseInsertPos;

    // ベースの空白を入れた位置より後ろ側にある文字の間に空白を入れるループ
    for (let j = 0; j < roop2IterateCount; j++) {
      const insertPos = (j + 1) * 2;
      newStr.splice(baseInsertPos + insertPos, 0, jointStr);
      // console.log(newStr);
      arry.push(newStr.slice());
    }
  }

  const lineHeight = 1;
  const fontSize = height / (arry.length * lineHeight);
  // textAlign(CENTER, BOTTOM);
  textSize(fontSize);

  // console.log(arry);
  // shuffle(arry).forEach((str, i) => {
  arry
    .sort((a, b) => a.length - b.length)
    .forEach((str, i) => {
      // text(str.join(''), 0, i * fontSize * lineHeight + fontSize);
      // text(str.join(''), 0, i * fontSize * lineHeight + fontSize);
      const wordSplitArray = str.join('').split(' ');
      const wordNum = wordSplitArray.length;
      const baseStrWidth = textWidth(baseStr);
      const tracking = (width - baseStrWidth) / (wordNum - 1);
      wordSplitArray.forEach((word, count, arry) => {
        fill(255);
        // const beforeWordsTotalWidth = arry
        //   .slice(0, count)
        //   .map(word => textWidth(word))
        //   .reduce((prev, curr) => prev + curr);
        // console.log(beforeWordsTotalWidth);
        text(word, 0 + tracking * count, i * fontSize + fontSize * 0.75);
      });
      console.log(tracking, wordNum);
    });

  // fill(360);
  // rect(width / 2, 0, width / 2, height);
}
