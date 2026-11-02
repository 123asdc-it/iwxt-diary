import {readFile,writeFile} from 'node:fs/promises';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {routes,lessons} from './catalog.mjs';
import {enhanceTutorial} from './decorate.mjs';
const folder=dirname(fileURLToPath(import.meta.url)),root=resolve(folder,'../../..');
export async function buildFoundations(){
 for(const slug of Object.keys(routes)){const file=resolve(root,'public/tutorials',slug,'index.html'),before=await readFile(file,'utf8'),after=await enhanceTutorial(slug,before);if(before!==after)await writeFile(file,after);}
 // Preserve the original image-bearing offline workbook and add the same self-contained learning layer.
 const page=await readFile(resolve(root,'public/tutorials/yeyu-practice/index.html'),'utf8'),match=page.match(/<!-- STUDY_FOUNDATIONS_START -->[\s\S]*?<!-- STUDY_FOUNDATIONS_END -->/g);
 execFileSync('python3',['-c',`import sys,zipfile,io,re,pathlib
p=pathlib.Path(sys.argv[1]);block=sys.stdin.read();old=p.read_bytes();out=io.BytesIO();changed=False
with zipfile.ZipFile(io.BytesIO(old)) as z,zipfile.ZipFile(out,'w') as dst:
 for item in z.infolist():
  data=z.read(item.filename)
  if item.filename.endswith('.html'):
   s=data.decode('utf-8');s=re.sub(r'<!-- STUDY_FOUNDATIONS_START -->[\\s\\S]*?<!-- STUDY_FOUNDATIONS_END -->\\n?','',s);data=s.replace('</body>',block+'\\n</body>').encode('utf-8')
  if data!=z.read(item.filename):changed=True
  dst.writestr(item,data)
if changed:p.write_bytes(out.getvalue())
`,resolve(root,'public/tutorials/yeyu-practice/yeyu-practice-offline.zip')],{input:match.at(-1),maxBuffer:1024*1024});
 console.log(`Foundations: ${Object.keys(routes).length} tutorials / ${lessons.length} concept lessons; offline workbook synchronized`);
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))await buildFoundations();
