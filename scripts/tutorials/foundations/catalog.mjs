import ai from './ai.mjs';
import computing from './computing.mjs';
import mathematics from './mathematics.mjs';
import networking from './networking.mjs';
import other from './other.mjs';
export const lessons=[...ai,...computing,...mathematics,...networking,...other];
const chapter=(selector,ids)=>({selector,ids:ids.split(' ')});
export const routes={
 'mita-attention':{title:'从一句话到Transformer，再读MiTA',order:'token vector dot matrix parameters linear qkv softmax attention position mask multihead ffn resnorm transformer generation kv-cache complexity pooling routing compression measurement',contexts:[chapter('#why','token vector qkv softmax attention'),chapter('#fast','matrix parameters linear ffn compression'),chapter('#design','pooling routing compression'),chapter('#method','pooling routing compression'),chapter('#lab','qkv attention pooling routing compression'),chapter('#cost','complexity measurement kv-cache'),chapter('#evidence','measurement parameters'),chapter('#read','measurement kv-cache compression')]},
 'model-4bit':{title:'先看懂模型里的数，再看4bit',order:'bits vector dot parameters linear quantization quant-error calibration',contexts:[chapter('#start','parameters linear quantization'),chapter('#grid','bits quantization'),chapter('#choice','linear quant-error'),chapter('#error','parameters quant-error'),chapter('#groups','quantization calibration'),chapter('#calibration','calibration parameters'),chapter('#cost','bits parameters calibration'),chapter('#recap','quantization quant-error')]},
 'polyglot':{title:'先看懂程序怎样运行，再看多语言协作',order:'program bits process compiler linker abi',contexts:[chapter('#chapter-start','program process'),chapter('#chapter-compile','compiler bits'),chapter('#chapter-link','compiler linker'),chapter('#chapter-build','linker abi'),chapter('#chapter-abi','process abi address'),chapter('#chapter-review','process compiler linker abi')]},
 'fixed-window-advanced':{title:'从数组的一排格子开始理解滑窗',order:'array window invariant hash prefix circular rolling-hash algorithm-cost',contexts:[chapter('#overview','array window invariant algorithm-cost'),chapter('#lesson','window hash circular rolling-hash')],dynamic:'window'},
 'discrete-math':{title:'从判断、集合开始，建立离散结构',order:'statement logic proof quantifier sets relation function operation group-ring order counting recurrence graph euler-hamilton tree matching modular',contexts:[chapter('#overview','statement sets proof'),chapter('#ch1','statement logic'),chapter('#ch2','logic proof'),chapter('#ch3','proof logic'),chapter('#ch4','quantifier function'),chapter('#ch5','quantifier proof'),chapter('#ch6','sets'),chapter('#ch7','relation'),chapter('#ch8','function relation'),chapter('#ch9','operation'),chapter('#ch10','group-ring operation'),chapter('#ch11','order sets'),chapter('#ch12','counting'),chapter('#ch13','recurrence counting'),chapter('#ch14','graph relation'),chapter('#ch15','euler-hamilton graph'),chapter('#ch16','tree graph'),chapter('#ch17','matching graph'),chapter('#ch18','euler-hamilton graph'),chapter('#ch19','modular group-ring')]},
 'yeyu-practice':{title:'先把符号、变化与累计的含义接起来',order:'function limit derivative integral series space multivariable multiple-integral line-surface diffeq proof',contexts:[],dynamic:'calculus'},
 'computer-organization':{title:'从0/1、地址和状态开始看计组',order:'bits hardware address program compiler instruction memory-cache pipeline io',contexts:[],dynamic:'computer'},
 'huawei-ict-network':{title:'从一次通信看懂地址、封装和转发',order:'bits network layers ip-subnet mac-arp switch-vlan route stp ospf routing-policy services ipv6 tunnel qos radio wlan security management',contexts:[chapter('#ch00','network layers'),chapter('#ch01','network ip-subnet mac-arp'),chapter('#ch02','layers services qos'),chapter('#ch03','switch-vlan mac-arp'),chapter('#ch04','ip-subnet mac-arp'),chapter('#ch05','management address'),chapter('#ch06','switch-vlan route'),chapter('#ch07','stp graph'),chapter('#ch08','stp route'),chapter('#ch09','route'),chapter('#ch10','ospf graph'),chapter('#ch11','routing-policy'),chapter('#ch12','services'),chapter('#ch13','ipv6'),chapter('#ch14','tunnel'),chapter('#ch15','qos'),chapter('#ch16','radio'),chapter('#ch17','wlan'),chapter('#ch18','wlan security'),chapter('#ch19','security modular'),chapter('#ch20','security route'),chapter('#ch21','tunnel security'),chapter('#ch22','tunnel switch-vlan'),chapter('#ch23','management security'),chapter('#ch24','management'),chapter('#ch25','management program'),chapter('#ch26','management network'),chapter('#ch27','network management')]},
 'cet6-word-picker':{title:'把筛选结果变成能回忆、能使用的词汇',order:'word-selection pronunciation word-class word-family',contexts:[]},
};
const byId=new Map(lessons.map(l=>[l.id,l]));
for(const r of Object.values(routes))r.order=r.order.split(' ');
export function dataFor(slug){
 const route=routes[slug];if(!route)throw Error('Unknown tutorial '+slug);
 const wanted=new Set([...route.order,...route.contexts.flatMap(c=>c.ids)]);
 function include(id){const l=byId.get(id);if(!l)throw Error('Missing prerequisite '+id);for(const p of l.prereq)if(!wanted.has(p)){wanted.add(p);include(p);}}
 for(const id of [...wanted])include(id);
 return{version:1,slug,...route,lessons:lessons.filter(l=>wanted.has(l.id))};
}
