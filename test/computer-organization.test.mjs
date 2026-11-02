import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
const html=readFileSync(new URL('../public/tutorials/computer-organization/index.html',import.meta.url),'utf8');
const source=html.match(/<script id="co-math">([\s\S]*?)<\/script>/)?.[1];
assert.ok(source);assert.equal(source.trim(),readFileSync(new URL('../scripts/tutorials/computer-organization/math.js',import.meta.url),'utf8').trim());
const M=vm.runInNewContext(source+'\nCOMath;');
const near=(a,b)=>assert.ok(Math.abs(a-b)<Math.max(1e-12,Math.abs(b)*1e-12),`${a} != ${b}`);
test('all 8-bit add/sub results, signed overflow and unsigned carry/borrow agree with integers',()=>{
 for(let a=0;a<256;a++)for(let b=0;b<256;b++)for(const sub of [false,true]){
  const r=M.addSub(a,b,8,sub),signed=x=>x<128?x:x-256,exact=sub?signed(a)-signed(b):signed(a)+signed(b);
  assert.equal(r.result,((sub?a-b:a+b)%256+256)%256);assert.equal(r.OF,exact < -128||exact>127);assert.equal(r.CF,sub?a<b:a+b>255);assert.equal(r.ZF,r.result===0);assert.equal(r.SF,r.result>=128);
 }
});
test('Booth and unsigned restoring division include boundaries and match direct arithmetic',()=>{
 for(let a=-8;a<8;a++)for(let b=-8;b<8;b++)assert.equal(M.booth(a,b,4).product,a*b||0);
 for(let a=0;a<256;a++)for(let b=1;b<16;b++){const r=M.division(a,b,8);assert.equal(r.quotient,Math.floor(a/b));assert.equal(r.remainder,a%b);}
 assert.throws(()=>M.division(3,0));
});
test('encoding, signed shifts, binary32 normal/subnormal/special values and endian order',()=>{
 assert.equal(M.encoding(0xf2).twos,-14);assert.equal(M.shifts(0xf2,8,1).arithmeticValue,-7);assert.equal(M.shifts(0xf2,8,1).logicalRight,'01111001');
 assert.equal(M.floatNumber(1.5).hex,'3FC00000');assert.equal(M.floatHex('80200000').value,-(2**-128));assert.equal(M.floatHex('00000001').value,2**-149);assert.equal(M.floatHex('7F800000').value,Infinity);assert.ok(Number.isNaN(M.floatHex('7FC00000').value));assert.ok(Object.is(M.floatHex('80000000').value,-0));
 assert.deepEqual([...M.endian('1234ABCD').map(r=>r.little)],['CD','AB','34','12']);
});
test('CPI, Amdahl, capacity expansion and timing formulas keep units explicit',()=>{
 near(M.performance(5e5,1.2,1.5).time,.0004);near(M.performance(5e5,1.2,1.5).ips,1.25e9);near(M.performance(1e6,1,1,.6,3).speedup,5/3);
 const m=M.memory(32768,16,8192,8);assert.equal(m.chips,8);assert.equal(m.chipAddressBits,13);assert.equal(m.addressBits,15);
 near(M.amat(.95,2,100),7);near(M.amat(.95,2,102,'total'),7);assert.throws(()=>M.amat(.9,10,5,'total'));
 const p=M.pipelineTime(10,[2,3,2,4,2],.2);near(p.clock,4.2);near(p.time,58.8);near(p.serial,130);
});
test('set-associative cache matches independent ordered-list LRU/FIFO over many access sequences',()=>{
 for(const ways of [1,2,4])for(const policy of ['LRU','FIFO'])for(let seed=0;seed<20;seed++){
  const addresses=Array.from({length:32},(_,i)=>(i*seed*13+i*i+seed*3)%256),sets=4/ways,reference=Array.from({length:sets},()=>[]);let hits=0;
  for(const address of addresses){const block=Math.floor(address/16),set=block%sets,row=reference[set],index=row.indexOf(block);if(index>=0){hits++;if(policy==='LRU'){row.splice(index,1);row.push(block);}}else{if(row.length===ways)row.shift();row.push(block);}}
  const r=M.cache({bytes:64,blockBytes:16,ways,policy},addresses);assert.equal(r.hits,hits);assert.equal(r.misses,32-hits);assert.equal(r.frames.length,33);
 }
 const shape=M.cache({addressBits:32,bytes:32768,blockBytes:64,ways:8},[]);assert.equal(shape.sets,64);assert.equal(shape.tagBits,20);assert.equal(shape.perWayComparators,8);
});
test('page translation preserves page offset and distinguishes TLB miss from absent page',()=>{
 const r=M.translate(0x82840,4096,{130:24},{});assert.equal(r.vpn,130);assert.equal(r.offset,0x840);assert.equal(r.pa,0x18840);assert.equal(r.tlbHit,false);assert.equal(r.present,true);
 assert.equal(M.translate(0x82840,4096,{130:24},{130:24}).tlbHit,true);assert.equal(M.translate(0x82840,4096,{130:null}).pa,null);assert.throws(()=>M.translate(1,4096,{0:2},{0:3}));
});
test('word-addressed CPU trace agrees with program semantics and fixed pipeline hazard assumptions',()=>{
 const trace=M.cpu();assert.equal(JSON.stringify(trace.find(f=>f.text.startsWith('写主存')).transfers),JSON.stringify([['MDR','MEM']]));assert.equal(JSON.stringify(trace.find(f=>f.text.startsWith('读主存')).transfers),JSON.stringify([['MEM','MDR']]));assert.equal(JSON.stringify(trace.find(f=>f.text.startsWith('ADD：')).transfers),JSON.stringify([['ACC','ALU'],['MDR','ALU'],['ALU','ACC']]));
 for(const [x,y]of [[3,5],[65535,1],[0,0],[32768,32768]]){const rows=M.cpu(x,y);assert.equal(rows.at(-1).memory[18],(x+y)%65536);assert.equal(rows.at(-1).stage,'停止');assert.equal(rows.at(-1).registers.PC,4);}
 assert.equal(M.pipeline(true).cycles,9);assert.equal(M.pipeline(true).stalls,1);assert.equal(M.pipeline(false).cycles,14);assert.equal(M.pipeline(false).stalls,6);
 assert.equal(M.address('relative',-8,0,104).ea,96);assert.equal(M.address('indirect',20,0,0,{20:80,80:7}).operand,7);assert.equal(M.address('immediate',9,0,0).ea,null);
});
test('microinstruction groups include no-op code and bus/IO separate latency from CPU work',()=>{
 const r=M.micro([4,3,5],4,64);assert.deepEqual([...r.fields],[3,2,3]);assert.equal(r.totalBits,16);
 near(M.bus(64,100,1,4).actual,200e6);near(M.bus(64,100,2,1).peak,1600e6);const io=M.io(1048576,4096,10,40,10,100);assert.equal(io.blocks,256);assert.equal(io.interruptCpuUs,2560);assert.equal(io.dmaCpuUs,50);near(io.transferUs,10485.76);
});
test('published content has complete graph coverage, unique questions and verified numeric answer metadata',()=>{
 const book=JSON.parse(html.match(/<script id="co-course-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
 assert.equal(book.chapters.length,7);assert.equal(book.units.length,28);assert.equal(book.points.length,56);assert.ok(book.points.every(p=>p.visual.kind&&p.questions.length));assert.equal(book.questions.length,100);assert.equal(book.questions.filter(q=>q.origin==='exam').length,16);assert.equal(new Set(book.questions.map(q=>q.id)).size,100);
 const checkers={signed:(...a)=>M.signed(...a),performanceTime:(...a)=>M.performance(...a).time,amdahl:(...a)=>M.performance(...a).speedup,aluResult:(...a)=>M.addSub(...a).result,boothProduct:(...a)=>M.booth(...a).product,divisionQuotient:(...a)=>M.division(...a).quotient,floatValue:(...a)=>M.floatHex(...a).value,amat:(...a)=>M.amat(...a),interleaveTime:(...a)=>M.interleave(...a).time,memoryChips:(...a)=>M.memory(...a).chips,cacheTag:(...a)=>M.cache(...a).tagBits,pageAddress:(...a)=>M.translate(...a).pa,opcodeOne:(...a)=>M.opcode(...a).oneMax,addressEA:(...a)=>M.address(...a).ea,addressOperand:(...a)=>M.address(...a).operand,cpuResult:(...a)=>M.cpu(...a).at(-1).memory[18],cpuPC:(...a)=>M.cpu(...a).at(-1).registers.PC,microBits:(...a)=>M.micro(...a).totalBits,pipelineTime:(...a)=>M.pipelineTime(...a).time,pipelineCycles:(...a)=>M.pipeline(...a).cycles,busActual:(...a)=>M.bus(...a).actual,busPeak:(...a)=>M.bus(...a).peak,interruptTime:(...a)=>M.io(...a).interruptCpuUs,dmaCpu:(...a)=>M.io(...a).dmaCpuUs};
 for(const q of book.questions)if(q.check){assert.ok(checkers[q.check.fn],q.id);near(checkers[q.check.fn](...q.check.args),q.check.expected);}
 for(const q of book.questions.filter(q=>q.origin==='exam')){assert.match(q.url,/^https:\/\/www\.xit\.edu\.cn\/.+\.pdf#page=[347]$/);assert.ok(q.steps.length>=3);}
 for(const m of html.matchAll(/<script id="co-(?:math|progress|visuals|ui)">([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
});
test('2022/2023 exam arithmetic includes 32-bit borrow, extended opcodes and disk/DMA compound result',()=>{
 const r=M.addSub(10,4294967276,32,true);assert.equal(r.result,30);assert.equal(r.OF,false);assert.equal(r.CF,true);
 assert.equal(M.extendedOpcode(6,12,254).at(-1).available,128);assert.equal(M.extendedOpcode(4,12,48).find(x=>x.level===1).available,256);
 const d=M.disk(8,20000,500,512,7200,5,64);assert.equal(d.trackBits,15);assert.equal(d.surfaceBits,3);assert.equal(d.sectorBits,9);near(d.totalMs,9.183333333333334);assert.equal(d.dmaRequests,64);
});
test('progress merge validates before changing records and protects other books, newer notes and future timestamps',()=>{
 const code=html.match(/<script id="co-progress">([\s\S]*?)<\/script>/)[1],S=vm.runInNewContext(code+'\nCOProgress;'),ids=new Set(['q1','q2']),a={status:'review',note:'old',updatedAt:'2026-01-01T00:00:00Z'},newer={status:'done',note:'new',updatedAt:'2026-02-01T00:00:00Z'},current={q1:newer},base={app:'co-exam-workbook',version:1,records:{q1:a}};
 assert.equal(S.merge(current,base,ids).records.q1.note,'new');assert.equal(S.merge({q1:a},{...base,records:{q1:newer}},ids).count,1);
 const original=JSON.stringify(current);assert.throws(()=>S.merge(current,{...base,records:{q1:a,q2:{...a,status:'invalid'}}},ids));assert.equal(JSON.stringify(current),original);
 assert.throws(()=>S.validate({...base,app:'yeyu-knowledge-practice'},ids));assert.throws(()=>S.validate({...base,records:{q1:{...a,updatedAt:'2999-01-01T00:00:00Z'}}},ids));assert.equal(S.merge(current,{...base,records:{q1:a,unknown:a}},ids).skipped,1);
});
