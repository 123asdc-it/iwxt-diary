import {readFile,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const here=new URL('./',import.meta.url),draft=process.argv.includes('--draft');
const catalog=JSON.parse(await readFile(new URL('point-catalog.json',here),'utf8')),byId=new Map(catalog.map(n=>[n.id,n]));
let input;try{input=JSON.parse(await readFile(new URL('point-rules.json',here),'utf8'));}catch(e){if(!draft)throw e;input={records:[],containers:[],sources:[]};}
const explicit=new Map(),containers=new Set(input.containers||[]);
for(const r of input.records){assert(byId.has(r.id),'Unknown rule '+r.id);assert(!explicit.has(r.id),'Duplicate rule '+r.id);explicit.set(r.id,r);}
const points={};let missing=[];
for(const n of catalog){if(n.depth<3)continue;const e=explicit.get(n.id);
 if(containers.has(n.id)){points[n.id]={kind:'category',requires:[],recommended:[],note:'用于整理子主题的分类，不作为先修知识。'};continue;}
 if(e){points[n.id]={...e,id:undefined,kind:'knowledge',origin:'explicit'};continue;}
 if(n.depth===3){missing.push(n.id);points[n.id]={kind:'knowledge',requires:[],recommended:[],note:'待完成知识点规则',origin:'draft'};continue;}
 let p=byId.get(n.parent);while(p&&containers.has(p.id))p=byId.get(p.parent);
 if(!p||p.depth<3){missing.push(n.id);points[n.id]={kind:'knowledge',requires:[],recommended:[],note:'待核查分类下的独立知识点',origin:'draft'};continue;}
 points[n.id]={kind:'knowledge',origin:'concept',requires:[{id:p.id,depth:'理解',scope:'基本含义',reason:`先认清「${p.name}」的基本对象与术语，再理解「${n.name}」在其中的作用。`}],recommended:[],note:'这里只要求父概念的基本含义，不要求先学完它的全部细项。'};
}
if(!draft)assert(!missing.length,'Unreviewed entries: '+missing.map(id=>byId.get(id).path.join(' / ')).join('\n'));
let links=0;const allowed=['认识','理解','会用','能实现'];
for(const [id,p]of Object.entries(points)){
 for(const d of p.requires){assert(allowed.includes(d.depth),'Invalid depth '+id);assert(d.reason,'Missing reason '+id);for(const dep of d.anyOf||[d.id]){assert(dep!==id,'Self dependency '+id);assert(points[dep]?.kind==='knowledge','Non-knowledge dependency '+id+' -> '+dep);links++;}}
 for(const d of p.recommended||[])assert(points[d.id]?.kind==='knowledge','Invalid recommendation '+id+' -> '+d.id);
}
const active=[],done=new Set();function visit(id){if(active.includes(id))throw Error('Cycle: '+[...active.slice(active.indexOf(id)),id].map(x=>byId.get(x).path.join(' / ')).join(' -> '));if(done.has(id))return;active.push(id);for(const d of points[id].requires)for(const other of d.anyOf||[d.id])visit(other);active.pop();done.add(id);}for(const id of Object.keys(points))visit(id);
const stats={knowledge:Object.values(points).filter(p=>p.kind==='knowledge').length,categories:Object.values(points).filter(p=>p.kind==='category').length,explicit:explicit.size,contextual:Object.values(points).filter(p=>p.origin==='concept').length,links,pending:missing.length};
await writeFile(new URL('point-data.json',here),JSON.stringify({version:1,ids:catalog.map(n=>n.id),points,sources:input.sources||[],stats},null,2)+'\n');console.log(JSON.stringify(stats));
