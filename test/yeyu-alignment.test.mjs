import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
const root = fileURLToPath(new URL('../', import.meta.url));
const html=readFileSync(root+'public/tutorials/yeyu-practice/index.html','utf8');
const book=JSON.parse(html.match(/<script id="workbook-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
const source=JSON.parse(readFileSync(root+'scripts/tutorials/yeyu/aligned-solutions.json','utf8'));
const Q=new Map(book.questions.map(q=>[q.id,q]));

test('all 194 topic-question entries have their reviewed method and source pages',()=>{
 const expected=book.topics.flatMap(t=>t.questions.map(id=>`${t.id}/${id}`));
 assert.equal(expected.length,194);assert.equal(book.topics.length,179);assert.equal(Q.size,180);
 const actual=book.questions.flatMap(q=>Object.keys(q.answers).map(tid=>`${tid}/${q.id}`));
 assert.deepEqual(actual.sort(),expected.sort());
 for(const r of source.solutions){
  const a=Q.get(r.questionId).answers[r.topicId];
  assert.equal(a.text,r.solution);assert.equal(a.method,r.method);
  assert.deepEqual(a.notesPages,r.notesPages);assert.ok(a.notesPages.every(p=>p>=1&&p<=436));
  assert.ok(readFileSync(root+'public/tutorials/yeyu-practice/'+a.image).length>500);
 }
});

test('shared problem routes the answer and zoom to the current method',()=>{
 const functions=html.slice(html.indexOf('function answerFor('),html.indexOf('\nfunction qHtml('));
 const context={Q,escapeHtml:s=>s.replace(/[&<>"']/g,'_'),qLabel:id=>'Q'+Q.get(id).number};
 vm.createContext(context);vm.runInContext(functions+';this.getAnswer=answerHtml;',context);
 const id='q-14-514-546';
 const stolz=context.getAnswer(id,'t010'),stirling=context.getAnswer(id,'t027');
 assert.match(stolz,/Stolz/);assert.match(stirling,/斯特林/);
 assert.notEqual(Q.get(id).answers.t010.image,Q.get(id).answers.t027.image);
 assert.match(stolz,/data-answer-topic="t010"/);assert.match(stirling,/data-answer-topic="t027"/);
 assert.match(html,/answerHtml\(answerButton.dataset.answerQuestion,answerButton.dataset.answerTopic\)/);
 assert.match(html,/content=isAnswer\?answerFor\(id,z.dataset.answerTopic\):q/);
 // A question reused by three methods must have three actual derivations.
 const volume=Q.get('q-123-145-198').answers;
 assert.equal(new Set(['t099','t100','t107'].map(t=>volume[t].image)).size,3);
});

test('original question images, IDs, associations and record contract stay compatible',()=>{
 const stable=book.questions.map(({id,number,page,pdfPage,crop,origin,image,width,height,topics})=>({id,number,page,pdfPage,crop,origin,image,width,height,topics}));
 const sha=createHash('sha256').update(JSON.stringify(stable)).digest('hex');
 assert.equal(sha,'e78fe033f6e6c44b90d146c09ff176f5649dd1e4fdc84cccb269805318f68742');
 assert.match(html,/yeyu-knowledge-practice-v1/);
 assert.match(html,/function record\(id\)/);
 assert.match(html,/update\(id,\{status:b.dataset.status\}\)/);
 assert.equal(book.version,1);
});
