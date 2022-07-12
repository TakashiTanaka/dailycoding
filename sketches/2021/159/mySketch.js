// 画像を読み込み
const imageUrl = new URL('sample.png', import.meta.url);

// pixiでカンバスを追加
let app = new PIXI.Application({ width: 640, height: 360 });

// viewをbodyに追加
document.body.appendChild(app.view);

// spriteを生成
let sprite = PIXI.Sprite.from(imageUrl.href);

// spriteをstageに追加
app.stage.addChild(sprite);

let elapsed = 0.0; // 経過時間（elapsed ＝ 経過という意味）

// tickerは1つ以上のコールバックを実行するオブジェクト
app.ticker.add(delta => {
  // console.log(delta); // deltaは1を返していた
  elapsed += delta; // 経過時間にdeltaをプラス
  sprite.x = 200.0 + Math.cos(elapsed / 50.0) * 100.0; // spriteのx位置を移動
});
