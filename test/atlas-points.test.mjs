import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const read=name=>JSON.parse(readFileSync(new URL('../scripts/atlas/'+name,import.meta.url),'utf8'));
const catalog=read('point-catalog.json'),data=read('point-data.json'),rules=read('point-rules.json');
const byId=new Map(catalog.map(n=>[n.id,n])),points=data.points;

test('point IDs map to the actual knowledge tree in traversal order',()=>{
 const ctx={window:{}};vm.runInNewContext(readFileSync(new URL('../public/apps/cs-atlas/data-461bd0ba8ccc.js',import.meta.url),'utf8'),ctx);
 const paths=[];function walk(n,path=[]){const p=[...path,n.name];paths.push(p.join(' / '));for(const child of n.children||[])walk(child,p);}for(const t of ctx.window.ATLAS_DATA)walk(t);
 assert.deepEqual(catalog.map(n=>n.path.join(' / ')),paths);assert.deepEqual(data.ids,catalog.map(n=>n.id));assert.equal(new Set(data.ids).size,data.ids.length);
});

test('all concrete entries have point relationships without module prerequisites',()=>{
 const explicit=new Set(rules.records.map(r=>r.id));
 for(const n of catalog.filter(n=>n.depth>=3)){
  assert.ok(points[n.id],n.path.join('/'));assert.notEqual(points[n.id].origin,'draft');
  if(n.depth===3)assert.ok(explicit.has(n.id)||points[n.id].kind==='category');
  for(const d of points[n.id].requires)for(const id of d.anyOf||[d.id]){assert.ok(byId.get(id).depth>=3);assert.equal(points[id].kind,'knowledge');assert.notEqual(id,n.id);}
 }
 assert.equal(data.stats.pending,0);
});

test('global dependency graph is acyclic including alternative entrances',()=>{
 const done=new Set(),active=new Set();function visit(id){assert.ok(!active.has(id),'cycle at '+byId.get(id).path.join('/'));if(done.has(id))return;active.add(id);for(const d of points[id].requires)for(const other of d.anyOf||[d.id])visit(other);active.delete(id);done.add(id);}Object.keys(points).forEach(visit);
});

test('TLS details have distinct prerequisites rather than shared module requirements',()=>{
 const named=(slug,name)=>catalog.find(n=>n.slug===slug&&n.name===name);
 const deps=n=>points[n.id].requires.flatMap(d=>d.anyOf||[d.id]).map(id=>byId.get(id).name);
 assert.ok(deps(named('networks','key_share')).includes('密钥协商'));
 assert.ok(deps(named('networks','signature_algorithms')).includes('数字签名'));
 assert.ok(deps(named('networks','证书与 PKI')).includes('数字签名'));
 assert.notDeepEqual(deps(named('networks','key_share')),deps(named('networks','signature_algorithms')));
});

test('context edges require only basic meaning and classification nodes are not prerequisites',()=>{
 for(const p of Object.values(points)){
  if(p.origin==='concept'){assert.equal(p.requires.length,1);assert.equal(p.requires[0].scope,'基本含义');}
  if(p.kind==='category')assert.equal(p.requires.length,0);
 }
 assert.ok(Object.values(points).some(p=>p.requires.some(d=>d.anyOf?.length>1)));
});
