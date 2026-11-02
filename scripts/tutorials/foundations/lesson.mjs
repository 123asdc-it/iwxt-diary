export const flow=(...stages)=>({kind:'flow',stages:stages.map(([title,text])=>({title,text}))});
export function L(id,title,why,meaning,example,model,question,answer,options={}){
  return {id,title,why,meaning,example,model,question,answer,prereq:[],terms:[],caution:'',refs:[],...options};
}
export const ref={
  transformer:['Transformer原论文 §3','https://arxiv.org/html/1706.03762v7#S3'],
  annotated:['Harvard逐步实现','https://nlp.seas.harvard.edu/annotated-transformer/'],
  tokenizer:['Hugging Face分词教学','https://huggingface.co/learn/llm-course/en/chapter2/4'],
  cache:['Hugging Face缓存机制','https://huggingface.co/docs/transformers/main/en/cache_explanation'],
  mita:['MiTA固定v6原文','https://arxiv.org/html/2602.01219v6'],
  mit:['MIT计算结构公开课','https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/'],
  dm:['MIT离散数学公开教材','https://courses.csail.mit.edu/6.042/spring18/mcs.pdf'],
  calculus:['OpenStax微积分公开教材','https://openstax.org/details/books/calculus-volume-1'],
  calculus2:['OpenStax微积分第二卷','https://openstax.org/details/books/calculus-volume-2'],
  calculus3:['OpenStax微积分第三卷','https://openstax.org/details/books/calculus-volume-3'],
  ip:['IPv4规范RFC 791','https://www.rfc-editor.org/rfc/rfc791'],
  tcp:['TCP规范RFC 9293','https://www.rfc-editor.org/rfc/rfc9293'],
  ipv6:['IPv6规范RFC 8200','https://www.rfc-editor.org/rfc/rfc8200'],
  quant:['PyTorch量化原理','https://docs.pytorch.org/docs/stable/quantization.html'],
};
