export const chapters=[
 {id:1,title:'计算机系统概述',route:'先把整机、程序与性能连起来。'},
 {id:2,title:'数据的表示和运算',route:'同一串位怎样被解释，电路怎样完成运算。'},
 {id:3,title:'存储系统',route:'从芯片容量走到Cache、页表与TLB。'},
 {id:4,title:'指令系统',route:'从编码格式走到寻址和过程调用。'},
 {id:5,title:'中央处理器',route:'看到指令在数据通路中逐拍执行。'},
 {id:6,title:'总线',route:'沿一次事务核对时序、带宽与仲裁。'},
 {id:7,title:'输入/输出系统',route:'分清CPU、接口、设备与DMA各自在做什么。'}
];
export const Q=(prompt,answer,steps,kind='calculation',check=null)=>({prompt,answer,steps,kind,check});
export const flow=(...stages)=>({kind:'flow',stages:stages.map(([name,text])=>({name,text}))});
export const P=(title,why,core,formula,derive,trap,visual,questions)=>({title,why,core,formula,derive,trap,visual,questions});
export const U=(id,title,a,b)=>({id,chapter:Number(id.split('.')[0]),title,points:[a,b]});
