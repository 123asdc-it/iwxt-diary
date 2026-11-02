import {readFile} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {dataFor} from './catalog.mjs';
const dir=dirname(fileURLToPath(import.meta.url));
const begin='<!-- STUDY_FOUNDATIONS_START -->',end='<!-- STUDY_FOUNDATIONS_END -->';
export function stripFoundations(html){return html.replace(/<!-- STUDY_FOUNDATIONS_START -->[\s\S]*?<!-- STUDY_FOUNDATIONS_END -->\n?/g,'');}
let cached;
async function sources(){return cached??=(async()=>Object.fromEntries(await Promise.all(['style.css','math.js','figures.js','ui.js'].map(async name=>[name,await readFile(resolve(dir,name),'utf8')]))))();}
function chart(title,rows,max,unit){return `<figure class="sf-root sf-mita-figure"><figcaption>${title}</figcaption>${rows.map(([name,value])=>`<div class="sf-bar-row"><span>${name}</span><div class="sf-bar-track"><div class="sf-bar" style="width:${value/max*100}%"></div></div><strong>${value}${unit}</strong></div>`).join('')}<p class="sf-model-note">条长从0开始；这是固定版本论文报告值的重新绘制，非本页运行测量。</p></figure>`;}
export async function enhanceTutorial(slug,input){
 const source=await sources(),data=dataFor(slug);let html=stripFoundations(input);
 const parts=['math.js','figures.js'].map(name=>`<script id="sf-${name.split('.')[0]}">\n${source[name]}\n</script>`).join('\n');
 if(slug==='mita-attention'){
  html=await readFile(resolve(dir,'mita-base.html'),'utf8');
  html=html.replace('MiTA 注意力 · 论文交互教程','从零理解Transformer与MiTA · 交互教程').replace('MiTA · 从公式到一次计算','MiTA · 从零基础到一次完整计算');
  html=html.replace('class="brand" href="#why"', 'class="brand" href="#start"');
  const nav=html.indexOf('id="chapters"'),position=html.indexOf('>',nav)+1;
  if(nav<0)throw Error('MiTA导航结构变化');
  html=html.slice(0,position)+'<a class="nav-link" href="#start"><span>00</span>从零开始：Transformer与KV Cache</a>'+html.slice(position);
  const start=`<section class="chapter" id="start" aria-labelledby="title-start"><p class="caption">从零基础开始 · 22个概念循序连接</p><h1 id="title-start">先看懂Transformer，<br>再读MiTA为什么这样改。</h1><p class="lead">从基本加减乘除开始。文字怎样变成数字，Q/K/V怎样产生，注意力怎样混合信息，生成时为什么缓存KV，都在这里用具体例子和图解接起来。</p><p>每次展开一个概念；不熟的前提可点开补充，理解后再往下读。已有基础可以<a href="#why">直接进入论文主线</a>。KV Cache是理解生成的背景；MiTA v6并未验证大语言模型（LLM）的解码，不能把两者的作用混为一谈。</p><div id="sf-inline"></div><footer class="chapter-footer"><span></span><a class="primary" href="#why">进入MiTA论文主线 →</a></footer></section>`;
  html=html.replace('<section class="chapter" id="why"',start+'<section class="chapter" id="why"');
  html=html.replaceAll(/第 (\d) \/ 8 章/g,(_,n)=>`第 ${+n+1} / 9 章`);
  html=html.replace("ids=['why','fast','design','method','lab','cost','evidence','read']", "ids=['start','why','fast','design','method','lab','cost','evidence','read']").replace("active=ids.includes(id)?id:'why'", "active=ids.includes(id)?id:'start'").replace("${ids.indexOf(active)+1} / 8", "${ids.indexOf(active)+1} / 9");
  html=html.replace('<script id="mita-math">',begin+'\n'+parts+'\n'+end+'\n<script id="mita-math">');
  html=html.replace("$('#mita-result').innerHTML=`<p", "$('#mita-result').innerHTML=StudyFoundationsFigures.mita(step,m,k,i,e,r)+`<p");
  html=html.replace("$('#dense-result').innerHTML=formula(", "$('#dense-result').innerHTML='<div class=\"sf-root sf-mita-figure\"><h3>当前query怎样分配读取份额</h3>'+r.weights.map((w,j)=>'<div class=\"sf-bar-row\"><span>原始KV '+j+'</span><div class=\"sf-bar-track\"><div class=\"sf-bar\" style=\"width:'+w*100+'%\"></div></div><strong>'+(w*100).toFixed(2)+'%</strong></div>').join('')+'</div>'+formula(");
  html=html.replace('href="#why">回到开头','href="#start">回到开头');
  const methodMap=`<div class="sf-root sf-mita-figure"><h2>六个动作，点击一个就看那一步的数值图</h2><ol class="sf-flow sf-vertical-flow">${['每个位置已有Q/K/V','把Q汇聚成少量landmark','代表查全库，选原始top-k候选','全部V参与共享摘要','当前query选择复用的候选组','摘要与原件共同分配权重'].map((name,i)=>`<li><button type="button" data-mita-jump="${i}"><span>${i+1}</span><strong>${name}</strong></button></li>`).join('')}</ol></div>`;
  html=html.replace('<h2>为什么不能把两边输出直接相加</h2>',methodMap+'<h2>为什么不能把两边输出直接相加</h2>');
  html=html.replace(' dense();render();cost();route();',` document.querySelectorAll('[data-mita-jump]').forEach(b=>b.onclick=()=>{step=+b.dataset.mitaJump;render();location.hash='lab';});\n dense();render();cost();route();`);
  for(const [label,graphic]of [
   ['表2选摘',chart('分类Top-1：纯MiTA与附加组件分别比较',[['Tiny dense',72.2],['Tiny MiTA',71.1],['Tiny +DWC',73.4],['Small dense',79.9],['Small MiTA',79.8],['Small +DWC',80.6]],100,'%')],
   ['图5吞吐选摘',chart('合成长序列：相对dense的报告吞吐倍数',[['16K长度',4.7],['64K长度',19],['256K长度',56],['1024K长度',159]],159,'×')],
  ]){const marker=`<div class="table-wrap" tabindex="0" aria-label="${label}">`;html=html.replace(marker,graphic+marker);}
 }
 const tail=begin+`\n<style id="sf-style">${source['style.css']}</style>\n<script id="sf-data" type="application/json">${JSON.stringify(data).replaceAll('<','\\u003c')}</script>\n${slug==='mita-attention'?'':parts}\n<script id="sf-ui">\n${source['ui.js']}\n</script>\n`+end+'\n';
 return html.replace('</body>',tail+'</body>');
}
