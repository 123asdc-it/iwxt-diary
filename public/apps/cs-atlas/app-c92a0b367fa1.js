'use strict';
(()=>{
const $=id=>document.getElementById(id),NS='http://www.w3.org/2000/svg',GAP=28;
const DATA=window.ATLAS_DATA;if(!Array.isArray(DATA)||!DATA.length){$('loading').textContent='图谱数据未载入，请刷新页面。';return;}
let immersive=new URLSearchParams(location.search).get('fullscreen')==='1';document.body.classList.toggle('immersive',immersive);
let layoutMode=['tree','columns','route'].includes(new URLSearchParams(location.search).get('layout'))?new URLSearchParams(location.search).get('layout'):'route';
const measure=document.createElement('canvas').getContext('2d');
let serial=0;const all=[],byId=new Map(),topics=new Map();
function register(n,parent=null,topic=n,depth=0){n.id='k'+serial++;n.parent=parent;n.topic=topic;n.depth=depth;n.children=n.children||[];all.push(n);byId.set(n.id,n);n.children.forEach(c=>register(c,n,topic,depth+1));n.total=1+n.children.reduce((s,c)=>s+c.total,0);}
DATA.forEach(t=>{register(t);topics.set(t.slug,t);});
const overview={name:'计算机知识全景',slug:'overview',group:'总览',children:[
{name:'01 · 基础与专业主干',children:DATA.filter(t=>t.group==='基础与主干').map(t=>({name:t.name,jump:t.slug}))},
{name:'02 · 工程与研究方向',children:DATA.filter(t=>t.group==='工程与研究').map(t=>({name:t.name,jump:t.slug}))},
{name:'03 · 安全与 CTF',children:DATA.filter(t=>t.group==='安全与 CTF').map(t=>({name:t.name,jump:t.slug}))}
]};register(overview);topics.set('overview',overview);
let topic=overview,focusRoot=overview,selected=null,expanded=new Set(),positions=new Map(),visible=[],edges=[];
let view={x:0,y:0,k:1},bounds={width:1,height:1};
const states=new Map(),storageKey='cs-atlas-v1';let saved={};try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}');}catch{}
function path(n){const p=[];while(n){p.unshift(n.name);n=n.parent;}return p;}
function persist(){try{localStorage.setItem(storageKey,JSON.stringify({slug:topic.slug}));}catch{}}
function el(tag,attrs={}){const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));return e;}
function text(e,value){e.textContent=value;return e;}
function addNav(t,num){const b=document.createElement('button');b.className='nav-item';b.dataset.slug=t.slug;b.type='button';const ix=document.createElement('span');ix.className='nav-number';ix.textContent=num;const name=document.createElement('span');name.textContent=t.name;const count=document.createElement('span');count.className='num';count.textContent=t===overview?'ALL':t.total-1;b.append(ix,name,count);b.onclick=()=>selectTopic(t.slug);$('directions').append(b);}
addNav(overview,'◎');let ix=1;['基础与主干','工程与研究','安全与 CTF'].forEach(group=>{const h=document.createElement('div');h.className='nav-section';h.textContent=group;$('directions').append(h);DATA.filter(t=>t.group===group).forEach(t=>addNav(t,String(ix++).padStart(2,'0')));});
$('total-count').textContent=`${DATA.length} 个方向 · ${DATA.reduce((s,t)=>s+t.total-1,0).toLocaleString()} 个知识节点`;
function openToDepth(level){$('depth').value=String(level);expanded=new Set();function walk(n,d){if(n.children.length&&(level==='all'||d<Number(level))){expanded.add(n.id);n.children.forEach(c=>walk(c,d+1));}}walk(focusRoot,0);}
function selectTopic(slug){window.AtlasLearning.selectTopic(slug);if(states.has(topic.slug)||visible.length)states.set(topic.slug,{expanded:new Set(expanded),focus:focusRoot,selected});topic=topics.get(slug)||overview;focusRoot=topic;selected=null;const old=states.get(topic.slug);if(old){expanded=new Set(old.expanded);focusRoot=old.focus;selected=old.selected;}else openToDepth(1);$('sidebar').classList.remove('open');document.querySelectorAll('.nav-item').forEach(b=>{b.classList.toggle('active',b.dataset.slug===topic.slug);if(b.dataset.slug===topic.slug)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});$('topic-title').textContent=topic.name;$('topic-category').textContent=topic===overview?'A MAP FOR YOUR NEXT STEP':topic.group+' / LEARNING PATH';$('topic-meta').textContent=topic===overview?'27 个方向：先看学习路线，再用知识树展开细节。':`${topic.total-1} 个知识节点 · 路线标注前置与验收 · 知识树连线表示归属`;$('depth').value='1';persist();render(true);}
function metrics(n){
 const font=n.children.length||n===focusRoot?14:13.5;measure.font=`${font}px "PingFang SC","Microsoft YaHei",sans-serif`;
 const ls=[];let line='';for(const ch of n.name){if(line&&measure.measureText(line+ch).width>180){ls.push(line);line='';}line+=ch;}if(line)ls.push(line);
 return {ls,w:Math.max(65,...ls.map(l=>measure.measureText(l).width))+24+(n.children.length||n.jump?24:0),h:Math.max(28,ls.length*17+12)};
}
function layout(){
 visible=[];edges=[];positions=new Map();const sizes=new Map();
 function size(n){const m=metrics(n),cs=expanded.has(n.id)?n.children:[];const height=Math.max(m.h,cs.reduce((sum,c)=>sum+size(c),0)+Math.max(0,cs.length-1)*5);sizes.set(n.id,{...m,height});return height;}
 size(focusRoot);
 function place(n,x,y,side=1){const m=sizes.get(n.id),cs=expanded.has(n.id)?n.children:[];positions.set(n.id,{x,y:y+(m.height-m.h)/2,w:m.w,h:m.h,ls:m.ls,side});visible.push(n);let cy=y;for(const c of cs){edges.push([n,c]);place(c,side===1?x+m.w+GAP:x-GAP-sizes.get(c.id).w,cy,side);cy+=sizes.get(c.id).height+5;}}
 const roots=expanded.has(focusRoot.id)?focusRoot.children:[];
 if(roots.length>=4){
  const total=roots.reduce((sum,c)=>sum+sizes.get(c.id).height+5,0);let cut=1,acc=0,best=Infinity;
  for(let i=1;i<roots.length;i++){acc+=sizes.get(roots[i-1].id).height+5;const diff=Math.abs(total-2*acc);if(diff<best){best=diff;cut=i;}}
  const sides=[roots.slice(0,cut),roots.slice(cut)],heights=sides.map(cs=>cs.reduce((sum,c)=>sum+sizes.get(c.id).height+5,0)-5),height=Math.max(...heights),m=sizes.get(focusRoot.id);
  positions.set(focusRoot.id,{x:0,y:(height-m.h)/2,w:m.w,h:m.h,ls:m.ls,side:1});visible.push(focusRoot);
  sides.forEach((cs,i)=>{let y=(height-heights[i])/2;const side=i===0?-1:1;for(const c of cs){edges.push([focusRoot,c]);place(c,side===1?m.w+GAP:-GAP-sizes.get(c.id).w,y,side);y+=sizes.get(c.id).height+5;}});
 }else place(focusRoot,0,0);
 const minX=Math.min(...[...positions.values()].map(p=>p.x));for(const p of positions.values())p.x-=minX;
 bounds={width:Math.max(...[...positions.values()].map(p=>p.x+p.w)),height:Math.max(...[...positions.values()].map(p=>p.y+p.h))};
}
function renderReading(){
 const box=$('reading'),scroll=box.scrollTop;box.replaceChildren();
 const header=document.createElement('div');header.className='reading-title';header.textContent=focusRoot.name;box.append(header);
 const grid=document.createElement('div');grid.className='reading-grid';box.append(grid);
 function item(n,host,isHeading=false){
  const wrap=document.createElement('div');wrap.className='reading-item';
  const btn=document.createElement('button');btn.type='button';btn.className='reading-node'+(n===selected?' selected':'')+(isHeading?' reading-heading':'');btn.dataset.nodeId=n.id;
  const mark=document.createElement('span');mark.className='reading-toggle';mark.textContent=n.jump?'↗':n.children.length?expanded.has(n.id)?'−':'+':'·';
  const name=document.createElement('span');name.className='reading-name';name.textContent=n.name;btn.append(mark,name);
  if(n.children.length){btn.setAttribute('aria-expanded',expanded.has(n.id));const count=document.createElement('small');count.textContent=n.children.length;btn.append(count);}
  btn.onclick=()=>{if(n.jump){selectTopic(n.jump);return;}selected=n;if(n.children.length){if(expanded.has(n.id))expanded.delete(n.id);else expanded.add(n.id);}render(false);$('reading').querySelector(`[data-node-id="${n.id}"]`)?.focus({preventScroll:true});};wrap.append(btn);
  if(expanded.has(n.id)&&n.children.length){const kids=document.createElement('div');kids.className='reading-children';n.children.forEach(c=>item(c,kids));wrap.append(kids);}host.append(wrap);
 }
 const roots=expanded.has(focusRoot.id)&&focusRoot.children.length?focusRoot.children:[focusRoot];
 for(const n of roots){const card=document.createElement('section');card.className='reading-card';item(n,card,true);grid.append(card);}
 box.scrollTop=scroll;
}
function syncLayout(){$('export').textContent=layoutMode==='route'?'导出学习路线 ↗':'导出当前图谱 ↗';document.body.classList.toggle('route-mode',layoutMode==='route');$('learning').hidden=layoutMode!=='route';$('learn-node').disabled=!selected||topic===overview;document.body.classList.toggle('column-mode',layoutMode==='columns');$('layout-mode').value=layoutMode;$('reading').hidden=layoutMode!=='columns';}
function render(autoFit=false){layout();$('edges').replaceChildren();$('nodes').replaceChildren();for(const [a,b]of edges){const p=positions.get(a.id),q=positions.get(b.id);const x=q.side===-1?p.x:p.x+p.w,y=p.y+p.h/2,xx=q.side===-1?q.x+q.w:q.x,yy=q.y+q.h/2,m=(x+xx)/2;$('edges').append(el('path',{d:`M${x},${y} C${m},${y} ${m},${yy} ${xx},${yy}`,class:'edge'}));}
for(const n of visible){const p=positions.get(n.id);const g=el('g',{class:'node'+(!n.children.length&&!n.jump?' leaf':'')+(n===focusRoot?' root':n.parent===focusRoot?' stage':'')+(n===selected?' selected':''),transform:`translate(${p.x} ${p.y})`,role:'button',tabindex:'0','aria-label':n.name+(n.jump?'，进入方向':n.children.length?expanded.has(n.id)?'，收起分支':'，展开分支':'，知识点'),'data-node-id':n.id});if(n.children.length)g.setAttribute('aria-expanded',expanded.has(n.id));g.append(el('rect',{width:p.w,height:p.h,rx:4}));const ls=p.ls;const label=el('text',{x:10,y:(p.h-(ls.length-1)*17)/2+5});ls.forEach((line,i)=>label.append(text(el('tspan',{x:10,dy:i?17:0}),line)));g.append(label);if(n.jump||n.children.length)g.append(text(el('text',{x:p.w-20,y:p.h/2+5,class:'toggle'}),n.jump?'↗':expanded.has(n.id)?'−':'+'));g.append(text(el('title'),n.name+(n.children.length?' · '+n.children.length+' 个分支':'')));
const activate=()=>{if(n.jump){selectTopic(n.jump);return;}selected=n;const prior={...p};if(n.children.length){if(expanded.has(n.id))expanded.delete(n.id);else expanded.add(n.id);}render(false);const now=positions.get(n.id);view.x+=(prior.x-now.x)*view.k;view.y+=(prior.y-now.y)*view.k;apply();const current=$('nodes').querySelector(`[data-node-id="${n.id}"]`);current?.focus({preventScroll:true});};g.addEventListener('click',activate);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});$('nodes').append(g);}
syncLayout();if(layoutMode==='route')window.AtlasLearning.render(topic.slug);if(layoutMode==='columns'){renderReading();if(autoFit)$('reading').scrollTop=0;}$('loading').hidden=true;$('visible-count').textContent=`当前 ${visible.length} 个节点`;$('focus').disabled=!selected||!selected.children.length||selected===focusRoot;$('back').hidden=focusRoot===topic;$('parent').hidden=focusRoot===topic;$('selection').textContent=selected?path(selected).join(' › '):'点击节点展开，选择感兴趣的分支';if(layoutMode==='route'){$('visible-count').textContent=window.AtlasLearning.count(topic.slug);$('selection').textContent='先检查入口 → 补过渡知识 → 按序学习 → 用任务验收';}updateCrumb();updateUrl();if(autoFit)fit(true);else apply();}
function updateUrl(){const q=new URLSearchParams();q.set('topic',topic.slug);q.set('layout',layoutMode);q.set('depth',$('depth').value);if(layoutMode==='route'&&window.AtlasLearning.target)q.set('unit',window.AtlasLearning.target);if(immersive)q.set('fullscreen','1');if(focusRoot!==topic)q.set('path',path(focusRoot).slice(1).join(' / '));history.replaceState(null,'',location.pathname+'?'+q.toString());}
function updateCrumb(){$('breadcrumb').replaceChildren();const home=document.createElement('button');home.textContent='全部方向';home.onclick=()=>selectTopic('overview');$('breadcrumb').append(home);if(topic!==overview){const sep=document.createElement('span');sep.textContent='/';const b=document.createElement('button');b.textContent=topic.name;b.onclick=()=>{focusRoot=topic;openToDepth(1);render(true)};$('breadcrumb').append(sep,b);}if(focusRoot!==topic){const s=document.createElement('span');s.textContent='/ '+focusRoot.name;$('breadcrumb').append(s);}}
function apply(){$('viewport').setAttribute('transform',`translate(${view.x} ${view.y}) scale(${view.k})`);$('zoom-label').textContent=Math.round(view.k*100)+'%';}
function fit(readable=false){const r=$('canvas').getBoundingClientRect();view.k=Math.min(1.15,Math.max(.08,Math.min((r.width-90)/bounds.width,(r.height-110)/bounds.height)));if(readable)view.k=Math.max(.9,Math.min(1,view.k));view.x=bounds.width*view.k>r.width-50?28:(r.width-bounds.width*view.k)/2;view.y=bounds.height*view.k>r.height-120?80:(r.height-50-bounds.height*view.k)/2;apply();}
function zoom(factor,cx,cy){const r=$('canvas').getBoundingClientRect();cx=cx??r.width/2;cy=cy??r.height/2;const k=Math.min(2.5,Math.max(.08,view.k*factor));view.x=cx-(cx-view.x)*k/view.k;view.y=cy-(cy-view.y)*k/view.k;view.k=k;apply();}
$('zoom-in').onclick=()=>zoom(1.2);$('zoom-out').onclick=()=>zoom(1/1.2);$('fit').onclick=()=>fit();
$('learn-node').onclick=()=>{window.AtlasLearning.target=null;let n=selected;while(n&&n.depth>2)n=n.parent;if(n?.depth===2)window.AtlasLearning.target=window.AtlasLearning.findUnit(topic.slug,n.parent.name,n.name);layoutMode='route';render(true);};
$('layout-mode').onchange=()=>{layoutMode=$('layout-mode').value;if(layoutMode==='columns')openToDepth('all');render(true);};
$('depth').onchange=()=>{openToDepth($('depth').value);render(true)};
$('focus').onclick=()=>{if(!selected?.children.length)return;focusRoot=selected;openToDepth(1);render(true)};
$('parent').onclick=()=>{focusRoot=focusRoot.parent||topic;selected=focusRoot;openToDepth(1);render(true)};
$('back').onclick=()=>{focusRoot=topic;selected=null;openToDepth(1);render(true)};
const canvas=$('canvas'),map=$('map');canvas.addEventListener('wheel',e=>{if(layoutMode!=='tree')return;e.preventDefault();const r=canvas.getBoundingClientRect();zoom(Math.exp(-e.deltaY*.0015),e.clientX-r.left,e.clientY-r.top)},{passive:false});
let pointers=new Map(),drag=null,pinch=null,moved=false;
function distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
map.addEventListener('pointerdown',e=>{if(e.button!==0)return;const r=canvas.getBoundingClientRect();pointers.set(e.pointerId,{x:e.clientX-r.left,y:e.clientY-r.top});if(pointers.size===2){const [a,b]=[...pointers.values()];pinch={distance:distance(a,b),center:{x:(a.x+b.x)/2,y:(a.y+b.y)/2},view:{...view}};drag=null;map.setPointerCapture(e.pointerId);return;}if(e.target.closest('.node'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,vx:view.x,vy:view.y};moved=false;map.setPointerCapture(e.pointerId);canvas.classList.add('dragging');});
map.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;const r=canvas.getBoundingClientRect();pointers.set(e.pointerId,{x:e.clientX-r.left,y:e.clientY-r.top});if(pinch&&pointers.size===2){const [a,b]=[...pointers.values()],cx=(a.x+b.x)/2,cy=(a.y+b.y)/2;const k=Math.min(2.5,Math.max(.08,pinch.view.k*distance(a,b)/Math.max(pinch.distance,1)));view={k,x:cx-(pinch.center.x-pinch.view.x)*k/pinch.view.k,y:cy-(pinch.center.y-pinch.view.y)*k/pinch.view.k};moved=true;apply();return;}if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>3)moved=true;view.x=drag.vx+dx;view.y=drag.vy+dy;apply();});
function release(e){pointers.delete(e.pointerId);pinch=null;drag=null;canvas.classList.remove('dragging');}map.addEventListener('pointerup',release);map.addEventListener('pointercancel',release);
map.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false;}},true);
new ResizeObserver(()=>{if(visible.length)fit(true)}).observe(canvas);
const searchDialog=$('search-dialog');function searchOpen(){searchDialog.showModal();$('search-input').focus();search();}
$('search-launch').onclick=searchOpen;$('canvas-search').onclick=searchOpen;$('close-search').onclick=()=>searchDialog.close();document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();if(!searchDialog.open)searchOpen();}});
const indexed=all.filter(n=>n.topic!==overview);function search(){const q=$('search-input').value.trim().toLowerCase();const list=$('search-results');list.replaceChildren();if(!q){const p=document.createElement('div');p.className='result-info';p.textContent='搜索全部方向中的中文名称或英文缩写。';list.append(p);return;}const found=indexed.filter(n=>n.name.toLowerCase().includes(q));const info=document.createElement('div');info.className='result-info';info.textContent=`找到 ${found.length} 个结果`+(found.length>80?'，显示前 80 个':'');list.append(info);found.slice(0,80).forEach(n=>{const b=document.createElement('button');b.className='search-result';const title=document.createElement('span');title.textContent=n.name;const sub=document.createElement('small');sub.textContent=path(n).join(' › ');b.append(title,sub);b.onclick=()=>{selectTopic(n.topic.slug);selected=n;focusRoot=n.children.length?n:n.parent||n;openToDepth(1);if(layoutMode==='route'){let m=n;while(m.depth>2)m=m.parent;window.AtlasLearning.target=m.depth===2?window.AtlasLearning.findUnit(topic.slug,m.parent.name,m.name):null;}render(true);searchDialog.close();};list.append(b);});}$('search-input').addEventListener('input',search);
$('menu').onclick=()=>{const open=$('sidebar').classList.toggle('open');$('menu').setAttribute('aria-expanded',open);};document.addEventListener('pointerdown',e=>{if(!$('sidebar').contains(e.target)&&!$('menu').contains(e.target))$('sidebar').classList.remove('open')});
function showSources(){const box=$('sources-content');box.replaceChildren();const p=document.createElement('p');p.textContent='本图按学习用途重新组织参考资料，展示知识归属与建议学习阶段，不把所有连线视为严格先修关系。内容范围覆盖常见计算机本科主干和主要工程、研究、安全方向；不宣称穷尽全部子领域。';box.append(p);const audit=document.createElement('p');audit.textContent='学习路线另行检查了 27 个方向的 352 个模块：先修入口、需要达到的程度、过渡知识、模块内顺序与验收任务。知识点通过所属模块关联路线；不把 7,613 个叶子和中间节点都称作独立验证的课程。前置依赖已做引用与无环检查，教学安排仍可依据实际卡点修订。';box.append(audit);const note=document.createElement('p');note.textContent='基础分支可以并行学习；方向分支按兴趣选修。CTF 分类参考用户提供的 Web、Reverse 图，并继续细分机制、子类型、适用条件、实现方法与工具。历史技术标明适用范围。';box.append(note);const which=topic===overview?DATA:[topic];const seen=new Set();which.forEach(t=>{const sources=[...(t.sources||[]),...(window.AtlasLearning.sources(t.slug))].filter(s=>!seen.has(s.url));if(!sources.length)return;const h=document.createElement('h3');h.textContent=t.name;const ul=document.createElement('ul');sources.forEach(s=>{seen.add(s.url);const li=document.createElement('li'),a=document.createElement('a');a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=s.title;li.append(a);ul.append(li);});box.append(h,ul);});$('sources-dialog').showModal();}
$('sources-button').onclick=showSources;$('close-sources').onclick=()=>$('sources-dialog').close();for(const dialog of [searchDialog,$('sources-dialog')])dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
$('export').onclick=()=>{if(layoutMode==='route'){window.AtlasLearning.export(topic.slug);return;}const svg=el('svg',{xmlns:NS,width:bounds.width+80,height:bounds.height+110,viewBox:`-40 -70 ${bounds.width+80} ${bounds.height+110}`});svg.append(el('rect',{x:-40,y:-70,width:bounds.width+80,height:bounds.height+110,fill:'#fffef9'}));const style=el('style');style.textContent='.edge{stroke:#bbcbbb;stroke-width:1.5;fill:none}.node rect{fill:#fffef9;stroke:#cdd7c8}.node text{font-family:PingFang SC,Microsoft YaHei,sans-serif;fill:#294038;font-size:13px}.node .hint{font-size:10px;fill:#7e8c7e}.node .toggle{font-size:16px}.node.stage rect{fill:#edf2e6}.node.root rect{fill:#184d3d}.node.root text{fill:#f6f6ed}.node.leaf rect{fill:transparent;stroke:transparent}.node.leaf text{font-size:13.5px}.node.selected rect{stroke:#bd863f;stroke-width:2.5}';svg.append(style,text(el('text',{x:0,y:-30,'font-family':'sans-serif','font-size':22,fill:'#184d3d'}),focusRoot.name),$('edges').cloneNode(true),$('nodes').cloneNode(true));svg.querySelectorAll('[tabindex]').forEach(n=>n.removeAttribute('tabindex'));const blob=new Blob([new XMLSerializer().serializeToString(svg)],{type:'image/svg+xml;charset=utf-8'}),a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=focusRoot.name+'-知识图谱.svg';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);};
function syncFullscreenControls(){
 $('fullscreen').textContent=immersive?'退出全屏看图':'全屏看图 ⛶';
 $('fullscreen').setAttribute('aria-pressed',String(immersive));
 $('native-fullscreen').hidden=!immersive||!!document.fullscreenElement||!document.documentElement.requestFullscreen;
}
function setImmersive(on){immersive=on;document.body.classList.toggle('immersive',on);syncFullscreenControls();updateUrl();}
async function nativeFullscreen(){try{await document.documentElement.requestFullscreen?.();}catch{}syncFullscreenControls();}
$('fullscreen').onclick=async()=>{if(immersive){setImmersive(false);if(document.fullscreenElement)try{await document.exitFullscreen();}catch{}}else{setImmersive(true);await nativeFullscreen();}};
$('native-fullscreen').onclick=nativeFullscreen;
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&immersive)setImmersive(false);else syncFullscreenControls();});
document.addEventListener('keydown',async e=>{if(e.key==='Escape'&&immersive&&!document.querySelector('dialog[open]')){setImmersive(false);if(document.fullscreenElement)try{await document.exitFullscreen();}catch{}}});
syncFullscreenControls();
document.querySelector('.brand').onclick=e=>{e.preventDefault();selectTopic('overview')};const initialQuery=new URLSearchParams(location.search);const initialSlug=initialQuery.get('topic');selectTopic(topics.has(initialSlug)?initialSlug:topics.has(saved.slug)?saved.slug:'overview');const wanted=initialQuery.get('path');if(wanted){const n=all.find(n=>n.topic===topic&&path(n).slice(1).join(' / ')===wanted);if(n){selected=n;focusRoot=n.children.length?n:n.parent||n;openToDepth(1);render(true);}}
const requestedDepth=initialQuery.get('depth');if(['1','2','3','4','5','6','all'].includes(requestedDepth)){openToDepth(requestedDepth);render(true);}else if(layoutMode==='columns'){openToDepth('all');render(true);}
})();
