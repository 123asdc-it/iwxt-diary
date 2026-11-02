import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
import relift from '../scripts/tutorials/geometry-papers/relift.mjs';
import hexels from '../scripts/tutorials/geometry-papers/hexels.mjs';
import {buildGeometryPapers} from '../scripts/tutorials/geometry-papers/build.mjs';
const root=new URL('../',import.meta.url),source=readFileSync(new URL('scripts/tutorials/geometry-papers/math.js',root),'utf8'),M=vm.runInNewContext(source+'\nGeometryMath;');
const near=(a,b,e=1e-9)=>assert.ok(Math.abs(a-b)<e,`${a} != ${b}`),vector=(a,b)=>a.forEach((x,i)=>near(x,b[i]));
test('optical z-depth and ray range stay distinct, and lifting/projecting agrees across camera poses',()=>{
 const r=M.lift(420,240,4);vector(r.q,[.25,0,1]);vector(r.camera,[1,0,4]);near(r.range,Math.sqrt(17));near(M.norm(r.direction),1);vector(r.point,M.add([0,0,0],M.mul(r.direction,r.range)));
 for(const angle of [-60,-20,0,35,70])for(const u of [120,320,500])for(const v of [100,240,360]){const o=[.7,-.2,1],p=M.lift(u,v,5,450,430,320,240,angle,o),t=angle*Math.PI/180,q=[(u-320)/450,(v-240)/430,1],expected=[o[0]+5*(Math.cos(t)*q[0]+Math.sin(t)),o[1]+5*q[1],o[2]+5*(-Math.sin(t)*q[0]+Math.cos(t))];vector(p.point,expected);const back=M.project(p.point,450,430,320,240,angle,o);near(back.u,u);near(back.v,v);near(back.z,5);}
 assert.ok(M.mul(r.direction,4)[2]<4);assert.throws(()=>M.lift(320,240,0));
});
test('gap initialization preserves observations, interpolates in 3D and holds after the last observation',()=>{
 const points=[[0,0,4],[99,99,99],[99,99,99],[6,3,7],[99,99,99]],mask=[true,false,false,true,false],r=M.initialize(points,mask);vector(r.points[0],points[0]);vector(r.points[1],[2,1,5]);vector(r.points[2],[4,2,6]);vector(r.points[4],points[3]);assert.equal(JSON.stringify(r.gaps),JSON.stringify([0,1,1,0,1]));assert.throws(()=>M.initialize(points,[false,false,false,true,false]));
 const obs=M.observations(),correct=M.initialize(obs.raw,obs.mask);const t=obs.mask.findIndex(x=>!x),tok=M.token(obs.raw,obs.mask,t,4.5);assert.equal(tok.values.length,14);vector(tok.fields[1],[0,0,0]);vector(tok.fields[4],[0,0,0]);assert.equal(tok.available,0);assert.ok(tok.fields[0].some(x=>x!==0));vector(tok.initialized,correct.points[t]);vector(M.residual([1,2,3],[.1,0,-.2],5),[1.5,2,2]);
});
test('the explicitly artificial shared-motion rule succeeds only under its motion assumption',()=>{
 const clean=M.trajectory(),neighbor=M.trajectory(1),mask=[true,true,false,false,false,true,true,true],init=M.initialize(clean,mask).points;
 const borrowed=M.borrowedMotion(init,neighbor,mask);for(let t=0;t<8;t++)vector(borrowed[t],clean[t]);
 const wrong=neighbor.map(p=>[-p[0],p[1],p[2]]),bad=M.borrowedMotion(init,wrong,mask);assert.ok(M.norm(M.sub(bad[3],clean[3]))>.1);assert.equal(M.attentionCost(4,12).factored,84);assert.equal(M.attentionCost(4,12).joint,144);assert.equal(M.attentionCost(1024,84).N,21);
});
test('soft hexagonal support has invariant half contour, correct tails and sixfold symmetry',()=>{
 for(const beta of [.5,2,8,32]){for(const [u,v]of M.hexVertices()){near(M.hexBoundary(u,v).d,0);near(M.hexSupport(u,v,beta),.5);}near(M.hexSupport(0,0,beta),1/(1+Math.exp(-beta)));assert.ok(M.hexSupport(0,0,beta)<1);}
 for(let i=-15;i<=15;i++)for(let j=-15;j<=15;j++){const u=i/10,v=j/10,t=Math.PI/3,ur=u*Math.cos(t)-v*Math.sin(t),vr=u*Math.sin(t)+v*Math.cos(t);near(M.hexSupport(u,v,4),M.hexSupport(ur,vr,4));const K=M.hexSupport(u,v,4);assert.ok(K>=0&&K<=1);}
 assert.ok(M.hexSupport(0,.5,32)>M.hexSupport(0,.5,2));assert.ok(M.hexSupport(0,1.5,32)<M.hexSupport(0,1.5,2));
});
test('local surface mapping and perspective ray-plane intersection recover original coordinates',()=>{
 for(const angle of [-55,0,50])for(const su of [.5,1.2])for(const sv of [.7,1.5])for(const u of [-.7,0,.8])for(const v of [-.5,.5]){const f=M.frame(angle,[.2,-.1,4],su,sv),point=M.localPoint(f,u,v),ray=M.unit(point),hit=M.intersect([0,0,0],ray,f);assert.ok(hit);vector(hit.point,point);near(hit.u,u);near(hit.v,v);near(M.dot(f.tu,f.normal),0);near(M.dot(f.tv,f.normal),0);}
 assert.equal(M.intersect([0,0,0],[1,0,0],M.frame()),null);assert.equal(M.intersect([0,0,0],[0,0,-1],M.frame()),null);
 vector(M.spatialColor(.5,-.5,[.4,.5,.6],[.2,0,0],[0,0,.2]),[.5,.5,.5]);assert.ok(M.spatialColor(10,0)[0]>1);assert.equal(M.displayColor([1.2,-.1,.5]).join(','),'255,0,128');
});
test('front-to-back blending conserves total weight and keeps parameter memory separate from training VRAM',()=>{
 const r=M.composite([{alpha:.6,color:[1,0,0]},{alpha:.5,color:[0,0,1]}]);vector(r.weights,[.6,.2]);near(r.remaining,.2);vector(r.color,[.8,.2,.4]);near(r.weights.reduce((a,b)=>a+b,0)+r.remaining,1);near(M.alpha(1,1),.99);
 assert.equal(M.parameterBytes('V1',1000000).bytes,80000000);assert.equal(M.parameterBytes('V2',1000000).bytes,116000000);assert.equal(M.parameterBytes('V3',1000000).bytes,260000000);assert.equal(M.parameterBytes('2DGS',1000000).bytes,232000000);assert.ok(M.parameterBytes('V3',1).bytes>M.parameterBytes('2DGS',1).bytes);
 near(M.approximation(.5,0).linearMSE,0);assert.ok(M.approximation(1,.5).linearMSE>M.approximation(.3,.5).linearMSE);near(M.psnr(.01),20);
});
test('paper reports retain configurations, units, unfavorable native cases and local source references',()=>{
 assert.equal(relift.chapters.length,10);assert.equal(hexels.chapters.length,10);
 for(const d of [relift,hexels]){assert.equal(new Set(d.chapters.map(c=>c.id)).size,10);for(const c of d.chapters){assert.ok(c.read.length>=3);assert.ok(c.formula);assert.ok(c.quiz.options[c.quiz.correct]);for(const id of c.terms)assert.ok(d.glossary[id]);}}
 const rows=hexels.evidence.rows;assert.equal(rows.length,30);for(const r of rows){assert.equal(r.table,{memory:2,primitive:3,native:4}[r.regime]);assert.ok(r.psnr>0&&r.vram>0&&r.fps>0);if(r.regime==='memory')assert.equal(r.deploy,null);}
 const find=(regime,method)=>rows.find(r=>r.regime===regime&&r.dataset==='mip'&&r.method===method);
 assert.equal(find('memory','Hexels V1-F').vram,.9);assert.equal(find('primitive','Hexels V1-F').vram,.7);assert.ok(find('native','Hexels V3-G').vram>find('native','2DGS').vram);assert.ok(find('native','Hexels V3-G').psnr<find('native','2DGS').psnr);
 const c=relift.evidence.configurations;near(c[3].all-c[0].all,2.07);near(c[3].dyn-c[0].dyn,5.35);near(84/c[1].time,11.506849315068493);
});
test('all interactive views render through every step and every allowed select value',()=>{
 const F=vm.runInNewContext(source+'\n'+readFileSync(new URL('scripts/tutorials/geometry-papers/figures.js',root),'utf8')+'\nGeometryFigures;');
 for(const d of [relift,hexels])for(const c of d.chapters){const state=F.fresh(c.model);for(let step=0;step<F.frameCount(c.model);step++){state.step=step;const r=F.render(c.model,state,d);assert.ok(r.title);assert.doesNotMatch(r.html,/NaN|undefined/);}
  for(const field of F.schema[c.model])if(field.options){for(const [value]of field.options){state.values[field.name]=value;assert.doesNotMatch(F.render(c.model,state,d).html,/NaN|undefined/);}}
 }
});
test('generated offline pages contain matching runtime, source data and unique accessible identifiers and regenerate identically',async()=>{
 await buildGeometryPapers();const snapshots=[];
 for(const d of [relift,hexels]){const file=new URL('public/tutorials/'+d.slug+'/index.html',root),html=readFileSync(file,'utf8');snapshots.push([file,html]);assert.equal((html.match(/class="gp-chapter"/g)||[]).length,10);assert.equal((html.match(/class="gp-quiz"/g)||[]).length,10);
  assert.doesNotMatch(html,/<input[^>]*\bchecked\b/);assert.doesNotMatch(html,/<script[^>]+src=|fetch\(['"]https:|localStorage\./);const ids=[...html.split('<script')[0].matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
  const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)];assert.equal(scripts.length,4);assert.equal(scripts[1][1],source);scripts.slice(1).forEach(s=>new vm.Script(s[1]));assert.equal(JSON.parse(scripts[0][1]).chapters.length,10);assert.match(html,/data:image\/svg\+xml/);
 }
 await buildGeometryPapers();for(const [file,html]of snapshots)assert.equal(readFileSync(file,'utf8'),html);
});
