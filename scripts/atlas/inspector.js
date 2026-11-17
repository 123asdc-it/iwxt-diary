'use strict';
(()=>{
const routes=new Map(window.ATLAS_ROUTES.map(r=>[r.slug,r])),units=new Map(),names=new Map(window.ATLAS_DATA.map(t=>[t.slug,t.name]));
for(const r of routes.values())for(const stage of r.stages)stage.units.forEach((u,index)=>units.set(u.id,{...u,slug:r.slug,stage:stage.name,index,mode:stage.mode}));
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const list=xs=>'<ul>'+xs.map(x=>'<li>'+E(x)+'</li>').join('')+'</ul>';
let currentNode=null,shown=null,trail=[],closed=false,lastKey='',locate=()=>{};
function moduleOf(n){while(n&&n.depth>2)n=n.parent;return n?.depth===2?units.get(n.unitId):null;}
function ref(id,label){const u=units.get(id);return u?`<button class="dependency-ref" data-peek="${E(id)}">${E(label||u.title)} <small>${E(names.get(u.slug))}</small></button>`:'';}
function nextUnits(id){return [...units.values()].filter(u=>u.requires.some(d=>(d.anyOf||[d.id]).includes(id)));}
function required(u){return u.requires.length?u.requires.map(d=>`<div class="dependency-group ${d.anyOf?'alternative':''}"><div class="dependency-caption"><strong>${d.anyOf?'任选一项':'先学'}</strong><span>${E(d.depth)}</span></div>${(d.anyOf||[d.id]).map(id=>ref(id)).join('')}<p>${E(d.reason)}</p></div>`).join(''):'<p class="inspector-note">无额外模块前置。先按下面的内部顺序开始。</p>';}
function chain(u){const seen=new Set(),items=[];function walk(x){for(const d of x.requires){if(d.anyOf){items.push('<li>任选一条：'+d.anyOf.map(id=>ref(id)).join('')+'</li>');continue;}if(!seen.has(d.id)){seen.add(d.id);walk(units.get(d.id));items.push('<li>'+ref(d.id)+`<span class="inline-depth">${E(d.depth)}</span></li>`);}}}walk(u);return items.length?'<ol class="dependency-chain">'+items.join('')+'</ol>':'<p>可以从本模块开始。</p>';}
function context(n){let parts=[];while(n){parts.unshift(n.name);n=n.parent;}return parts.join(' › ');}
function render(){const box=document.getElementById('node-inspector');const u=units.get(shown),original=moduleOf(currentNode);const name=currentNode?.name||'';const key=[currentNode?.id,shown,trail.length,closed].join('|');if(key===lastKey)return;lastKey=key;
 const head=`<header class="inspector-head"><div><small>图中学习导航</small><h2>${E(u&&u.id!==original?.id?u.title:name)}</h2></div><button id="inspector-close" aria-label="收起学习导航">×</button></header>`;
 let content='';
 if(!u){const r=routes.get(currentNode?.topic?.slug);const candidates=currentNode?.depth===1?r?.stages.find(s=>s.name===currentNode.name)?.units:r?.stages[0]?.units;
 content=`<p class="inspector-note">${E(r?.summary||'选择一个方向或知识点，查看先修要求与学习顺序。')}</p>${r?`<section><h3>从这些模块开始</h3>${(candidates||[]).map(x=>ref(x.id)).join('')}</section><section><h3>学习入口</h3>${list(r.entry.map(x=>x.label+'：'+x.check))}</section><p class="inspector-note">${E(r.branching)}</p>`:''}`;
 }else{
 const downstream=nextUnits(u.id);const isPeek=u.id!==original?.id;
 content=`<div class="inspector-context">${isPeek?`正在查看前置或后续模块。原图仍停在「${E(name)}」。`:E(context(currentNode))}</div><p class="inspector-map-key">图中：橙色为先修 · 蓝灰为后续 · 虚线箭头为先修关系</p><div class="inspector-actions">${trail.length?'<button id="inspector-back">← 返回上一项</button>':''}${isPeek?'<button id="inspector-origin">回到所选知识点</button>':''}<button data-locate="${E(u.id)}">在图中定位此模块</button></div><p class="scope-note">${currentNode?.depth>2&&!isPeek?`「${E(name)}」沿用所属模块「${E(u.title)}」的先修与顺序。`:'以下为本模块学习要求。'}先修程度仅针对标注用途。</p><section class="inspector-prereqs"><h3>01　先学什么 <small>点击直接在这里查看</small></h3>${required(u)}<details><summary>把前置的前置也展开</summary>${chain(u)}</details></section><div class="dependency-flow">先修模块 <span>→</span> ${E(u.title)} <span>→</span> 后续应用</div><section><h3>02　模块内学习顺序</h3><ol class="inline-sequence">${u.sequence.map((s,i)=>`<li><b>${i+1}</b><span>${E(s)}</span></li>`).join('')}</ol><p class="inspector-note">${{sequence:'满足先修后，按模块内顺序推进。',parallel:'本阶段的模块满足各自先修后可以并行。',choose:'本阶段按目标选分支，无需全部完成。'}[u.mode]}</p></section><section><h3>03　中间要补的知识</h3><p class="inspector-note">${E(u.bridge.gap)}</p>${list(u.bridge.steps)}<details><summary>过渡自检</summary><p>${E(u.bridge.check)}</p></details></section><section><h3>04　学到什么程度</h3>${list(u.outcomes)}<details><summary>用一个小任务验收</summary><p>${E(u.checkpoint.task)}</p>${list(u.checkpoint.pass)}</details></section><section><h3>05　后续哪些模块会用到</h3><p class="inspector-note">下面是直接使用本模块的方向，按目标选择；不表示全部必修。</p>${downstream.length?downstream.map(x=>ref(x.id)).join(''):'<p>没有额外登记的直接后续模块，可用上面的任务收尾。</p>'}</section>`;
 }
 box.innerHTML=head+(u?'<nav class="inspector-tabs" aria-label="学习导航内容">'+['先修','顺序','过渡','达标','后续'].map((name,i)=>`<button data-section="${i}">${name}</button>`).join('')+'</nav>':'')+`<div class="inspector-scroll">${content}</div>`;
 document.getElementById('inspector-close').onclick=()=>{closed=true;updateVisibility();document.getElementById('learn-node').focus();};
 box.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>box.querySelectorAll('.inspector-scroll>section')[Number(b.dataset.section)]?.scrollIntoView({block:'start'}));
 box.querySelectorAll('[data-peek]').forEach(b=>b.onclick=()=>{if(shown)trail.push(shown);shown=b.dataset.peek;render();box.querySelector('.inspector-scroll').scrollTop=0;});
 box.querySelectorAll('[data-locate]').forEach(b=>b.onclick=()=>locate(b.dataset.locate));
 const back=document.getElementById('inspector-back');if(back)back.onclick=()=>{shown=trail.pop();render();};
 const origin=document.getElementById('inspector-origin');if(origin)origin.onclick=()=>{shown=original?.id;trail=[];render();};
}
function updateVisibility(){const visible=!!currentNode&&!closed&&!document.body.classList.contains('route-mode');document.body.classList.toggle('inspector-open',visible);document.getElementById('node-inspector').hidden=!visible;document.getElementById('learn-node').setAttribute('aria-expanded',String(visible));}
window.AtlasInspector={
 init(fn){locate=fn;for(const t of window.ATLAS_DATA)for(const s of t.children)for(const n of s.children)n.unitId=[...units.values()].find(u=>u.slug===t.slug&&u.stage===s.name&&u.title===n.name)?.id;},
 sync(n){if(n!==currentNode){currentNode=n;shown=moduleOf(n)?.id;trail=[];closed=false;lastKey='';}updateVisibility();if(n&&!closed)render();},
 show(n){closed=false;lastKey='';this.sync(n);},
 unit(id){return units.get(id);},
 relations(n){const u=moduleOf(n);return {id:u?.id,prior:u?u.requires.flatMap(d=>(d.anyOf||[d.id]).map(id=>({id,optional:!!d.anyOf}))):[],next:u?nextUnits(u.id).map(x=>x.id):[]};},
 moduleOf,
 clear(){currentNode=null;shown=null;trail=[];closed=false;lastKey='';updateVisibility();}
};
})();
