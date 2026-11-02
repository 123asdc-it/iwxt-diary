(()=>{
 'use strict';const data=JSON.parse(document.getElementById('gp-data').textContent),F=GeometryFigures,states=new Map(),quizzes=new Map();let index=0,timer=null,returnFocus=null;
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],dialog=$('#gp-glossary'),notice=$('#gp-notice');
 const state=i=>{if(!states.has(i))states.set(i,F.fresh(data.chapters[i].model));return states.get(i);};
 function stop(){clearInterval(timer);timer=null;$$('[data-action="play"]').forEach(b=>{b.textContent='播放';b.setAttribute('aria-pressed','false');});}
 function draw(){const c=data.chapters[index],root=$('#chapter-'+c.id),s=state(index),count=F.frameCount(c.model);s.step=Math.max(0,Math.min(count-1,s.step));
  try{const r=F.render(c.model,s,data);root.querySelector('.gp-display').innerHTML='<h3>'+F.esc(r.title)+'</h3>'+r.html;root.querySelector('.gp-error').textContent='';root.querySelector('.gp-step-count').textContent=(s.step+1)+' / '+count;root.querySelector('[data-action="prev-step"]').disabled=s.step===0;root.querySelector('[data-action="next-step"]').disabled=s.step===count-1;root.querySelector('[data-action="last-step"]').disabled=s.step===count-1;F.paint(root,c.model,s);
  }catch(error){stop();root.querySelector('.gp-error').textContent=error.message;}
 }
 function controls(){const c=data.chapters[index];$('#chapter-'+c.id+' .gp-controls').innerHTML=F.fields(c.model,state(index),'gp-'+c.id);}
 function go(id,focus=false){const i=data.chapters.findIndex(c=>c.id===id);index=i<0?0:i;stop();$$('.gp-chapter').forEach((c,j)=>c.hidden=j!==index);$$('.gp-nav a[data-chapter]').forEach((a,j)=>{if(j===index)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});controls();draw();$('#gp-prev').disabled=index===0;$('#gp-next').disabled=index===data.chapters.length-1;$('#gp-prev').textContent=index?'← '+data.chapters[index-1].title:'已到开头';$('#gp-next').textContent=index<data.chapters.length-1?data.chapters[index+1].title+' →':'已到结尾';
  $('.gp-nav').classList.remove('open');$('#gp-menu').setAttribute('aria-expanded','false');if(focus){const h=$('#chapter-'+data.chapters[index].id+' h2');h.focus();h.scrollIntoView({block:'start'});}
 }
 function route(id){if(location.hash.slice(1)===id)go(id,true);else location.hash=id;}
 window.addEventListener('hashchange',()=>go(decodeURIComponent(location.hash.slice(1)),true));
 document.addEventListener('change',event=>{const input=event.target.closest('[data-gp-field]');if(!input)return;const c=data.chapters[index],s=state(index),f=F.schema[c.model].find(f=>f.name===input.dataset.gpField);const option=f.options?.find(([v])=>String(v)===input.value);s.values[f.name]=f.options?option[0]:input.value.trim()===''?NaN:Number(input.value);if(c.model==='hexEvidence'&&['regime','dataset'].includes(f.name)){s.values.selected=0;if(s.values.regime==='memory'&&s.values.metric==='deploy'){s.values.metric='vram';controls();}}stop();draw();});
 document.addEventListener('click',async event=>{const target=event.target.closest('button,a');if(!target)return;
  if(target.dataset.chapter){event.preventDefault();route(target.dataset.chapter);return;}
  if(target.dataset.term){openGlossary(target.dataset.term,target);return;}
  if(target.dataset.goto){dialog.close();route(target.dataset.goto);return;}
  if(target.id==='gp-menu'){const open=$('.gp-nav').classList.toggle('open');target.setAttribute('aria-expanded',String(open));if(open)$('.gp-nav a[aria-current]').focus();return;}
  if(target.id==='gp-close'){dialog.close();return;}
  if(target.id==='gp-words'){openGlossary('',target);return;}
  if(target.id==='gp-prev'){route(data.chapters[index-1]?.id);return;}
  if(target.id==='gp-next'){route(data.chapters[index+1]?.id);return;}
  if(target.id==='gp-download'){stop();try{if(location.protocol==='file:'){notice.textContent='当前已经是可离线使用的完整HTML文件，可以直接复制保存。';return;}target.disabled=true;const response=await fetch(location.pathname);if(!response.ok)throw Error('下载未成功，请稍后重试');const blob=new Blob([await response.text()],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=data.title+'.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);notice.textContent='已下载完整HTML；断网后直接打开，所有教学图仍可操作。';}catch(e){notice.textContent=e.message;}finally{target.disabled=false;}return;}
  const s=state(index),c=data.chapters[index],last=F.frameCount(c.model)-1;
  if(target.dataset.gpStage!==undefined){stop();s.step=Math.min(last,+target.dataset.gpStage);draw();return;}
  if(target.dataset.gpMask!==undefined){stop();const t=+target.dataset.gpMask;if(t)s.values.mask[t]=!s.values.mask[t];draw();return;}
  if(target.dataset.gpCell){stop();[s.values.row,s.values.col]=target.dataset.gpCell.split(',').map(Number);draw();return;}
  if(target.dataset.gpReport!==undefined){s.values.selected=+target.dataset.gpReport;draw();return;}
  switch(target.dataset.action){case 'prev-step':stop();s.step--;draw();break;case 'next-step':stop();s.step++;draw();break;case 'last-step':stop();s.step=last;draw();break;case 'reset':stop();states.set(index,F.fresh(c.model));controls();draw();break;case 'play':if(timer){stop();break;}if(s.step>=last)s.step=0;draw();target.textContent='暂停';target.setAttribute('aria-pressed','true');timer=setInterval(()=>{if(s.step<last){s.step++;draw();}else stop();},1400);break;case 'quiz':{const root=target.closest('.gp-quiz'),selected=root.querySelector('input:checked'),feedback=root.querySelector('.gp-feedback');if(!selected){feedback.textContent='先选一个答案，再查看解释。';return;}const correct=+selected.value===c.quiz.correct;feedback.textContent=(correct?'这个判断正确。':'再回到图中比较一下。')+c.quiz.reason;quizzes.set(index,+selected.value);break;}}
 });
 document.addEventListener('pointerdown',event=>{const canvas=event.target.closest('canvas[data-gp-heat]');if(!canvas||!('u'in state(index).values))return;const rect=canvas.getBoundingClientRect(),s=state(index);s.values.u=Math.max(-1.6,Math.min(1.6,(event.clientX-rect.left)/rect.width*3.2-1.6));s.values.v=Math.max(-1.6,Math.min(1.6,1.6-(event.clientY-rect.top)/rect.height*3.2));s.values.u=+s.values.u.toFixed(2);s.values.v=+s.values.v.toFixed(2);stop();controls();draw();});
 function glossary(query=''){const q=query.trim().toLowerCase(),entries=Object.entries(data.glossary).filter(([key,a])=>[key,...a].join(' ').toLowerCase().includes(q));$('#gp-definitions').innerHTML=entries.length?entries.map(([key,a])=>'<article id="word-'+F.esc(key)+'"><h3>'+F.esc(a[0])+'</h3><p>'+F.esc(a[1])+'</p><button data-goto="'+F.esc(a[2])+'">到对应章节看图 →</button></article>').join(''):'<p>没有找到这个词。可试“深度”“颜色”或“坐标”。</p>';}
 function openGlossary(key,source){stop();returnFocus=source;$('#gp-word-search').value=key?data.glossary[key][0]:'';glossary($('#gp-word-search').value);dialog.showModal();$('#gp-word-search').focus();}
 $('#gp-word-search').addEventListener('input',e=>glossary(e.target.value));dialog.addEventListener('close',()=>{if(returnFocus?.isConnected&&!returnFocus.closest('[hidden]'))returnFocus.focus();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&dialog.open){e.preventDefault();dialog.close();return;}if(e.key==='Escape'&&$('.gp-nav').classList.contains('open')){$('.gp-nav').classList.remove('open');$('#gp-menu').setAttribute('aria-expanded','false');$('#gp-menu').focus();}});
 go(decodeURIComponent(location.hash.slice(1)));window.GeometryPaper={data,state:()=>state(index),go:id=>route(id),stop,get index(){return index;},render:draw};
})();
