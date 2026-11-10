# iwxt 日记本 · GitHub Pages 版

这是一个保留 Romanticism 2.2 视觉风格的静态日记站：公网只展示生成后的
HTML、CSS、JavaScript 和图片，写作、草稿及 GitHub 凭据只留在本机。

现有 Sites 网站和 Typecho 备份不会被此项目覆盖。

正式公网地址：<https://iwxt.cn/>。自定义域名通过 GitHub Pages 发布，DNS、
Let's Encrypt 证书和强制 HTTPS 已于 2026-09-10 配置完成。

## 开始写日记

最方便的方式是双击项目中的 `打开日记写作.command`。第一次启动会安装少量
Node.js 依赖，随后自动打开：

- 本地写作间：`http://127.0.0.1:4173/writer/`
- 公网效果预览：`http://127.0.0.1:4173/`

也可以在终端执行：

```bash
npm install
npm run write
```

写作页面提供新建、编辑、保存草稿、重新生成预览、保存并发布以及移到回收
目录。草稿保存在本机的 `content/drafts/`，这个目录被 Git 忽略，因此既不会
进入 `dist/` 的公开网站，也不会出现在公开 GitHub 仓库中。

文章封面既可以从 Romanticism 自带图片中选择，也可以像旧 Typecho 主题一样
粘贴图片 URL。保存时会验证并下载 PNG、JPEG、WebP、GIF 或 AVIF 图片（最大
8 MB）：草稿图片只保存在本机，点击“保存并发布”后才会复制到公开资源目录。

写作页顶部的“站点外观 → 主页壁纸 URL”对应旧 Romanticism 的
`AKAROMindeximg`。粘贴壁纸站的图片直链并保存后，主页大图会立即更新；也可
随时恢复内置湖景。现有备份里没有旧 Typecho 数据库，因此旧 URL 的具体值需
重新粘贴一次。

“移到回收站”不会真正删除文件，而是移到本机的 `content/trash/`，该目录也
不会上传。需要恢复已发布文章时，把对应 `.md` 文件移回 `content/posts/`；
恢复草稿时移回 `content/drafts/`。

## 本地保存与发布

- `保存草稿`：保存 Markdown，并重新生成本地预览；草稿不公开。
- `保存并发布`：把状态改为已发布，构建网站，并在 GitHub 仓库连接完成后
  自动提交和推送。
- GitHub 未连接或登录失效时，文章仍会安全地保存在本机，页面会明确提示
  “尚未推送”，不会丢稿。

浏览器中的写作页面不保存 GitHub token。推送使用 macOS 上 Git/GitHub CLI
自己的凭据。写作服务只绑定 `127.0.0.1`，其他电脑无法从局域网访问。

草稿和回收站只保存在这台电脑，请把整个项目纳入 Time Machine 或其他本地
备份；公开 GitHub 仓库只备份已经发布的日记。

## 每日打卡

网站顶部和侧边栏新增了“每日打卡”，正式地址为
<https://iwxt.cn/checkin/>。这个页面本身和博客一样由 GitHub Pages 公开提供，
但你勾选的任务、填写的学习时长、错因和复盘内容只写入当前浏览器的
`localStorage`，不会进入 Git 仓库、公开网页源文件或其他访客的浏览器。

打卡页包含四条学习线：

- **CMC 高等数学强化班**：内置 124 节课的课名和时长，默认从第 6 节开始，
  也可以把当前进度改为第 1 至 124 节并重新排课。每节课分别记录看完、复现、
  写出适用条件、回忆等级和实际用时；只有留下有效学习证据才计入周统计。
- **算法训练**：前四周已排入具体题目、专题、难度和链接；主勾选框本身不计数，
  必须同时标记“已复现”才算有效完成。大于 1700 分的题和高难 DP 会自动进入
  二刷提醒。
- **英语六级**：9 月 14 日至 22 日按每日新词记录，9 月 23 日起转为词汇复习和
  题型练习，并要求填写实际单词数、练习类型和时间。
- **模拟赛与自定义任务**：可记录独立解题数和卡点，也能添加、改名、改时间、
  补打或取消任意日期的任务。

页面支持切换日期、补打、取消、连续天数、周完成率、周学习时长，以及 JSON
备份和恢复。由于没有账号和后端，换浏览器、清理网站数据或重装系统都会使本机
记录消失；建议定期点击“导出 JSON”。导入会先校验文件，再替换当前浏览器中的
打卡记录。

打卡页上方还有三块即时看板：

- **月历**按周一到周日显示完整月份，可切换上月、下月并回到今天。过去和今天
  会区分“全部完成、部分完成、未打卡、当天零任务”，未来日期单独显示；点击任意
  日期会打开当天的原有任务记录。
- **今日还差多少**只从现有记录计算：算法按已复现题数，CMC 有课程目录时按已看
  课节、否则按计划/实际分钟，六级按实际新词或复习词以及刷题项。没有目标时会
  显示“今日无安排”，不会补造数值。
- **关键日期**为每项分别列出报名、校赛、省赛、国赛或考试节点，并已
  纳入外研社“国才杯”和全国大学生统计建模大赛。日期配置集中在
  `src/checkin-model.js` 的 `KEY_DATE_EVENTS`；主办方已公布的精确日期可以正常
  倒计时，官方只公布月份范围的显示“官方赛期”，依上届节奏制定的
  粗略计划显示紫色“预计赛期”且不伪造某天的倒计时。校内缴费等无可用
  时间范围的项目仍保留为“待校内通知”，收到通知后再替换。

当前已经收到的具体通知包括：外研社“国才杯”综合能力校赛为 2026 年
10 月 11 日 09:30–11:00，笔译校赛为同日 16:00–18:00；百度之星第 22 届
第二场初赛为 2026 年 9 月 19 日 14:00–17:00（线上）。百度之星总决赛在
主办方最终确认前仍显示“待公告”。这三场比赛也会作为普通计划出现在对应
日期的任务清单中，能够勾选完成并填写实际用时与备注。

这次扩展继续使用原来的 `iwxt-diary-checkin-v1` localStorage 键和版本 1 JSON
结构，因此升级页面不会清空之前的打卡、备注或导入导出数据。

## GitHub Pages

项目已连接公开仓库 <https://github.com/123asdc-it/iwxt-diary>，`main` 分支
的每次推送都会通过 GitHub Actions 自动更新 Pages。生产构建使用
`https://iwxt.cn/` 根路径，不再把 `/iwxt-diary/` 写入文章和静态资源地址。

如果以后 GitHub 登录失效，可在本目录重新执行：

```bash
gh auth login -h github.com -w
gh auth setup-git
```

Pages 来源已设为 **GitHub Actions**。以后在写作页面点击“保存并发布”，工作流
会自动生成并发布网站。

## 内容格式

每篇日记是一个带 YAML 头信息的 Markdown 文件：

```markdown
---
title: "标题"
date: "2026-09-02"
status: "published"
tags:
  - "日常"
summary: "摘要"
cover: "romanticism/covers/1.webp"
createdAt: "2026-09-02T08:00:00.000Z"
updatedAt: "2026-09-02T08:00:00.000Z"
---

正文写在这里。
```

从 URL 导入并发布的图片会使用 `uploads/covers/...` 路径；原始 URL 不会写入
文章文件，也不需要在浏览器中保存任何图片站账号。

## 独立交互教程

教程目录位于 <https://iwxt.cn/tutorials/>，博客导航及对应入口文章均可进入。

- 考研计组图解与练习：<https://iwxt.cn/tutorials/computer-organization/>。王道七章范围，28单元/56可操作图解，84原创题与16道可追溯408真题导读，含两道综合题；参照夜雨的手动状态/错因笔记/筛选/备份。
- MiTA论文导读：<https://iwxt.cn/tutorials/mita-attention/>。固定arXiv v6，默认先沿22个概念学token、向量、Transformer与KV Cache，再读原8章论文主线；8token数值实验配数据流图与实验对照图，保留证据边界。
- 离散数学全书逐章教程：<https://iwxt.cn/tutorials/discrete-math/>。按第2版19章组织原创讲解、推导、例子、19个实验与38道自测，保留75小节的印刷页/PDF页索引。
- 词间六级词汇筛选：<https://iwxt.cn/tutorials/cet6-word-picker/>。保留原 HTML 界面、5,407 词条及原进度导入导出；桌面先导出进度 JSON，再在网站确认恢复。
- 定长滑动窗口进阶：<https://iwxt.cn/tutorials/fixed-window-advanced/>。对应截图的 19 道进阶与 4 道扩展，附逐题讲解、C++17 代码、81 帧窗口示例、可修改输入的基础实验及独立练习记录。
- 多语言程序：<https://iwxt.cn/tutorials/polyglot/>。
- 4bit 模型量化：<https://iwxt.cn/tutorials/model-4bit/>。沿视频的四个权重、两组输入理解数值近似，附刻度、排序、分组、单样本补偿与空间估算实验；单文件可下载离线使用。
- 夜雨知识点练习：<https://iwxt.cn/tutorials/yeyu-practice/>。题图按需加载，提供完整离线 ZIP，练习记录支持原格式 JSON 导入导出。
- 华为 ICT 网络赛道初赛：<https://iwxt.cn/tutorials/huawei-ict-network/>。这一页保留用户提供 HTML 的内容、交互及阅读设置。
多语言教程保留深绿、纸色与大字号排版，华为 ICT 教程保留提供文件的阅读界面。
各教程通过“返回博客”回到日记首页，独立于博客的壁纸与毛玻璃样式，也不操作
每日打卡的数据。

修改教程请编辑对应的 `public/tutorials/<slug>/index.html`，目录卡片配置位于
`scripts/build.mjs` 的 `tutorials` 数组。`public/` 会原样复制进
生产构建，正常运行 `npm run build` 并通过现有 GitHub Pages 流程发布即可。
博客的原主题、其他文章和写作流程保持原有方式。

夜雨练习册的题图与参考解答位于 `public/tutorials/yeyu-practice/images/`，保留原始图片字节，
网页按需加载。`yeyu-practice-offline.zip` 内包含带内嵌图片的完整 HTML；更新练习页时需要
同步更新离线包。练习记录继续使用 `yeyu-knowledge-practice-v1` 键和版本 1 的 JSON 格式，
用户可以从原文件导出，再导入博客版。讲义 PDF 本体未包含在发布内容中，出处页码予以保留。

CMC 解析按“小节 ID + 题目 ID”保存于 `question.answers[topicId]`，同题可以在不同小节使用不同方法，学习记录仍按原题 ID 共用。194 个解析入口已与用户提供的《第二代竞赛笔记合集 有封面版.pdf》核对，每份显示方法及从封面起算的 PDF 页码；原题与笔记条件有差异时单独说明。

解析可编辑源码：`scripts/tutorials/yeyu/aligned-solutions.json`，保留具体笔记依据与核验说明。修改后用装有 PyMuPDF/Pillow 的 Python 运行 `scripts/tutorials/yeyu/align-answers.py`，需要 Tectonic 与 PingFang SC 字体。它复用未变的解答图片，只排版改动项，并从同一网页生成内嵌图片的离线 ZIP。普通 `npm run build` 使用已提交的 HTML/图片，无需安装上述排版依赖。`test/yeyu-alignment.test.mjs` 检查完整覆盖、共用题的不同方法映射及原题/记录兼容。


4bit 教程为内嵌 CSS/JS 的独立 HTML，页面可直接下载离线使用。数值核心同样内嵌在页面中，`test/quantization-tutorial.test.mjs` 读取该实际实现，核对原视频算例、裁剪与舍入、误差传播、分组、补偿和元数据开销。正文的来源章节区分片中算例与补充实验；不包含视频媒体、字幕全文或真实模型评测。

滑窗进阶页使用 `fixed-window-advanced-v1` 独立存储键，备份格式为 `app: fixed-window-advanced`、`version: 1`。记录只在浏览器内，按题号存状态、笔记和更新时间；导入先完整校验，再按时间合并。`test/fixed-window-tutorial.test.mjs` 直接读取 HTML 内的数据和实际 C++ 代码，编译后与 23 题独立暴力基准比较。会员题公开来源边界保留在题目页。

词汇筛选页延续原 `cet6-word-picker.progress.v1` 键与 `ecdict-cet6-ab22ad3-basic-v1` 词库版本。`app: cet6-word-picker`、`version: 1` 的完整 JSON 可从原文件恢复到网站。其导入语义为可撤销的替换，和其他教程按时间合并的记录方式不同。

离散数学页为无外部运行依赖的单文件，独立存储键 `discrete-math-course-v1`，备份 `app: discrete-math-course`、`version: 1`，按章节保存手动状态、笔记、自测选择和更新时间；全量校验后按时间合并。`test/discrete-tutorial.test.mjs` 读取实际内嵌核心，穷举关系闭包/二部匹配、对照小图最小生成树及全部55种RSA教学消息。教材PDF与核对扫描图不发布。

MiTA页同样为单文件，纯JS数值核心独立编写、按论文式5–12统一温度；不是CUDA实现或性能复现。`test/mita-tutorial.test.mjs` 直接读取内嵌核心，核对32个网格设置的压缩/路由/联合归一、分支分区函数合并、重叠候选、最大m/k反例及完整相似度计数。页面不操作任何学习存储；8道自测选择仅保留本次打开期间。

计组教程源文件位于 `scripts/tutorials/computer-organization/`，课程/真题数据、数值核心、图解、记录与UI分别维护。修改后先运行 `node scripts/tutorials/computer-organization/build.mjs`，重新生成独立单文件 `public/tutorials/computer-organization/index.html`，再做全站构建。生成不含时间戳，可重复得到相同内容。原卷PDF只链接院校公开档案，不上传教材或试卷。

计组存储键 `co-exam-workbook-v1`，备份 `app: co-exam-workbook`、`version: 1`。按独立题号保存手动状态/笔记/ISO更新时间，导入先验证全部有效记录再合并较新项；图解参数仅保留当前打开期间。`test/computer-organization.test.mjs` 读取实际发布页核心，核验穷举加减/乘除、Cache独立基准、真题计算和记录合并。保持夜雨、词汇与打卡数据独立。

### 既有教程的基础阅读层

九个教程均加入同页的概念解释：共92个原创基础单元，每点先给动机和分步图，再写定义/条件、小例子、自问与参考解释。正文虚线术语和章节旁入口可打开概念，并返回原文位置；各篇有自己的基础阅读路线，补充前提也可查找。新模块不读写localStorage，不把看图、展开答案或阅读自动记成掌握。

维护源码位于 `scripts/tutorials/foundations/`：`catalog.mjs` 配各篇路线/章节对应，领域数据模块存讲解，`math.js` 是可独立核对的纯函数，`figures.js` / `ui.js` / `style.css` 绘图与阅读交互。MiTA原始八章模板在 `mita-base.html`，构建器加默认从零一章、六步数据流图与报告值图表；原MiTAMath核心保留。

`npm run build` 自动生成九篇自包含HTML并同步夜雨离线ZIP；也可单独运行 `node scripts/tutorials/foundations/build.mjs`。离线ZIP同步使用系统`python3`的标准库zipfile，当前macOS与Pages runner均可运行，不安装额外Python包。每页内联所需内容/样式/脚本，文件与网络版都能补概念；外部原资料链接需网络。计组专用生成器也接入同一装饰器，避免重新生成后丢失学习层。生成前先去掉已生成区块，反复运行字节稳定。

MiTA可用 `?concept=kv-cache#start`、`?concept=transformer#start` 直接进入相应概念；普通网址仍从token开始。KV复用图是固定投影的单层单头算例；缓存容量另以明确层数/头数/维度计算。MiTA论文未评估LLM decoding，不把这份背景教学当成其KV缓存压缩或生成性能验证。

`test/tutorial-foundations.test.mjs` 核验92节点无缺前提/环、全部图解起止、单文件脚本/JSON/幂等、注意力/遮罩与缓存独立计算、带负数滑窗、图与计数、量化和网络地址边界。原题数据、答案、图片、记录键与导入语义继续沿用各教程约定。

### 后续视频教程的默认约定

自 2026-11-01 起，收到与多语言程序视频类似的技术或学习视频，且没有其他
明确要求时，默认核实视频内容、整理为中文交互教程，并通过现有博客发布流程
同步上线，无需重新选择配色或确认是否接入博客。

- 以 `public/tutorials/polyglot/index.html` 为样板，保留深绿、纸色、高对比度及
  清楚的章节排版。桌面正文 20px、手机 18px、代码 17–18px，功能文字至少 16px；
  不添加装饰性的英文小标题和密集小字。
- 新教程使用独立的 `public/tutorials/<slug>/index.html`，根据内容安排交互实验，
  在第一章先解释学习动机与实际用途，再展开机制。准确区分原视频内容和补充说明。
- 博客主体延续原主题，新增入口文章与可发现的导航链接；教程保留返回博客，
  并将新路线加入 sitemap。不要覆盖旧教程或改动每日打卡数据。
- 完成相应检查、构建与手机/桌面关键交互验证后发布；再核对正式地址和线上产物。
  用户对单个视频给出更具体要求时，以该次要求为准。

## 在日记里写代码

正文支持 Markdown 围栏代码块。在三个反引号后写语言名称，发布后会
自动显示语法高亮、语言标签和复制按钮：

````markdown
```cpp
class Solution {
public:
    int answer() {
        return 42;
    }
};
```
````

常用的 `cpp`、`python`、`javascript`、`typescript`、`java`、`go`、`rust`、
`bash`、`html`、`css`、`json` 和 `sql` 均支持高亮。在反引号中写一小段
内容，例如 `` `result += 1` ``，则会显示为行内代码。

## 沉浸视觉效果

主页壁纸现在会铺满整个站点，顶部导航、文章区、个人资料、标签归档和
页脚都采用半透明毛玻璃框；文章页将完整封面和文章标题分区呈现。首页和
文章页还带有海蓝流光、分段标题入场、桌面端柔光跟随、卡片轻微 3D 倾斜
与扫光、滚动显现、阅读进度和回到顶部。

这些都是渐进增强：关闭 JavaScript 时正文仍可读，触屏设备不启用鼠标
效果，系统开启“减少动态效果”时会自动停用主要动画。浅色与深色模式会
分别调整玻璃框的不透明度和文字对比度；手机端自动改为单栏布局。

可在 `site.config.json` 修改站名、副标题和作者名。

## 首次加载优化

当前动漫主页壁纸保留原构图和色彩，公网版本使用经过目视检查的
1920 × 1080 WebP（约 118 KB），替代原先约 3.38 MB 的 PNG。原始 PNG 只保留
在本机忽略目录 `content/original-assets/site/`，不会进入 GitHub 仓库或 Pages
发布包。

生成页面会优先预加载当前壁纸。关闭状态的导航抽屉不会提前下载其装饰背景，
只有鼠标指向、键盘聚焦或打开菜单时才加载；导航文本和控制按钮不依赖图片，
因此慢速网络下仍然可以操作。以后从写作页更换新的壁纸 URL 时，导入器仍会
保留源图片格式；若新图较大，应在发布前再次压缩为适合网页的 WebP。

## 验证命令

```bash
npm run check
npm test
npm run build
```

主题素材来自 Romanticism 2.2，原许可文件保留在
`public/romanticism/LICENSE.txt`。


## 文章封面显示

首页与教程目录采用独立的封面区和文字区：桌面左右排列，手机上下排列。封面通过实际图片元素按完整比例显示，标题、日期、标签与摘要自然换行，不再叠在图片上，也不截断标题。文章页的封面和标题同样分区，支持深浅色模式。

八个交互教程的封面改为统一纸色与深绿的主题图形，源文件保留在各自 `public/tutorials/<slug>/cover.svg`。发布图片使用 `public/uploads/covers/` 中新的内容哈希 PNG，入口文章的 `cover` 和 `scripts/build.mjs` 里的目录配置同步引用；旧图片保留。


## 两篇三维视觉论文交互教程

`/tutorials/relift-3d/` 与 `/tutorials/honeycomb-surfels/` 各有10章，先解释像素/射线/表面片等前提，再逐步操作方法图。来源数据与原创讲解在 `scripts/tutorials/geometry-papers/{relift,hexels}.mjs`，纯数值核心为 `math.js`，图解为 `figures.js`，样式和交互分别为 `style.css` 与 `ui.js`。`build.mjs` 生成两份独立HTML；全站构建会先调用它，避免手改生成文件被覆盖。

两篇不写入任何学习记录，图解参数与自测仅在本次打开期间保留。离线下载保存完整源HTML，运行不依赖CDN、作者权重或网络。教学算例与论文报告分开标注，实验表保留版本、预算、单位和硬件范围；没有执行作者训练/测速。原论文及缓存仅在本地ignored `output/papers/`，不发布整篇PDF或作者照片。

更新时保留固定v1来源和固定提交，核对表格及不利结果。运行 `node --test test/geometry-papers.test.mjs` 检查坐标、支撑、求交、混合、预算、报告数据、全部图解步骤与离线生成一致性。封面源SVG在对应public目录，PNG采用内容哈希并同步文章与目录引用。

## 独立巡检演示

无人船岸堤巡检原型位于 <https://iwxt.cn/apps/usv-inspection/>，从侧边导航的
“巡检演示”进入。该入口不创建博客文章，也不加入文章列表或教程目录。

文件在 `public/apps/usv-inspection/`，来自独立四页原型的发布副本，保留素材、
报告下载、三维示意和青岛街道地图；页面提供返回博客链接。它是静态演示，
没有接入真实设备控制或实时检测数据。部署沿用现有 GitHub Pages 工作流。
