import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('../public/tutorials/fixed-window-advanced/index.html', import.meta.url), 'utf8');
const data = JSON.parse(html.match(/<script id="lesson-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
const ids = ['1052','3679','3439','3694','1297','2134','1652','4043','4044','3652','567','438','30','1888','2156','2953','3672','2067','2524','2200','1461','1016','2653'];

test('fixed-window collection covers exactly the 23 screenshot problems with lessons, examples and references', () => {
  assert.deepEqual(data.map(p=>p.id), ids);
  assert.equal(data.filter(p=>p.scope==='extension').length, 4);
  assert.equal(data.filter(p=>p.paid).length, 3);
  for (const p of data) {
    for (const field of ['goal','turn','maintain','proof','code']) assert.ok(p[field].length>10, `${p.id}: ${field}`);
    assert.ok(p.time.length>0&&p.space.length>0);
    assert.ok(p.pitfalls.length>=2);
    assert.ok(p.example.frames.length>=2);
    assert.ok(p.example.result.length>0);
    for (const frame of p.example.frames) {
      assert.ok(frame.left>=0&&frame.right<p.example.items.length&&frame.left<=frame.right);
      assert.ok(frame.note&&frame.state);
    }
    if(p.paid) assert.ok(p.sources.some(u=>u.startsWith('https://github.com/doocs/leetcode/')));
  }
});

const stateSource = html.match(/<script id="practice-state">([\s\S]*?)<\/script>/)[1];
const state = vm.runInNewContext(stateSource+'\nPracticeState;');
const coreSource = html.match(/<script id="window-core">([\s\S]*?)<\/script>/)[1];
const core = vm.runInNewContext(coreSource+'\nWindowCore;');
test('interactive window updates enter, leave and evaluate in the displayed order',()=>{
  const trace=core.traceSum([2,-1,3,4,-2],3);
  assert.equal(trace.at(-1).best,6);
  assert.equal(trace.filter(f=>f.phase==='结算').length,3);
  assert.deepEqual(Array.from(trace.filter(f=>f.phase==='结算'),f=>f.sum),[4,6,5]);
  assert.equal(core.traceSum([-4,-2,-8],2).at(-1).best,-6);
  assert.equal(core.traceSum([3],1).at(-1).best,3);
  assert.throws(()=>core.parseInput('1,wrong,2',2));
  assert.throws(()=>core.parseInput('1,2',3));
  assert.throws(()=>core.parseInput('1,100',1));
  assert.deepEqual(Array.from(core.parseInput('2，-1 3',2)),[2,-1,3]);
});
const record = (status,note,time)=>({status,note,updatedAt:time});
test('practice import validates the whole file and merges only newer records',()=>{
  const a=record('done','原记录','2026-11-01T01:00:00.000Z');
  const b=record('review','新笔记','2026-11-01T02:00:00.000Z');
  const payload={app:'fixed-window-advanced',version:1,records:{1052:a}};
  const parsed=state.validate(payload,ids);
  assert.equal(parsed['1052'].note,'原记录');
  assert.equal(state.merge(parsed,{'1052':b})['1052'].note,'新笔记');
  assert.equal(state.merge({'1052':b},parsed)['1052'].note,'新笔记');
  assert.throws(()=>state.validate({...payload,version:2},ids));
  assert.throws(()=>state.validate({...payload,records:{999999:a}},ids));
  assert.throws(()=>state.validate({...payload,records:{1052:{...a,status:'accepted'}}},ids));
  assert.throws(()=>state.validate({...payload,records:{1052:{...a,updatedAt:'invalid'}}},ids));
  assert.throws(()=>state.validate({...payload,records:{1052:{...a,note:4}}},ids));
  assert.equal(parsed['1052'].note,'原记录');
});

let seed=20261101;
const random=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;};
const integer=(lo,hi)=>lo+random(hi-lo+1);
const arr=(n,lo=0,hi=3)=>Array.from({length:n},()=>integer(lo,hi));
const str=(n,alphabet='abc')=>Array.from({length:n},()=>alphabet[random(alphabet.length)]).join('');
const sum=a=>a.reduce((s,x)=>s+x,0);
const counts=a=>{const m=new Map();for(const x of a)m.set(x,(m.get(x)||0)+1);return m;};
const windows=(a,k)=>Array.from({length:Math.max(0,a.length-k+1)},(_,i)=>a.slice(i,i+k));
const rotations=a=>Array.from({length:a.length},(_,i)=>a.slice(i).concat(a.slice(0,i)));
const sorted=s=>[...s].sort().join('');
const cases=[];
const add=(id,args,expected,sort=false)=>cases.push({id:String(id),args,expected,sort});
function powmod(x,e,p=1000000007n){x=BigInt(x)%p;let ans=1n;for(;e;e>>=1,x=x*x%p)if(e&1)ans=ans*x%p;return ans;}
function hash(s,p,m){let result=0n,power=1n;for(const c of s){result=(result+BigInt(c.charCodeAt(0)-96)*power)%BigInt(m);power=power*BigInt(p)%BigInt(m);}return Number(result);}
function bruteMeet(event,k,starts,ends){let best=0;const chosen=[];function visit(i,previous,changes){if(i===starts.length){best=Math.max(best,chosen[0],event-previous,...chosen.slice(1).map((x,j)=>x-(chosen[j]+ends[j]-starts[j])));return;}const duration=ends[i]-starts[i];for(let s=previous;s+duration<=event;s++){const next=changes+(s!==starts[i]);if(next<=k){chosen.push(s);visit(i+1,s+duration,next);chosen.pop();}}}visit(0,0,0);return best;}
function bruteDiscard(a,w,m){let kept=0;for(let mask=0;mask<(1<<a.length);mask++){let valid=true,total=0;for(let i=0;i<a.length&&valid;i++){const c=new Map();for(let j=Math.max(0,i-w+1);j<=i;j++)if(mask>>j&1)c.set(a[j],(c.get(a[j])||0)+1);valid=[...c.values()].every(v=>v<=m);if(mask>>i&1)total++;}if(valid)kept=Math.max(kept,total);}return a.length-kept;}
function bruteComplete(s,k,adjacent){let answer=0;for(let l=0;l<s.length;l++)for(let r=l;r<s.length;r++){const t=s.slice(l,r+1);if([...counts(t).values()].every(v=>v===k)&&(!adjacent||[...t].every((c,i)=>i===0||Math.abs(c.charCodeAt(0)-t.charCodeAt(i-1))<=2)))answer++;}return answer;}
for(let it=0;it<64;it++){
  const n=integer(1,8),k=integer(1,n),a=arr(n,1,8),binary=arr(n,0,1),s=str(n),grumpy=arr(n,0,1);
  add(1052,[a,grumpy,k],Math.max(...Array.from({length:n-k+1},(_,l)=>sum(a.map((v,i)=>!grumpy[i]||i>=l&&i<l+k?v:0)))));
  const w=integer(1,n),m=integer(1,w),items=arr(n,1,3);add(3679,[items,w,m],bruteDiscard(items,w,m));
  const event=8,meetingCount=integer(2,3),positions=[...new Set(arr(16,0,7))].sort((x,y)=>x-y).slice(0,meetingCount);if(positions.length===meetingCount){const ends=positions.map(x=>x+1),moves=integer(1,meetingCount);add(3439,[event,moves,positions,ends],bruteMeet(event,moves,positions,ends));}
  const moves=str(n,'UDLR'),dest=new Set();for(let l=0;l+k<=n;l++){const t=moves.slice(0,l)+moves.slice(l+k);let x=0,y=0;for(const c of t){x+=(c==='R')-(c==='L');y+=(c==='U')-(c==='D');}dest.add(x+','+y);}add(3694,[moves,k],dest.size);
  const min=integer(1,n),max=integer(min,n),limit=integer(1,3),freq=new Map();for(let l=0;l<n;l++)for(let size=min;size<=max&&l+size<=n;size++){const word=s.slice(l,l+size);if(new Set(word).size<=limit)freq.set(word,(freq.get(word)||0)+1);}add(1297,[s,limit,min,max],Math.max(0,...freq.values()));
  const ones=sum(binary);let swap=n;for(let start=0;start<n;start++){const target=Array.from({length:n},(_,i)=>((i-start+n)%n)<ones?1:0);swap=Math.min(swap,binary.filter((v,i)=>v!==target[i]).length/2);}add(2134,[binary],swap);
  const key=integer(-n+1,n-1);add(1652,[a,key],a.map((_,i)=>{let v=0;for(let j=1;j<=Math.abs(key);j++)v+=a[(i+(key>0?j:-j)+n)%n];return v;}));
  const rotateString=str(Math.max(2,n));const eq=integer(0,rotateString.length-1);add(4043,[rotateString,eq],rotations([...rotateString]).filter(t=>t.slice(1).filter((c,i)=>c===t[i]).length===eq).length);
  const even=arr(2*integer(1,4),1,9);add(4044,[even],rotations(even).filter(t=>sum(t.slice(0,t.length/2))>sum(t.slice(t.length/2))).length);
  const prices=arr(2*integer(1,4),1,10),strategy=arr(prices.length,-1,1),width=2*integer(1,prices.length/2);let profit=sum(prices.map((v,i)=>v*strategy[i]));for(let l=0;l+width<=prices.length;l++){const t=[...strategy];for(let j=0;j<width;j++)t[l+j]=j<width/2?0:1;profit=Math.max(profit,sum(prices.map((v,i)=>v*t[i])));}add(3652,[prices,strategy,width],profit);
  const target=str(integer(1,5)),text=str(integer(1,12)),hits=[];for(let l=0;l+target.length<=text.length;l++)if(sorted(text.slice(l,l+target.length))===sorted(target))hits.push(l);add(567,[target,text],hits.length>0);add(438,[text,target],hits);
  const wordSize=integer(1,3),words=Array.from({length:integer(1,3)},()=>str(wordSize));let joined=str(integer(1,12));if(it%2===0)joined=str(random(3))+[...words].reverse().join('')+str(random(3));const starts=[];for(let l=0;l+words.length*wordSize<=joined.length;l++){const t=Array.from({length:words.length},(_,j)=>joined.slice(l+j*wordSize,l+(j+1)*wordSize));if(t.sort().join('|')===[...words].sort().join('|'))starts.push(l);}add(30,[joined,words],starts,true);
  const bits=str(integer(1,10),'01');let flips=bits.length;for(const t of rotations([...bits]))for(let first=0;first<2;first++)flips=Math.min(flips,t.filter((v,i)=>Number(v)!==((first+i)%2)).length);add(1888,[bits],flips);
  const hs=str(integer(1,10),'abcd'),hk=integer(1,hs.length),power=[1,2,3,1000000000][random(4)],mod=[1,2,7,97,1000000000][random(5)],wanted=hash(hs.slice(integer(0,hs.length-hk),hs.length).slice(0,hk),power,mod);const left=Array.from({length:hs.length-hk+1},(_,i)=>i).find(i=>hash(hs.slice(i,i+hk),power,mod)===wanted);add(2156,[hs,power,mod,hk,wanted],hs.slice(left,left+hk));
  const word=str(n,'abcdf'),times=integer(1,n);add(2953,[word,times],bruteComplete(word,times,true));add(2067,[word,times],bruteComplete(word,times,false));
  let weighted=0;for(const t of windows(a,k)){const entries=[...counts(t)].sort((a,b)=>b[1]-a[1]||a[0]-b[0]);weighted+=entries[0][0]*entries[0][1];}add(3672,[a,k],weighted);
  const scores=arr(n,1,5).map(v=>[1,2,3,999983,1000000][v-1]);add(2524,[scores,k],Math.max(...windows(scores,k).map(t=>Number([...counts(t)].reduce((sum,[x,c])=>(sum+powmod(x,c))%1000000007n,0n)))));
  const special=a[random(n)],distance=integer(1,n);add(2200,[a,special,distance],a.map((_,i)=>i).filter(i=>a.some((v,j)=>v===special&&Math.abs(i-j)<=distance)));
  const size=integer(1,5),seen=new Set(windows(bits,size).map(t=>t.join?t.join(''):t));add(1461,[bits,size],seen.size===(1<<size));
  const upto=integer(1,25);add(1016,[bits,upto],Array.from({length:upto},(_,i)=>(i+1).toString(2)).every(v=>bits.includes(v)));
  const values=arr(n,-5,5),rank=integer(1,k);add(2653,[values,k,rank],windows(values,k).map(t=>Math.min(0,[...t].sort((a,b)=>a-b)[rank-1])));
}
add(3672,[[1,1,3],3],2);add(3672,[[2,1],2],1);add(3652,[[1,1,1,1],[-1,-1,-1,-1],2],-1);
add(3679,[[1,1,1],2,1],1);add(4043,['aaaa',3],4);add(4044,[[3,1,3,1,3,1]],3);
add(1888,['001'],0);add(1888,['010'],0);add(30,['xbarfoo',['bar','foo']],[1],true);add(30,['foofoofoo',['foo','foo']],[0,3],true);
add(2156,['aaaa',1000000000,1,2,0],'aa');add(1016,['1',1000000000],false);add(1016,['0110',3],true);add(1016,['0110',4],false);
add(2953,['igigee',2],3);add(2953,['ad',1],2);add(1461,['0',20],false);

const methods={1052:'maxSatisfied',3679:'minArrivalsToDiscard',3439:'maxFreeTime',3694:'distinctPoints',1297:'maxFreq',2134:'minSwaps',1652:'decrypt',4043:'countRotations',4044:'countGoodRotations',3652:'maxProfit',567:'checkInclusion',438:'findAnagrams',30:'findSubstring',1888:'minFlips',2156:'subStrHash',2953:'countCompleteSubstrings',3672:'modeWeight',2067:'equalCountSubstrings',2524:'maxFrequencyScore',2200:'findKDistantIndices',1461:'hasAllCodes',1016:'queryString',2653:'getSubarrayBeauty'};
const cppValue=v=>Array.isArray(v)?(v.some(x=>typeof x==='string')?'vector<string>':'vector<int>')+'{'+v.map(x=>typeof x==='string'?JSON.stringify(x):x).join(',')+'}':typeof v==='string'?'string('+JSON.stringify(v)+')':typeof v==='boolean'?(v?'true':'false'):String(v);
test('all 23 actual C++17 implementations match independent small-input brute force', {timeout:120000}, t=>{
  const compiler=spawnSync('clang++',['--version'],{encoding:'utf8'});if(compiler.error){t.skip('clang++ unavailable; run this check where a C++17 compiler is installed');return;}
  const include=['algorithm','array','cassert','cmath','cstdint','functional','iostream','map','numeric','random','set','string','unordered_map','unordered_set','utility','vector'].map(x=>'#include <'+x+'>').join('\n');
  const definitions=data.map(p=>'namespace p'+p.id+' {\n'+p.code+'\n}').join('\n');
  const assertions=cases.map((c,i)=>'{ '+c.args.map((v,j)=>'auto a'+j+' = '+cppValue(v)+';').join(' ')+' auto got = p'+c.id+'::Solution{}.'+methods[c.id]+'('+c.args.map((_,j)=>'a'+j).join(',')+'); '+(c.sort?'sort(got.begin(),got.end()); ':'')+'if (got != '+cppValue(c.expected)+') { cerr << "problem '+c.id+' case '+i+' failed"; return 1; } }').join('\n');
  const stress='\n{ vector<int> p(100000,100000), s(100000,1); if(p3652::Solution{}.maxProfit(p,s,2)!=10000000000LL)return 2; }\n{ vector<int> a(50000,100000); if(p3672::Solution{}.modeWeight(a,25000)!=62502500000000LL)return 3; }\n{ vector<int> a={1000000000,1000000000,1000000000,1000000000}; if(p4044::Solution{}.countGoodRotations(a)!=0)return 4; }';
  const folder=new URL('../output/cpp-verification/',import.meta.url);mkdirSync(folder,{recursive:true});const source=new URL('fixed-window.cpp',folder),binary=new URL('fixed-window',folder);
  writeFileSync(source,include+'\nusing namespace std;\n'+definitions+'\nint main(){\n'+assertions+stress+'\ncout << "Verified '+cases.length+' cases across 23 solutions plus 64-bit boundaries";\n}\n');
  const compiled=spawnSync('clang++',['-std=c++17','-O0',source.pathname,'-o',binary.pathname],{encoding:'utf8',timeout:90000});assert.equal(compiled.status,0,compiled.stderr);
  const executed=spawnSync(binary.pathname,[],{encoding:'utf8',timeout:15000});assert.equal(executed.status,0,executed.stdout+'\n'+executed.stderr);t.diagnostic(executed.stdout);
  assert.deepEqual([...new Set(cases.map(c=>c.id))].sort(),[...ids].sort());
});
