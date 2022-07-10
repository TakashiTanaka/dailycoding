let requestUrl = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=jm4RNqYLoAI83tdj7XBDtkAXTrG7jGkU';
let heading = 'the most popular articles on NYTimes.com';
let cr;
let titles = [];
let articleA = [];
let articleImg = [];
let bgColor = 0;
let img;
let imgWidth;
let margin = 40;

function preload() {
  fetch(requestUrl)
    .then(response => response.json())
    .then(
      data => {
        cr = data.copyright;
        for (let i = 0, len = data.results.length; i < len; i++) {
          titles.push(data.results[i].title);
          articleA.push(createA(data.results[i].url, data.results[i].title, '_blank'));
          articleImg.push(data.results[i].media[0]['media-metadata'][2].url);
          articleA[i].style('color', '#fff');
          articleA[i].style('font-size', `20px`);
          articleA[i].style('font-family', `helvetica-light`);
        }
      }
    );
}

function setup() {
  createCanvas(1000, 1000);
  imageMode(CENTER);
}

function draw() {
  background(bgColor);
  fontSettings(height / 15, 'bold', 'stroke', 255);
  push();
  translate(980, 20);
  rotate(HALF_PI);
  text(heading, 0, 0, height - 100);
  pop();

  fontSettings(height / 100, 'right', 'fill', 255, RIGHT, BOTTOM);
  text(cr, width - margin / 2, height - margin / 2);

  //for inループでkeyとvalueを取り出す
  for (let key in titles) {
    articleA[key].position(margin, margin + 45 * key);
    articleA[key].mouseOver(() => {
      articleA[key].style('color', 'transparent');
      img = createImg(articleImg[key], 'img');
      img.position(width - 440, 0);
    });
    articleA[key].mouseOut(() => {
      articleA[key].style('color', '#fff');
      bgColor = 0;
      img.hide();
    });
  }
}

function fontSettings(size, weight, style = 'fill', color = 255, horizontal = LEFT, vertical = TOP) {
  if (style === 'fill') {
    noStroke();
    fill(color);
  } else {
    noFill();
    stroke(color);
  }
  textAlign(horizontal, vertical);
  textSize(size);
  textFont(`helvetica-${weight}`);
}
