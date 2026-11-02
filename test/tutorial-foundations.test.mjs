import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {lessons,routes,dataFor} from '../scripts/tutorials/foundations/catalog.mjs';
import {enhanceTutorial} from '../scripts/tutorials/foundations/decorate.mjs';
const root=new URL('../',import.meta.url),read=p=>readFileSync(new URL(p,root),'utf8');
const math=read('scripts/tutorials/foundations/math.js'),figures=read('scripts/tutorials/foundations/figures.js'),context=vm.createContext({});
vm.runInContext(math+'\n'+figures,context);const M=vm.runInContext('StudyFoundationsMath',context),F=vm.runInContext('StudyFoundationsFigures',context);
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
test('concept routes have complete prerequisites, no cycles and an explanation plus operable model at every node',()=>{
 const ids=new Set(lessons.map(l=>l.id));assert.equal(ids.size,92);const byId=new Map(lessons.map(l=>[l.id,l]));
 function visit(id,path=[]){assert.ok(!path.includes(id),'dependency cycle '+[...path,id]);const l=byId.get(id);assert.ok(l,'missing '+id);for(const p of l.prereq)visit(p,[...path,id]);}
 for(const l of lessons){visit(l.id);for(const k of ['title','why','meaning','example','question','answer'])assert.ok(l[k]?.length>5,`${l.id} lacks ${k}`);const s=F.defaults(l.model);const frame=F.render(l.model,s);assert.ok(frame.count>=2,l.id);assert.ok(!/NaN|undefined/.test(frame.html),l.id);s.step=frame.count-1;assert.ok(!/NaN|undefined/.test(F.render(l.model,s).html),l.id);}
 for(const slug of Object.keys(routes)){const d=dataFor(slug),packed=new Set(d.lessons.map(l=>l.id));for(const l of d.lessons)for(const p of l.prereq)assert.ok(packed.has(p),slug+' missing '+p);assert.ok(d.order.every(id=>packed.has(id)));}
});
test('actual published single files inline the current models, preserve valid JSON and regenerate idempotently',async()=>{
 for(const slug of Object.keys(routes)){
  const html=read(`public/tutorials/${slug}/index.html`);assert.equal((html.match(/id="sf-data"/g)||[]).length,1);assert.equal((html.match(/id="sf-math"/g)||[]).length,1);
  const script=html.match(/<script id="sf-math">\n([\s\S]*?)\n<\/script>/)[1];assert.equal(script,math);
  const d=JSON.parse(html.match(/<script id="sf-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);assert.deepEqual(d,dataFor(slug));
  for(const x of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g))if(!/application\/json/.test(x[1]))new vm.Script(x[2]);
  assert.equal(await enhanceTutorial(slug,html),html,slug+' not idempotent');
 }
 const mita=read('public/tutorials/mita-attention/index.html');assert.ok(mita.indexOf('id="start"')<mita.indexOf('id="why"'));assert.ok(mita.includes("active=ids.includes(id)?id:'start'"));assert.ok(mita.includes('StudyFoundationsFigures.mita(step,m,k,i,e,r)'));
 const original=read('scripts/tutorials/foundations/mita-base.html');assert.equal(mita.match(/<script id="mita-math">([\s\S]*?)<\/script>/)[1],original.match(/<script id="mita-math">([\s\S]*?)<\/script>/)[1]);
});
test('softmax and attention agree with independent exponent arithmetic, masking and value mixing',()=>{
 const q=[2,-1],K=[[1,3],[2,1],[-1,2]],V=[[4,1],[-2,3],[1,5]];
 for(const mask of [[true,true,true],[true,false,true],[false,true,false]]){const r=M.attend(q,K,V,mask),exp=K.map((k,i)=>mask[i]?Math.exp((2*k[0]-k[1])/Math.sqrt(2)):0),sum=exp.reduce((a,b)=>a+b,0);for(let j=0;j<3;j++)near(r.weights[j],exp[j]/sum);for(let d=0;d<2;d++)near(r.output[d],V.reduce((s,v,j)=>s+v[d]*exp[j]/sum,0));near(r.weights.reduce((a,b)=>a+b,0),1);}
 near(M.softmax([10000,10000])[0],.5);assert.equal(M.softmax([-Infinity,0])[0],0);assert.throws(()=>M.softmax([-Infinity,-Infinity]));
 for(let i=0;i<3;i++)for(const causal of [true,false]){const r=M.attention(i,causal);for(let j=0;j<3;j++)if(causal&&j>i)assert.equal(r.weights[j],0);}
});
test('causal cache reuse equals full recomputation while still reading every visible KV, with separate byte budget',()=>{
 const X=[[1,0],[0,1],[1,1],[2,1],[1,2]],frames=M.cacheTrace();assert.equal(frames.length,4);
 for(const f of frames){const [a,b]=X[f.n-1],keys=X.slice(0,f.n).map(([x,y])=>[x+.5*y,y]),values=X.slice(0,f.n).map(([x,y])=>[x+y,x-y]),ex=keys.map(([x,y])=>Math.exp((a*x+b*y)/Math.sqrt(2))),z=ex.reduce((a,b)=>a+b,0);for(let d=0;d<2;d++){const expected=values.reduce((s,v,j)=>s+ex[j]/z*v[d],0);near(f.cached.output[d],expected);near(f.full.output[d],expected);}assert.equal(f.cached.weights.length,f.n);assert.equal(f.fullKV,2*f.n);assert.equal(f.cachedKV,f.n===2?4:2);}
 assert.equal(JSON.stringify(frames[0].K),JSON.stringify(frames.at(-1).K.slice(0,2)));assert.equal(M.kvBytes(4096,32,8,128,2),512*2**20);assert.equal(M.kvBytes(4096,32,32,128,2),2*2**30);
});
test('window frames preserve sums and only update best for complete windows across exhaustive signed arrays',()=>{
 let cases=0;
 for(let n=1;n<=5;n++)for(let code=0;code<3**n;code++){let v=code;const a=Array.from({length:n},()=>{const x=[-2,0,3][v%3];v=Math.floor(v/3);return x;});for(let k=1;k<=n;k++){const rows=M.windowFrames(a,k),expected=Math.max(...a.slice(0,n-k+1).map((_,i)=>a.slice(i,i+k).reduce((a,b)=>a+b,0)));assert.equal(rows.at(-1).best,expected);for(const f of rows){assert.equal(f.sum,a.slice(f.left,f.right+1).reduce((a,b)=>a+b,0));if(f.phase==='更新答案')assert.equal(f.full,true);}cases++;}}
 assert.ok(cases>1000);assert.throws(()=>M.windowFrames([1,2],3));
});
test('small graph summaries match union-find and relation properties retain direction and vacuous cases',()=>{
 for(let mask=0;mask<64;mask++){const indices=Array.from({length:6},(_,i)=>i).filter(i=>mask&(1<<i)),parent=[0,1,2,3],find=i=>parent[i]===i?i:(parent[i]=find(parent[i]));let cycle=false;for(const i of indices){const [a,b]=M.graphEdges[i],u=find(a),v=find(b);if(u===v)cycle=true;else parent[u]=v;}const components=new Set(parent.map((_,i)=>find(i))).size,r=M.graph(indices);assert.equal(r.components,components);assert.equal(r.hasCycle,cycle);assert.equal(r.tree,components===1&&!cycle);assert.equal(r.degrees.reduce((a,b)=>a+b,0),2*indices.length);}
 const empty=M.relation([]);assert.equal(empty.reflexive,false);assert.equal(empty.symmetric,true);assert.equal(empty.transitive,true);assert.equal(M.relation([[0,1],[1,2]]).transitive,false);assert.equal(M.relation([[0,1],[1,2],[0,2]]).transitive,true);assert.equal(M.relation([[0,1],[1,0]]).antisymmetric,false);
});
test('combination counts agree with all subsets, modular inverses with coprimality, and quantization tie/clipping rules',()=>{
 const gcd=(a,b)=>b?gcd(b,a%b):a;
 for(let n=1;n<=8;n++)for(let k=0;k<=n;k++){let count=0;for(let mask=0;mask<2**n;mask++)if(mask.toString(2).replaceAll('0','').length===k)count++;assert.equal(M.counting(n,k).count,count);const r=M.counting(n,k,true);let fact=1;for(let i=1;i<=k;i++)fact*=i;assert.equal(r.count,count*fact);assert.ok(r.samples.every(a=>new Set(a).size===k));}
 for(let n=2;n<=7;n++)for(let a=0;a<n;a++){const r=M.algebra(n,a,0,'multiply');assert.equal(r.inverse!==undefined,gcd(a,n)===1);if(r.inverse!==undefined)assert.equal(a*r.inverse%n,1);}
 assert.equal(M.quantize(1.625,.25).code,6);assert.equal(M.quantize(1.875,.25).code,8);assert.equal(M.quantize(-1,.25).code,0);assert.equal(M.quantize(9,.25).code,15);assert.equal(M.quantize(9,.25).clipped,true);
});
test('IPv4 examples compute prefix membership correctly including /0 and /32',()=>{
 assert.equal(M.sameSubnet('192.168.1.10','192.168.1.20',24),true);assert.equal(M.sameSubnet('192.168.1.10','192.168.2.20',24),false);assert.equal(M.sameSubnet('10.1.2.3','255.255.255.255',0),true);assert.equal(M.sameSubnet('10.1.2.3','10.1.2.4',32),false);assert.equal(M.ipv4('255.255.255.255'),4294967295);assert.throws(()=>M.ipv4('256.1.1.1'));assert.throws(()=>M.ipv4('1.2.3'));
});
