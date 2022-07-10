// サイズを指定
const size = window.innerWidth * 0.4;

// ベースとなる座標を定義
const basePoints = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [1, 0, -1],
  [1, 1, -1],
  [0, 1, -1],
];

let baseVectors, currentVectors, data;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noFill();
  stroke(255);

  // ベクトルを作成
  baseVectors = basePoints.map(point => createVector(point[0], point[1], point[2]));
  
  // サイズを調整
  baseVectors.flat().forEach(vector => vector.mult(size));
  
  // ベースのベクトルをコピー
  currentVectors = baseVectors.map(vector => vector.copy());
  
  // ベクトルを格納する配列
  data = [
    // 1面（前面）
    [currentVectors[0], currentVectors[1], currentVectors[2], currentVectors[3]],
    // 2面（上面）
    [currentVectors[0], currentVectors[1], currentVectors[5], currentVectors[4]],
    // 3面（背面）
    [currentVectors[4], currentVectors[5], currentVectors[6], currentVectors[7]],
    // 4面（底面）
    [currentVectors[3], currentVectors[2], currentVectors[6], currentVectors[7]],
    // 5面（右面）
    [currentVectors[1], currentVectors[5], currentVectors[6], currentVectors[2]],
    // 6面（左面）
    [currentVectors[0], currentVectors[4], currentVectors[7], currentVectors[3]],
  ];
}

// noise関数を-1から1にマッピングして返す関数
const mapNoise = val => map(noise(val), 0, 1, -1, 1);

// ランダムな値を生成する関数
const randomNum = strength => random(-strength, strength);

function draw() {
  const fc = frameCount;
  orbitControl(1, 1, 0.1);
  background('black');

  rotateX(fc / 500);
  rotateY(fc / 500);
  rotateZ(fc / 500);
  translate(-size / 2, -size / 2, size / 2);

  // 変化
  currentVectors.forEach((vector, i) => {
    // ランダムな値を設定
    vector.set(
      baseVectors[i].x + (mapNoise((fc + (i * size) / 2) / 50) * size) / 2,
      baseVectors[i].y + (mapNoise((fc + (i * size) / 2) / 50) * size) / 2,
      baseVectors[i].z + (mapNoise((fc + (i * size) / 2) / 50) * size) / 2
    );
    // vector.set(
    //   baseVectors[i].x + randomNum(100),
    //   baseVectors[i].y + randomNum(100),
    //   baseVectors[i].z + randomNum(100)
    // );
  });

  // 面ごとに描画
  data.forEach((originData, i) => {
    // 描画開始
    beginShape();

    // 各面のベクトルを取得して描画
    originData.forEach((vector, i, vectors) => {
      // 描画
      vertex(vector.x, vector.y, vector.z);

      // 最後は開始点へつなぐ
      if (i === vectors.length - 1) {
        vertex(vectors[0].x, vectors[0].y, vectors[0].z);
      }
    });

    // 描画終了
    endShape();
  });
}
