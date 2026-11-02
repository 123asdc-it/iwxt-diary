const StudyFoundationsMath=(()=>{
 'use strict';
 function finite(x,min=-1e12,max=1e12){if(!Number.isFinite(x)||x<min||x>max)throw Error(`数值须在${min}到${max}之间`);return x;}
 function integer(x,min,max){finite(x,min,max);if(!Number.isInteger(x))throw Error('请输入范围内整数');return x;}
 function dot(a,b){if(a.length!==b.length||!a.length)throw Error('向量长度应相同且非空');return a.reduce((s,x,i)=>s+finite(x)*finite(b[i]),0);}
 function softmax(scores){if(!scores.length||scores.some(x=>Number.isNaN(x)||x===Infinity))throw Error('分数无效');const top=Math.max(...scores);if(!Number.isFinite(top))throw Error('至少保留一个可见位置');const ex=scores.map(s=>s===-Infinity?0:Math.exp(s-top)),sum=ex.reduce((a,b)=>a+b,0);return ex.map(x=>x/sum);}
 function attend(q,K,V,visible=K.map(()=>true)){
  if(K.length!==V.length||K.length!==visible.length||!K.length)throw Error('K/V与可见位置数量应一致');
  const raw=K.map(k=>dot(q,k)),scores=raw.map((s,i)=>visible[i]?s/Math.sqrt(q.length):-Infinity),weights=softmax(scores);
  const contributions=V.map((v,i)=>v.map(x=>finite(x)*weights[i]));
  return{raw,scores,weights,contributions,output:V[0].map((_,d)=>contributions.reduce((s,v)=>s+v[d],0))};
 }
 const demo={labels:['我','喜欢','猫'],Q:[[1,0],[0,1],[1,1]],K:[[1,0],[0,1],[1,1]],V:[[2,0],[0,3],[1,1]]};
 function attention(index=1,causal=false){integer(index,0,2);const visible=demo.K.map((_,j)=>!causal||j<=index);return{...attend(demo.Q[index],demo.K,demo.V,visible),visible,index};}
 function cacheTrace(){
  const X=[[1,0],[0,1],[1,1],[2,1],[1,2]],K=[],V=[],frames=[];
  const projectK=x=>[x[0]+.5*x[1],x[1]],projectV=x=>[x[0]+x[1],x[0]-x[1]];
  for(let i=0;i<X.length;i++){
   K.push(projectK(X[i]));V.push(projectV(X[i]));if(i<1)continue;
   const n=i+1,fullK=X.slice(0,n).map(projectK),fullV=X.slice(0,n).map(projectV),cached=attend(X[i],K,V),full=attend(X[i],fullK,fullV);
   frames.push({n,old:n===2?0:n-1,newPositions:n===2?2:1,K:K.map(v=>[...v]),V:V.map(v=>[...v]),cached,full,fullKV:2*n,cachedKV:n===2?2*n:2,phase:n===2?'Prefill：处理2个已知位置':'Decode：追加一个已知新位置'});
  }return frames;
 }
 function kvBytes(length,layers=32,heads=8,dim=128,bytes=2,batch=1){[length,layers,heads,dim,bytes,batch].forEach(x=>integer(x,1,1e7));return 2*batch*layers*length*heads*dim*bytes;}
 function roundEven(x){const a=Math.floor(x),part=x-a;return part<.5?a:part>.5?a+1:a%2===0?a:a+1;}
 function quantize(value,scale){finite(value,-100,100);finite(scale,.01,10);const ratio=value/scale,rounded=roundEven(ratio),code=Math.max(0,Math.min(15,rounded)),decoded=code*scale;return{ratio,rounded,code,decoded,error:decoded-value,clipped:rounded!==code};}
 function parseNumbers(text,max=12){const parts=String(text).trim().split(/[,，\s]+/).filter(Boolean);if(!parts.length||parts.length>max)throw Error(`请输入1到${max}个数，用逗号分隔`);return parts.map(x=>finite(Number(x),-1000,1000));}
 function windowFrames(values,k){integer(k,1,values.length);const frames=[];let sum=0,best=-Infinity,left=0;
  const snap=(phase,text,right,focus=null)=>frames.push({phase,text,left,right,focus,sum,best,full:right-left+1===k});
  snap('准备','尚未装入元素，窗口和为0。',-1);
  for(let right=0;right<values.length;right++){
   if(right>=k){sum-=values[left];left++;snap('出窗',`减去下标${left-1}的${values[left-1]}；此刻只有${k-1}项。`,right-1,left-1);}
   sum+=values[right];snap('入窗',`加入下标${right}的${values[right]}。`,right,right);
   if(right-left+1===k){best=Math.max(best,sum);snap('更新答案',`窗口已满${k}项，比较当前和与历史最大值。`,right);}
  }return frames;
 }
 function truth(p,q,op){switch(op){case'and':return p&&q;case'or':return p||q;case'imp':return !p||q;case'xor':return p!==q;default:throw Error('逻辑运算无效');}}
 function setResult(op){const U=[1,2,3,4,5,6],A=[1,2,3],B=[3,4];const result=U.filter(x=>op==='union'?A.includes(x)||B.includes(x):op==='intersect'?A.includes(x)&&B.includes(x):op==='diff'?A.includes(x)&&!B.includes(x):op==='complement'?!A.includes(x):false);return{U,A,B,result};}
 function relation(edges,n=3){const has=(a,b)=>edges.some(e=>e[0]===a&&e[1]===b);let reflexive=true,symmetric=true,transitive=true,antisymmetric=true;for(let a=0;a<n;a++){if(!has(a,a))reflexive=false;for(let b=0;b<n;b++){if(has(a,b)&&!has(b,a))symmetric=false;if(a!==b&&has(a,b)&&has(b,a))antisymmetric=false;for(let c=0;c<n;c++)if(has(a,b)&&has(b,c)&&!has(a,c))transitive=false;}}return{reflexive,symmetric,transitive,antisymmetric};}
 const graphEdges=[[0,1],[1,2],[2,3],[0,3],[0,2],[1,3]];
 function graph(indices,n=4){const adj=Array.from({length:n},()=>[]),degrees=Array(n).fill(0);for(const i of indices){const [a,b]=graphEdges[i];adj[a].push(b);adj[b].push(a);degrees[a]++;degrees[b]++;}let components=0;const seen=new Set();for(let a=0;a<n;a++)if(!seen.has(a)){components++;const pending=[a];seen.add(a);while(pending.length){const u=pending.pop();for(const v of adj[u])if(!seen.has(v)){seen.add(v);pending.push(v);}}}return{degrees,components,edges:indices.length,tree:components===1&&indices.length===n-1,hasCycle:indices.length>n-components};}
 function algebra(n,a,b,op){integer(n,2,7);integer(a,0,n-1);integer(b,0,n-1);const calc=(x,y)=>op==='add'?(x+y)%n:op==='multiply'?(x*y)%n:NaN;if(!['add','multiply'].includes(op))throw Error('运算无效');const identity=op==='add'?0:1,inverse=Array.from({length:n},(_,i)=>i).find(x=>calc(a,x)===identity);return{result:calc(a,b),identity,inverse,table:Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>calc(i,j)))};}
 function counting(n,k,ordered=false){integer(n,1,8);integer(k,0,n);let permutations=1;for(let i=0;i<k;i++)permutations*=n-i;let factorial=1;for(let i=2;i<=k;i++)factorial*=i;const count=ordered?permutations:permutations/factorial,samples=[];
  const visit=(path,start)=>{if(samples.length>=24)return;if(path.length===k){samples.push([...path]);return;}for(let i=start;i<n;i++)if(!path.includes(i)){visit([...path,i],ordered?0:i+1);if(samples.length>=24)return;}};visit([],0);return{count,samples};
 }
 function ipv4(ip){const parts=String(ip).split('.');if(parts.length!==4||parts.some(x=>!/^\d+$/.test(x)))throw Error('IPv4格式无效');return parts.reduce((n,x)=>(n*256+integer(Number(x),0,255))>>>0,0);}
 function sameSubnet(a,b,prefix){integer(prefix,0,32);const mask=prefix===0?0:(0xffffffff<<(32-prefix))>>>0;return ((ipv4(a)&mask)>>>0)===((ipv4(b)&mask)>>>0);}
 return{finite,integer,dot,softmax,attend,demo,attention,cacheTrace,kvBytes,roundEven,quantize,parseNumbers,windowFrames,truth,setResult,relation,graphEdges,graph,algebra,counting,ipv4,sameSubnet};
})();
