const COProgress=(()=>{
 'use strict';const app='co-exam-workbook',version=1,keys=['new','review','done'];
 function validate(raw,ids){if(!raw||raw.app!==app||raw.version!==version||!raw.records||typeof raw.records!=='object'||Array.isArray(raw.records))throw Error('请选择本计组教程导出的第1版JSON记录');const records={};let skipped=0;for(const [id,r]of Object.entries(raw.records)){if(!ids.has(id)){skipped++;continue;}if(!r||typeof r!=='object'||!keys.includes(r.status)||typeof r.note!=='string'||r.note.length>50000||typeof r.updatedAt!=='string'||!Number.isFinite(Date.parse(r.updatedAt))||Date.parse(r.updatedAt)>Date.now()+86400000)throw Error('备份含无效状态、笔记或时间，整份文件未导入');records[id]={status:r.status,note:r.note,updatedAt:r.updatedAt};}if(Object.keys(raw.records).length&&!Object.keys(records).length)throw Error('这份记录没有本教程的有效题号');return{records,skipped};}
 function merge(current,raw,ids){const {records,skipped}=validate(raw,ids),merged={...current};let count=0;for(const [id,r]of Object.entries(records))if(!current[id]||Date.parse(r.updatedAt)>Date.parse(current[id].updatedAt)){merged[id]=r;count++;}return{records:merged,count,skipped};}
 return{app,version,validate,merge};
})();
