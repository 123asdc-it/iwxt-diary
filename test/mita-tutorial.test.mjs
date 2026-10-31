import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const html=readFileSync(new URL('../public/tutorials/mita-attention/index.html',import.meta.url),'utf8');
const script=html.match(/<script id="mita-math">([\s\S]*?)<\/script>/)?.[1];assert.ok(script);
const M=vm.runInNewContext(`${script}\nMiTAMath`),near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
test('stable softmax and deterministic top-k handle extremes and ties',()=>{
 near(M.softmax([10000,10001]).reduce((a,b)=>a+b,0),1);near(M.softmax([10000,10001])[1],1/(1+Math.exp(-1)));
 assert.deepEqual([...M.top([2,2,1],2)],[0,1]);assert.throws(()=>M.softmax([Infinity]));
 for(const match of html.matchAll(/<script(?: id="mita-math")?>([\s\S]*?)<\/script>/g))new vm.Script(match[1]);
});
test('all 32 grid configurations use full compression, exact routing and joint softmax',()=>{
 const {Q,K,V}=M.demo;
 for(const m of [1,2,4,8])for(let k=1;k<=8;k++){
  const r=M.run(Q,K,V,M.groups(m),k);
  for(const e of r.experts){assert.equal(e.selected.length,k);assert.equal(new Set(e.selected).size,k);near(e.weights.reduce((a,b)=>a+b,0),1);assert.equal(e.weights.length,8);for(let j=0;j<2;j++)near(e.key[j],e.source.reduce((s,i)=>s+Q[i][j],0)/e.source.length);}
  for(let i=0;i<8;i++){const q=r.queries[i];assert.equal(q.entries.length,m+k);assert.equal(q.routes[0],M.top(r.landmarks.map(l=>M.dot(Q[i],l)),1)[0]);near(q.weights.reduce((a,b)=>a+b,0),1);
   const scores=q.entries.map(e=>M.dot(Q[i],e.key)/Math.sqrt(2)),exp=scores.map(Math.exp),z=exp.reduce((a,b)=>a+b,0);
   for(let d=0;d<2;d++)near(q.output[d],q.entries.reduce((s,e,j)=>s+exp[j]/z*e.value[d],0));
   assert.ok(q.sharedMass>0&&q.sharedMass<1);
  }
 }
});
test('branch partition weighting equals concatenation and naive output addition differs',()=>{
 const {Q,K,V}=M.demo,r=M.run(Q,K,V,M.groups(2),2),q=r.queries[0];
 const groups=[q.entries.slice(0,2),q.entries.slice(2)],outputs=groups.map(es=>M.dense(Q[0],es.map(e=>e.key),es.map(e=>e.value)).output),z=groups.map(es=>es.reduce((sum,e)=>sum+Math.exp(M.dot(Q[0],e.key)/Math.sqrt(2)),0));
 for(let d=0;d<2;d++)near(q.output[d],(z[0]*outputs[0][d]+z[1]*outputs[1][d])/(z[0]+z[1]));
 assert.ok(Math.abs(q.output[0]-outputs[0][0]-outputs[1][0])>0.01);
});
test('routing multiple overlapping experts preserves repeated KV entries',()=>{
 const Q=[[1],[1]],K=[[1],[0]],V=[[2],[0]],r=M.run(Q,K,V,[[0],[1]],1,2),q=r.queries[0];
 assert.equal(q.entries.filter(e=>e.branch==='routed'&&e.token===0).length,2);assert.equal(q.entries.length,4);near(q.weights.reduce((a,b)=>a+b,0),1);
});
test('maximal m and k do not force dense equality while shared entries remain',()=>{
 const r=M.run([[0],[1]],[[0],[1]],[[0],[1]],[[0],[1]],2),q=r.queries[0];
 near(q.dense.output[0],0.5);near(q.output[0],(0.5+1/(1+Math.exp(-1))+0+1)/4);assert.ok(q.error>0.05);
});
test('cost includes probing and reuses routing/shared score pairs, without speed claims',()=>{
 const c=M.cost(4096,16,64,1);assert.equal(c.total,4096*96);assert.equal(c.perQuery,80);assert.equal(c.total,c.probing+c.routing+c.routed);
 assert.equal(M.cost(8192,16,64).total,2*c.total);assert.equal(M.cost(8192,16,64).dense,4*c.dense);assert.throws(()=>M.cost(4,5,1));
 assert.ok(M.cost(8,8,8).total>M.cost(8,8,8).dense);
});
