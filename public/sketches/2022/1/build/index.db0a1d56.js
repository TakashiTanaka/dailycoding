const $5f7a2779720439e6$export$20d2db9c68afeac = (unitSize)=>{
    const iterator = (iNum, func)=>{
        for(let count = iNum; count--;)func(count);
    };
    iterator(ceil(width / unitSize), (count)=>{
        line(count * unitSize, 0, count * unitSize, height);
        line(0, count * unitSize, width, count * unitSize);
    });
};
const $5f7a2779720439e6$export$f3c6ed4330abfc18 = (i)=>i.color(i.random(255), i.random(255), i.random(255))
;
const $5f7a2779720439e6$export$3c5f89dae98e900b = (i, min, max)=>i.int(i.random(min, max + 1))
;
const $5f7a2779720439e6$export$6f58e2338da23f4d = (count, fn)=>{
    [
        ...Array(count).keys()
    ].forEach((i)=>{
        fn(i);
    });
};
const $5f7a2779720439e6$export$efa9af975703bd9f = (options)=>{
    const { count: count , fn: fn  } = options;
    $5f7a2779720439e6$export$6f58e2338da23f4d(count.x, (x)=>{
        $5f7a2779720439e6$export$6f58e2338da23f4d(count.y, (y)=>{
            fn(x, y);
        });
    });
};
const $5f7a2779720439e6$export$5e10669a47a6c2e6 = (i, text, size = 16, position = {
    x: 0,
    y: 0
}, fillColor = {
    fill: true,
    color: 0
}, strokeColor = {
    fill: true,
    color: 255
}, rotate = {
    isRotate: false,
    degree: 0,
    angleMode: i.DEGREES
})=>{
    i.push();
    if (rotate.isRotate) {
        i.translate(position.x, position.y);
        i.angleMode(rotate.angleMode);
        i.rotate(rotate.degree);
        i.translate(-position.x, -position.y);
    }
    if (!fillColor.fill) i.noFill();
    else i.fill(fillColor.color);
    if (!strokeColor.fill) i.noStroke();
    else i.stroke(strokeColor.color);
    i.textSize(size);
    i.text(text, position.x, position.y);
    i.pop();
};
const $5f7a2779720439e6$export$68be7880b68689e8 = (i, size = 10, font = 'helvetica-light', horizontalAlign = i.LEFT, verticalAlign = i.TOP, leading = 1.5)=>{
    i.textSize(size);
    i.textFont(font);
    i.textAlign(horizontalAlign, verticalAlign);
    i.textLeading(leading);
};
const $5f7a2779720439e6$export$be7dec8cad78d96d = (i, base, strength, angle)=>base + strength * i.sin(angle)
;
const $5f7a2779720439e6$export$1bd0436a351efe6d = (i, base, strength, angle)=>base + strength * i.cos(angle)
;
const $5f7a2779720439e6$export$e647a1c8a685207a = (beginXPos, endXPos, divNum, firstYpos, secondYpos)=>{
    $5f7a2779720439e6$export$6f58e2338da23f4d(divNum, (count)=>line(beginXPos + endXPos / divNum * count, firstYpos, endXPos / divNum + endXPos / divNum * count, secondYpos)
    );
};
const $5f7a2779720439e6$export$bd202b05bf528b1f = (str, textColor)=>{
    const fontSize = windowWidth / 80;
    $5f7a2779720439e6$export$68be7880b68689e8(fontSize);
    const msg = str;
    const msgWidth = textWidth(msg);
    const margin = msgWidth / 5;
    fill(textColor);
    $5f7a2779720439e6$export$6f58e2338da23f4d(floor(width / msgWidth), (columnCount)=>$5f7a2779720439e6$export$6f58e2338da23f4d(floor(height / fontSize), (rowCount)=>text(msg, columnCount * (msgWidth + margin), rowCount * (fontSize + margin))
        )
    );
};
const $5f7a2779720439e6$export$717aaa4b4fe61ebd = (originX, originY, beforeFunc, afterFunc)=>{
    translate(originX, originY);
    push();
    beforeFunc();
    translate(-originX, -originY);
    afterFunc();
    pop();
};
const $5f7a2779720439e6$export$c82b6736b4643c1a = (word1, value, y)=>{
    const wordSplitter = (word)=>word.split('')
    ;
    const chars = wordSplitter(word1);
    chars.forEach((char, n)=>{
        text(char, n * value, y);
    });
};

const $18f6f669acb498c3$var$sketch = (p)=>{
    let count = 0;
    p.setup = ()=>{
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.textSize(80);
        p.textAlign(p.RIGHT, p.TOP);
        p.textFont('helvetica');
        p.strokeWeight(2);
        p.stroke(255);
        p.fill(0);
    };
    p.draw = ()=>{
        p.background('black');
        $5f7a2779720439e6$export$6f58e2338da23f4d(count, (i)=>{
            p.text(i, 300 + p.cos(i / 100) * 100, 20 + i / 3);
        });
        if (count <= 2022) count++;
    };
};
new p5($18f6f669acb498c3$var$sketch);


