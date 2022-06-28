(()=>{"use strict";var t={d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Extension:()=>m,Function:()=>z,Object:()=>O,Utility:()=>T});var i={};t.r(i),t.d(i,{exCircle:()=>a,exCurveVertex:()=>x,exLine:()=>h,exPoint:()=>l,exRect:()=>d,exText:()=>n,exTriangle:()=>c,exVertex:()=>p});var s={};t.r(s),t.d(s,{Ball:()=>g,Car:()=>y,ExEllipse:()=>w,Obj:()=>u});var r={};t.r(r),t.d(r,{createFullCanvas:()=>v,dropShadow:()=>f});var o={};t.r(o),t.d(o,{CollisionChecker:()=>C,Iterator:()=>S,Mover:()=>b});const h=(t,e)=>line(t.x,t.y,e.x,e.y),n=(t,e)=>text(e,t.x,t.y),a=(t,e)=>circle(t.x,t.y,e),c=(t,e,i)=>triangle(t.x,t.y,e.x,e.y,i.x,i.y),d=(t,e,i)=>rect(t.x,t.y,e,i),l=t=>point(t.x,t.y),p=t=>vertex(t.x,t.y),x=t=>curveVertex(t.x,t.y);class u{constructor(t,e,i){this.position=t,this.width=e,this.height=i}}class y extends u{constructor(t,e=100,i=100,s=100){super(t,e,i),this.carColor=s}display(){rectMode(CENTER),noStroke(),fill(this.carColor),d(this.position,20,10),rect(this.position.x,this.position.y+8,36,8),fill(0,100,0),circle(this.position.x-8,this.position.y+12,6),circle(this.position.x+8,this.position.y+12,6)}}class g extends u{constructor(t,e){super(t,2*e),this.radius=e}display(){a(this.position,this.width)}}class w extends u{constructor(t,e,i,s=60){return super(t,e,i),this.points=[],this.pointNum=s,this.size={width:this.width,height:this.height},this}createPoints(){for(let t=0;t<=this.pointNum;t++)this.points.push(createVector(this.position.x+this.size.width/2*cos(TAU/this.pointNum*t),this.position.y+this.size.height/2*sin(TAU/this.pointNum*t)));return this}draw(){beginShape(),this.points.forEach((t=>x(t))),x(this.points[1]),x(this.points[2]),endShape()}}const v=()=>createCanvas(windowWidth,windowHeight),f=({x:t=4,y:e=4,blur:i=4,color:s="black"})=>{drawingContext.shadowOffsetX=t,drawingContext.shadowOffsetY=e,drawingContext.shadowBlur=i,drawingContext.shadowColor=s};class C{constructor(t){this.target=t}check(){const t=this.target.v.x>=width-this.target.size/2,e=this.target.v.x<=0+this.target.size/2;return{t:this.target.v.y<=0+this.target.size/2,r:t,b:this.target.v.y>=height-this.target.size/2,l:e}}}class b{constructor(t,e){this.target=t.v,this.speedSeed=e,this.s=createVector(random(-this.speedSeed,this.speedSeed),random(-this.speedSeed,this.speedSeed))}reverse(t){"x"===t&&(this.s.x*=-1),"y"===t&&(this.s.y*=-1)}move(){this.target.add(this.s)}}class S{constructor(t,e){this.count=t,this.fn=e,this.start()}start(){for(let t=0;t<this.count;t++)this.fn(t)}}const m=i,O=s,z=r,T=o;window.p5ex=e})();
//# sourceMappingURL=p5ex.js.map