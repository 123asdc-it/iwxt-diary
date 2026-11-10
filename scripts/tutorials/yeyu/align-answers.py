# -*- coding: utf-8 -*-
"""Render reviewed, topic-specific solutions and refresh the online/offline workbook.

Requires Python with PyMuPDF/Pillow and Tectonic (macOS PingFang SC font).
Run from any directory after editing aligned-solutions.json. Ordinary site builds
reuse the committed HTML/images; they do not need these authoring dependencies.
"""
import base64
import hashlib
import io
import json
import re
import shutil
import subprocess
import zipfile
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[3]
PUBLIC = ROOT / 'public/tutorials/yeyu-practice'
SOURCE = Path(__file__).with_name('aligned-solutions.json')
WORK = ROOT / 'output/cmc-align'
DATA_RE = re.compile(r'(<script id="workbook-data" type="application/json">)(.*?)(</script>)', re.S)
PREAMBLE = r'''\documentclass[12pt]{article}
\usepackage{lmodern,fontspec,xeCJK,amsmath,amssymb,geometry}
\setCJKmainfont{PingFang SC}
\setmainfont{Times New Roman}
\geometry{paperwidth=595.32pt,paperheight=2500pt,left=38pt,right=38pt,top=24pt,bottom=24pt}
\pagestyle{empty}
\setlength{\parindent}{0pt}\setlength{\parskip}{8pt}
\setlength{\abovedisplayskip}{10pt}\setlength{\belowdisplayskip}{10pt}
\setlength{\abovedisplayshortskip}{8pt}\setlength{\belowdisplayshortskip}{8pt}
\setlength{\jot}{5pt}\setlength{\emergencystretch}{3em}
\begin{document}\fontsize{13pt}{20pt}\selectfont
'''


def main():
    WORK.mkdir(parents=True, exist_ok=True)
    html_path = PUBLIC / 'index.html'
    html = html_path.read_text()
    book = json.loads(DATA_RE.search(html)[2])
    records = json.loads(SOURCE.read_text())['solutions']
    expected = {(t['id'], qid) for t in book['topics'] for qid in t['questions']}
    actual = [(r['topicId'], r['questionId']) for r in records]
    assert len(actual) == len(set(actual)) and set(actual) == expected
    by_question = {q['id']: q for q in book['questions']}
    by_topic = {t['id']: t for t in book['topics']}
    # Reuse an existing typeset image only when the complete solution is identical.
    known = {}
    for q in book['questions']:
        old = list(q.get('answers', {}).values()) + ([q['answer']] if 'answer' in q else [])
        for a in old:
            if (PUBLIC / a['image']).is_file():
                known[a['text']] = {k: a[k] for k in ['image', 'width', 'height']}
    new_texts = list(dict.fromkeys(r['solution'] for r in records if r['solution'] not in known))
    if new_texts:
        lines = [PREAMBLE]
        for txt in new_texts:
            # Long inline formulas get their own line; author-written aligned
            # displays handle multi-line derivations and preserve math meaning.
            rendered = re.sub(r'\\\((.*?)\\\)', lambda m: r'\[' + m[1] + r'\]' if len(m[1]) >= 100 else m[0], txt, flags=re.S)
            lines.extend([rendered, r'\clearpage'])
        lines.append(r'\end{document}')
        tex = WORK / 'aligned-answers.tex'
        tex.write_text('\n'.join(lines))
        subprocess.run([shutil.which('tectonic') or '/opt/homebrew/bin/tectonic', '--keep-logs', '--outdir', str(WORK), str(tex)], check=True)
        doc = fitz.open(WORK / 'aligned-answers.pdf')
        assert len(doc) == len(new_texts), 'A solution overflowed its page'
        report = []
        for i, (page, txt) in enumerate(zip(doc, new_texts)):
            blocks = [fitz.Rect(b[:4]) for b in page.get_text('blocks') if b[4].strip()]
            blocks.extend(d['rect'] for d in page.get_drawings())
            assert blocks
            bounds = fitz.Rect(blocks[0])
            for r in blocks[1:]: bounds |= r
            assert bounds.x0 >= 20 and bounds.x1 <= 580 and bounds.y1 < 2470, (i, bounds)
            clip = fitz.Rect(25, max(0, bounds.y0-8), 570, bounds.y1+10)
            pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), clip=clip, alpha=False)
            im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
            digest = hashlib.sha256(txt.encode()).hexdigest()
            name = f'images/aligned-{digest}.webp'
            im.save(PUBLIC / name, format='WEBP', quality=94, method=6)
            known[txt] = {'image': name, 'width': im.width, 'height': im.height}
            report.append({'page': i+1, 'image': name, 'bounds': list(bounds)})
        (WORK / 'render-report.json').write_text(json.dumps(report, indent=2))
    for q in book['questions']:
        q.pop('answer', None)
        q['answers'] = {}
    for r in records:
        assert r['notesPages'] and all(1 <= p <= 436 for p in r['notesPages'])
        assert r['method']
        a = {**known[r['solution']], 'text': r['solution'], 'label': '按本节方法整理',
             'method': r['method'], 'notesPages': r['notesPages'], 'evidence': r['evidence']}
        by_question[r['questionId']]['answers'][r['topicId']] = a
    book['answerSource'] = {'label': '按课程笔记与本节方法整理', 'official': False,
                            'notesTitle': '第二代竞赛笔记合集 有封面版.pdf', 'notesPdfPages': 436,
                            'date': '2026-11-10', 'solutionsSha256': hashlib.sha256(SOURCE.read_bytes()).hexdigest()}
    payload = json.dumps(book, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
    html = DATA_RE.sub(lambda m: m[1] + payload + m[3], html)
    html_path.write_text(html)
    # Build the self-contained offline edition from the SAME current page.
    embedded = {}
    def inline_image(m):
        path = m[1]
        if path not in embedded:
            embedded[path] = 'data:image/webp;base64,' + base64.b64encode((PUBLIC / path).read_bytes()).decode()
        return embedded[path]
    offline = re.sub(r'(?<![\w/])(images/[\w.-]+\.webp)', inline_image, html)
    offline = offline.replace('href="../../"', 'href="https://iwxt.cn/"').replace('href="../"', 'href="https://iwxt.cn/tutorials/"')
    offline = offline.replace('href="./yeyu-practice-offline.zip"', 'href="https://iwxt.cn/tutorials/yeyu-practice/yeyu-practice-offline.zip"')
    zpath = PUBLIC / 'yeyu-practice-offline.zip'
    info = zipfile.ZipInfo('夜雨知识点练习.html', date_time=(2026, 11, 10, 0, 0, 0))
    info.compress_type = zipfile.ZIP_DEFLATED
    info.external_attr = 0o644 << 16
    with zipfile.ZipFile(zpath, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        z.writestr(info, offline.encode())
    print(json.dumps({'entries': len(records), 'newImages': len(new_texts), 'offlineBytes': len(offline.encode()), 'zipBytes': zpath.stat().st_size}))


if __name__ == '__main__':
    main()
