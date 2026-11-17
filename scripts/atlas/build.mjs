import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const source=new URL('./',import.meta.url),dest=new URL('../../public/apps/cs-atlas/',import.meta.url);
let html=await readFile(new URL('index.html',source),'utf8');
for(const [name,filename] of [['app','app.js'],['point-view','point-view.js'],['points-data','point-data.json'],['learning','learning.js'],['inspector','inspector.js'],['styles','styles.css'],['point-styles','point-view.css'],['learning-data','learning-routes.json']]){
 let content=await readFile(new URL(filename,source),'utf8');
 if(name==='points-data')content='window.ATLAS_POINTS='+JSON.stringify(JSON.parse(content))+';\n';
 if(name==='learning-data')content='window.ATLAS_ROUTES='+JSON.stringify(JSON.parse(content))+';\n';
 const ext=name.endsWith('styles')?'css':'js',hash=createHash('sha256').update(content).digest('hex').slice(0,12),asset=`${name}-${hash}.${ext}`;
 await writeFile(new URL(asset,dest),content);html=html.replace(`{{${name}}}`,asset);
}
await writeFile(new URL('index.html',dest),html);
console.log('Atlas learning assets built.');
