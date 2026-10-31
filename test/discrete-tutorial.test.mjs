import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const html=readFileSync(new URL('../public/tutorials/discrete-math/index.html',import.meta.url),'utf8');
const script=html.match(/<script id="discrete-engine">([\s\S]*?)<\/script>/)?.[1];
assert.ok(script);
const E=vm.runInNewContext(`${script}\nDiscreteEngine`);
const plain=x=>JSON.parse(JSON.stringify(x));
test('all executable scripts parse and constants have valid principal forms',()=>{
 for(const match of html.matchAll(/<script(?: id="discrete-engine")?>([\s\S]*?)<\/script>/g))new vm.Script(match[1]);
 for(const f of ['0','1','!1']){const r=E.truth(f);assert.equal(E.logic(r.dnf).evaluate({}),r.rows[0].value);assert.equal(E.logic(r.cnf).evaluate({}),r.rows[0].value);}
});
test('book syntax uses left association; truth tables and principal forms agree',()=>{
 assert.equal(E.logic('p -> q -> r').pretty,'((p → q) → r)');
 assert.equal(E.logic('p -> q -> r').evaluate({p:false,q:false,r:false}),false);
 const t=E.truth('p -> q');assert.equal(t.rows.length,4);assert.equal(t.rows.filter(r=>r.value).length,3);
 for(const f of ['p -> q','!(p & q)','p | !p','p & !p']){
  const a=E.truth(f);for(const form of [a.dnf,a.cnf]){for(const r of a.rows)assert.equal(E.logic(form).evaluate(r.assignment),r.value);}
 }
 assert.throws(()=>E.logic('p;process.exit()'));assert.throws(()=>E.logic('p'.repeat(201)));
 assert.equal(E.entails(['p -> q','p'],'q').valid,true);
 assert.equal(E.entails(['p -> q','q'],'p').valid,false);
});
test('positive-length transitive closure agrees with independent reachability for all 512 relations',()=>{
 for(let mask=0;mask<512;mask++){
  const r=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>Boolean(mask&(1<<(i*3+j)))));
  const expected=r.map((_,i)=>{const seen=new Set(),todo=[];for(let j=0;j<3;j++)if(r[i][j])todo.push(j);while(todo.length){const v=todo.pop();if(seen.has(v))continue;seen.add(v);for(let j=0;j<3;j++)if(r[v][j])todo.push(j);}return [0,1,2].map(j=>seen.has(j));});
  assert.deepEqual(plain(E.closure(r,'transitive')),expected);
 }
 const f=[[false,true],[false,false]],g=[[false,false],[true,false]];
 assert.deepEqual(plain(E.compose(f,g)),[[true,false],[false,false]]);
 assert.equal(E.relation([[false,false],[false,false]]).transitive,true);
 assert.equal(E.quantifiers([[true,false],[false,true]]).allSome,true);
 assert.equal(E.quantifiers([[true,false],[false,true]]).someAll,false);
});
test('finite operations, generators and divisibility lattice respect algebraic conditions',()=>{
 const add=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>(i+j)%3));
 const mul=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>(i*j)%3));
 assert.equal(E.operation(add).group,true);assert.equal(E.operation(mul).monoid,true);assert.equal(E.operation(mul).group,false);
 assert.deepEqual(plain(E.cyclic(6,2)),[0,2,4]);assert.equal(E.cyclic(6,5).length,6);
 assert.equal(E.lattice(6).boolean,true);assert.equal(E.lattice(12).boolean,false);
 assert.equal(E.lattice(12).complements['2'].length,0);
});
test('counting and book-specific recurrence indices remain distinct',()=>{
 assert.equal(E.choose(5,2),10n);assert.equal(E.permute(5,2),20n);assert.equal(E.choose(5,6),0n);
 assert.deepEqual(plain(E.sequences(5).fib),[1,1,2,3,5,8]);
 assert.deepEqual(plain(E.sequences(4).catalan),[1,1,2,5]);
 assert.equal(E.stirling(4,2,1),11);assert.equal(E.stirling(4,2,2),7);
 assert.deepEqual(plain(E.coinCoefficients(6,[1,2])),[1,1,2,2,3,3,4]);
});
test('graph algorithms distinguish edges, vertices, isolation and walk repetitions',()=>{
 const k4=E.graph(4,[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]);
 assert.equal(k4.hamilton,true);assert.equal(k4.euler,false);
 const isolated=E.graph(4,[[0,1],[1,2],[2,0]]);assert.equal(isolated.euler,false);assert.equal(isolated.tree,false);
 const bow=E.graph(5,[[0,1],[1,2],[2,0],[0,3],[3,4],[4,0]]);assert.equal(bow.euler,true);assert.equal(bow.hamilton,false);
 for(let mask=0;mask<64;mask++){const pairs=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],g=E.graph(4,pairs.filter((_,i)=>mask&(1<<i)));for(let i=0;i<4;i++)assert.equal(g.a2[i][i],g.degree[i]);assert.equal(g.degree.reduce((a,b)=>a+b,0),2*g.edges.length);}
});
test('Kruskal supports negative weights and is checked against all spanning trees',()=>{
 const pairs=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
 for(let seed=0;seed<30;seed++){
  const edges=pairs.map(([u,v],i)=>[u,v,((seed*7+i*11)%17)-5]);let best=Infinity;
  for(let mask=0;mask<64;mask++){const e=edges.filter((_,i)=>mask&(1<<i));if(e.length===3&&E.graph(4,e.map(x=>x.slice(0,2))).tree)best=Math.min(best,e.reduce((s,x)=>s+x[2],0));}
  assert.equal(E.kruskal(4,edges).weight,best);
 }
 assert.equal(E.kruskal(4,[[0,1,-3]]).connected,false);
});
test('all 512 small bipartite graphs satisfy Hall and matching-cover duality',()=>{
 for(let mask=0;mask<512;mask++){
  const a=Array.from({length:3},(_,i)=>Array.from({length:3},(_,j)=>Boolean(mask&(1<<(i*3+j))))),r=E.matching(a);
  assert.equal(r.pairs.length,r.cover.length);assert.equal(r.pairs.length===3,r.hall===null);
  const covered=new Set(r.cover);for(let i=0;i<3;i++)for(let j=0;j<3;j++)if(a[i][j])assert.ok(covered.has('L'+i)||covered.has('R'+j));
 }
});
test('congruences and toy RSA include non-coprime messages',()=>{
 assert.deepEqual(plain(E.congruence(8,4,6)),[2,5]);assert.deepEqual(plain(E.congruence(6,3,9)),[2,5,8]);assert.deepEqual(plain(E.congruence(2,1,4)),[]);
 for(let m=0;m<55;m++)assert.equal(E.modPow(E.modPow(m,3,55),27,55),m);
 assert.equal(E.inverse(3,40),27);assert.equal(E.inverse(2,6),null);assert.equal(E.phi(12),4);
});
