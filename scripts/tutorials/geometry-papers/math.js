const GeometryMath=(()=>{
 'use strict';
 const add=(a,b)=>a.map((x,i)=>x+b[i]),sub=(a,b)=>a.map((x,i)=>x-b[i]),mul=(a,s)=>a.map(x=>x*s),dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0),norm=a=>Math.hypot(...a);
 function finite(x,min=-1e8,max=1e8){if(!Number.isFinite(x)||x<min||x>max)throw Error(`数值须在${min}到${max}之间`);return x;}
 function integer(x,min,max){finite(x,min,max);if(!Number.isInteger(x))throw Error('请输入整数');return x;}
 function unit(a){const n=norm(a);if(n<1e-10)throw Error('零向量没有单位方向');return mul(a,1/n);}
 const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
 const yaw=(a,degrees)=>{const t=degrees*Math.PI/180,c=Math.cos(t),s=Math.sin(t);return[c*a[0]+s*a[2],a[1],-s*a[0]+c*a[2]];};
 function lift(u,v,z,fx=400,fy=400,cx=320,cy=240,angle=0,origin=[0,0,0]){
  [u,v,cx,cy,angle,...origin].forEach(x=>finite(x));finite(z,.001,1000);finite(fx,.01,10000);finite(fy,.01,10000);
  const q=[(u-cx)/fx,(v-cy)/fy,1],direction=yaw(unit(q),angle),range=z*norm(q),camera=mul(q,z),point=add(origin,yaw(camera,angle));return{q,direction,range,camera,point,z};
 }
 function project(point,fx=400,fy=400,cx=320,cy=240,angle=0,origin=[0,0,0]){const p=yaw(sub(point,origin),-angle);if(p[2]<=1e-9)return null;return{u:cx+fx*p[0]/p[2],v:cy+fy*p[1]/p[2],z:p[2]};}
 function median(values){if(!values.length)throw Error('中位数需要至少一个数');const a=[...values].sort((a,b)=>a-b),i=Math.floor(a.length/2);return a.length%2?a[i]:(a[i-1]+a[i])/2;}
 function trajectory(track=0,T=8){integer(track,0,3);integer(T,2,120);return Array.from({length:T},(_,t)=>{const a=t/(T-1);return[-.9+1.8*a+.22*track,.22*track,4+.5*track+.45*Math.sin(a*Math.PI)];});}
 function observations({track=0,error='surface',severity=.8,miss=false,T=8}={}){
  finite(severity,0,2);const clean=trajectory(track,T),middle=t=>t>=Math.floor(T*.36)&&t<=Math.floor(T*.64),mask=Array(T).fill(true);
  const raw=clean.map((p,t)=>{const x=[...p],phase=t/(T-1);switch(error){case'correspondence':x[0]+=severity*.7*Math.sin(phase*4);break;case'jitter':x[2]+=severity*.7*Math.sin(t*2.8);break;case'drift':x[2]+=severity*phase;break;case'surface':if(middle(t))x[2]=2;break;case'gap':if(middle(t))mask[t]=false;break;case'none':break;default:throw Error('未知误差类型');}return x;});
  if(error==='surface'&&!miss)for(let t=1;t<T;t++)if(middle(t))mask[t]=false;
  mask[0]=true;return{clean,raw,mask};
 }
 function initialize(points,mask){
  if(points.length!==mask.length||!points.length||!mask[0])throw Error('本模型要求有效参考帧，并使位置与mask长度相同');const known=mask.flatMap((x,i)=>x?[i]:[]);
  const initialized=points.map((p,t)=>{if(mask[t])return[...p];const before=known.filter(i=>i<t).at(-1),after=known.find(i=>i>t);if(after===undefined)return[...points[before]];const w=(t-before)/(after-before);return points[before].map((x,d)=>x*(1-w)+points[after][d]*w);});
  return{points:initialized,gaps:mask.map((_,t)=>Math.min(...known.map(i=>Math.abs(i-t))))};
 }
 function token(points,mask,t,scale=4.5,origin=[0,0,0]){
  finite(scale,.001,1000);integer(t,0,points.length-1);const init=initialize(points,mask),anchor=mul(points[0],1/scale),displacement=sub(mul(init.points[t],1/scale),anchor),available=mask[t]?1:0,ray=available?unit(sub(points[t],origin)):[0,0,0];
  const fields=[displacement,mul(displacement,available),[available],[init.gaps[t]],ray,mul(origin,1/scale)],values=fields.flat();return{fields,values,anchor,initialized:init.points[t],gap:init.gaps[t],available};
 }
 function residual(point,delta,scale){finite(scale,.001,1000);delta.forEach(x=>finite(x,-2,2));return add(point,mul(delta,scale));}
 function borrowedMotion(init,cleanNeighbor,mask){
  const known=mask.flatMap((x,i)=>x?[i]:[]);return init.map((p,t)=>{if(mask[t])return[...p];const near=known.reduce((a,b)=>Math.abs(a-t)<=Math.abs(b-t)?a:b);return add(init[near],sub(cleanNeighbor[t],cleanNeighbor[near]));});
 }
 function attentionCost(P,T,C=4){integer(P,1,8192);integer(T,1,1000);integer(C,1,16);const N=Math.ceil(T/C);return{P,T,C,N,temporal:P*N*N,across:N*P*P,factored:P*N*N+N*P*P,joint:(P*N)**2};}
 function softmax(scores){if(!scores.length||scores.some(x=>!Number.isFinite(x)))throw Error('分数须为有限数');const m=Math.max(...scores),exp=scores.map(x=>Math.exp(x-m)),z=exp.reduce((a,b)=>a+b,0);return exp.map(x=>x/z);}
 const sigmoid=x=>x>=0?1/(1+Math.exp(-x)):Math.exp(x)/(1+Math.exp(x));
 function hexBoundary(u,v){finite(u,-1000,1000);finite(v,-1000,1000);const terms=[Math.abs(v),Math.abs(Math.sqrt(3)*u/2+v/2),Math.abs(Math.sqrt(3)*u/2-v/2)];return{terms,d:Math.max(...terms)-1};}
 function hexSupport(u,v,beta=8){finite(beta,.01,10000);return sigmoid(-beta*hexBoundary(u,v).d);}
 const hexVertices=()=>[[2/Math.sqrt(3),0],[1/Math.sqrt(3),1],[-1/Math.sqrt(3),1],[-2/Math.sqrt(3),0],[-1/Math.sqrt(3),-1],[1/Math.sqrt(3),-1]];
 function frame(angle=0,center=[0,0,4],su=1,sv=1){finite(angle,-89,89);finite(su,.05,5);finite(sv,.05,5);const tu=yaw([1,0,0],angle),tv=[0,1,0],normal=cross(tu,tv);return{center,tu,tv,normal,su,sv};}
 const localPoint=(f,u,v)=>add(f.center,add(mul(f.tu,f.su*u),mul(f.tv,f.sv*v)));
 function intersect(origin,direction,f){const den=dot(direction,f.normal);if(Math.abs(den)<1e-8)return null;const lambda=dot(sub(f.center,origin),f.normal)/den;if(lambda<=0)return null;const point=add(origin,mul(direction,lambda)),offset=sub(point,f.center);return{lambda,point,u:dot(offset,f.tu)/f.su,v:dot(offset,f.tv)/f.sv};}
 function spatialColor(u,v,c0=[.4,.55,.6],gu=[.25,0,0],gv=[0,0,.25]){return c0.map((x,i)=>x+u*gu[i]+v*gv[i]);}
 const displayColor=color=>color.map(x=>Math.round(Math.max(0,Math.min(1,x))*255));
 function alpha(opacity,support){finite(opacity,0,1);finite(support,0,1);return Math.min(opacity*support,.99);}
 function composite(layers,bg=[1,1,1]){let remaining=1;const color=[0,0,0],weights=[];for(const layer of layers){finite(layer.alpha,0,.99);const w=remaining*layer.alpha;weights.push(w);layer.color.forEach((x,i)=>color[i]+=w*x);remaining*=1-layer.alpha;}bg.forEach((x,i)=>color[i]+=remaining*x);return{color,weights,remaining};}
 function parameterBytes(variant,count){integer(count,1,1e7);const scalars={V1:20,V2:29,V3:65,'2DGS':58}[variant];if(!scalars)throw Error('未知外观版本');return{scalars,bytes:scalars*4*count,MB:scalars*4*count/1e6,MiB:scalars*4*count/2**20};}
 function approximation(radius=.7,curvature=.3){finite(radius,.05,1.2);finite(curvature,0,1);let constant=0,linear=0,n=0;for(let i=0;i<31;i++)for(let j=0;j<31;j++){const u=(i/30*2-1)*radius*2/Math.sqrt(3),v=(j/30*2-1)*radius;if(hexBoundary(u/radius,v/radius).d>0)continue;const target=.5+.2*u-.1*v+curvature*(u*u+v*v),flat=.5,affine=.5+.2*u-.1*v;constant+=(target-flat)**2;linear+=(target-affine)**2;n++;}return{constantMSE:constant/n,linearMSE:linear/n,samples:n};}
 function psnr(mse,max=1){finite(mse,0,1e8);finite(max,.001,1e8);return mse===0?Infinity:10*Math.log10(max*max/mse);}
 return{add,sub,mul,dot,norm,unit,cross,yaw,finite,integer,lift,project,median,trajectory,observations,initialize,token,residual,borrowedMotion,attentionCost,softmax,sigmoid,hexBoundary,hexSupport,hexVertices,frame,localPoint,intersect,spatialColor,displayColor,alpha,composite,parameterBytes,approximation,psnr};
})();
