# 2026-11-02 既有教程前置概念与全程可视化完善（进行中）

- 目标：用户要求完善此前教程，概念解释清楚、配合可视化，尤其MiTA要让不懂Transformer/KV Cache的人可从文内学起；现有配色、题目、学习记录与博客发布约定保留。
- 初始上下文：main干净、f1d5d7f；读取README/TASK_STATE、当前9教程、相关测试与记忆中的内容/存储/生产构建约定。新工作树codex/tutorial-foundations-20261102。使用concept-learning梳理最小依赖，Playwright核验；范围明确的只读子任务核对Transformer/KV Cache定义与MiTA边界。
- 发现：MiTA第一屏直接引入Q/K/V/向量/softmax，缺token→向量→Transformer→生成/KV Cache；原数值实验表格多，结构与数据流图少。其他教程也有术语首次出现缺动机/小例、公式符号默认已知的门槛。
- 计划：逐页列前置概念与跳步→建立各教程独立内联的概念学习层（动机、定义、具体例、可操作图、条件、单题解释与去向）及原章节的就地回看入口→MiTA新增默认从零路线并强化原八章图解→补其他教程对应前置路线与章节桥接→数学/语义、记录/离线、响应式/焦点/交互验证→现有Pages发布/HTTPS核验与回填。
- 范围：MiTA、4bit、多语言、滑窗、离散数学、华为ICT、夜雨CMC、计组、六级工具均检查并补各自需要的学习入口。避免把工具教程强改成课程；旧题图/答案、题ID、状态键/格式保持兼容。
- 风险：类比当机制、Transformer等同所有LLM、图像token混成文字词、KV缓存混同参数/答案缓存、标准因果解码误说为MiTA已验证、公式省单位/假设、字太小、补课弹窗打断阅读、生成单文件丢注入、离线包不同步、记录被重置。所有新数值图用明确教学模型/条件，页面不给自动掌握判定。
- 完成标准：新手可在同页找到术语来源、看见具体计算、解释各步为什么；不以阅读完成代表学会，不承诺所有人零学习成本。保存修改/测试/部署证据于本记录，原始源资料不公开复制。
- 已实现：统一源码scripts/tutorials/foundations/，92概念单元，各有动机、定义、具体例、交互模型、条件、自问与参考解释。9教程内联独立学习层，章节回看与虚线术语入口、原文位置返回；MiTA默认新增从零一章（22节点），原8章保留，六步数值实验增加对应数据流图，方法图能跳到实验步骤，实验报告增加条形对照。
- 学习路线：AI22、4bit8、多语言6、滑窗8、离散17、夜雨11、计组9、华为18、词汇4；需要的补充前提可在同篇查到。尚未运行学习者迁移检验，不把内容发布说成用户已掌握。
- 数值模型：有向关系/无向图、真值表、集合、模运算、排列组合、极限/导数/积分、点积/线性层、矩阵、softmax、注意力/遮罩、因果缓存前后对照、复杂度、位编码、量化、窗口、网络封装及分步流程。大部分可改参数或连边，结构图可逐步跟踪。
- 兼容：新模块不读取/写入任何学习记录；原题JSON/图像/答案与既有核心保留。夜雨单文件离线ZIP同步注入相同学习层；生成器接入全站build与计组生成器，重复生成保持字节一致。
- 初轮验证：77/77全站测试、check和UTC生产构建通过；新8测试检查前置依赖无环、所有92模型起止、单文件脚本/JSON/幂等、softmax/遮罩、KV复用独立数值对照与512MiB预算、千余带负数窗口、64图对并查集、组合枚举/模逆元与量化规则、IPv4边界。浏览器已验证MiTA默认从零、9章节、缓存步骤与手机390px无溢出/字体≥17px。发现并修正新增侧栏入口缺nav-link类造成的低对比度。
- 最终本地验证：77/77测试、check、UTC生产构建、diff --check通过。Playwright2194检查通过：9篇所有主路线概念在1440/768/390/320px起止/字号≥16/弹窗宽度；存储保持原值；Esc/焦点返回；术语搜索；MiTA方法图跳转与12组m/k×6步数据流；位点击、负数窗口/非法输入、组合排列、下一跳与帧地址；真实下载并file://断网操作缓存图。无控制台/运行错误。追加直达概念URL、可选容量参数、2张实验报告图与320px检查通过。
- 回归发现离散首页原生导入控件窄屏溢出，已在新样式中按该教程限宽修复。MiTA新增侧栏nav-link对比度修正。容量进阶参数折叠为可选项，不挡基础KV复用过程。
- 保全核验：8个非MiTA页面去掉新增生成块后与基线逐字节相同；夜雨离线HTML去掉新增块后与原始ZIP内容相同（内嵌题图/答案未改）。MiTA原数值核心逐字节不变，原8章/8自测保留，新增默认从零章和图解。九篇文章加更新说明，MiTA卡片说明与README维护方式更新。
- 构建说明：全站build自动内联基础层；计组专用生成器同样接入，避免覆盖。夜雨离线ZIP用标准Python3 zipfile同步，仅HTML变化时才写回，防跨平台重复压缩差异。
- 当前工作：本地完成，等待提交/Pages发布及HTTPS与线上交互核验。剩余：发布记录、主检出干净时快进、关闭8884预览与隔离foundations-qa。

# 2026-11-02 考研计组图解与练习（已完成并上线）

- 当前目标：按王道计组公开七章范围，结合免费原理资源与历年408真题制作原创教程，参照夜雨CMC练习册；用户强调尽可能全程可视化，并授权发布博客。
- 初始上下文：main干净、1aeee95；已读README/TASK_STATE、git状态和夜雨页面。独立工作树codex/wangdao-co-20261102；保留博客主题、完整封面/图文分离卡片及现有教程。
- 计划与主要风险：核验来源→写概念/推导/例子/题→每考点操作图解→独立记录/备份/离线→全站与浏览器检查→Pages发布与HTTPS核验。风险包括无教材全文、字/字节、CF借位/进位、流水线时序、非规格化浮点、Cache时间口径和备份覆盖；都在对应条件中限定。
- 来源：出版社官方2027版bookid=69045确认王道论坛、ISBN9787121517945和七章范围，但目录textarea为空且未取得全文。28个单元是本站学习组织，不冒称原书逐页讲解。参考MIT 6.004公开课程、Oracle IEEE文档、RISC-V固定版本规范；来源链接在教程内。
- 真题依据厦门工学院公开2022/2023八页扫描原卷，逐题给年份/题号/PDF页定位。只展示必要条件摘要和本站核算解答，不上传整本教材、原卷或扫描图。output/exam-audit缓存仅本地ignored。第三方文本镜像页码/选项不能直接沿用：根任务目视扫描确认2023Q12为C、PDF3；Q13–19也为PDF3，Q21/22为4；2022Q15/16/18/19为3，Q43/44图题为7。2023Q43存档题面存在数组维度/循环上界不一致，未选用。
- 实现内容：7章、28单元、56考点，每个考点正文前均有可操作图解；84原创题+16真题导读=100题。真题为2023 Q12–19/21/22、2022 Q15/16/18/19/43/44，包含两道综合题。
- 图解：24种模型（含概念分步流程），数值模型可改参/逐步/回退/到结果。覆盖CPI、补码/标志、Booth/除法/移位、IEEE754及非负加法、大小端、存储芯片/地址分区/交叉存储、磁盘/DMA、Cache/AMAT、页表/TLB、操作码/寻址、CPU、单总线YZ、微指令、中断、流水线和总线/I/O。CPU是12位字地址/16位字的教学机，流水线有明确转发与WB/ID时序，未建模机制不宣称已实现。
- 工作簿：章/来源/题型/状态/多关键词筛选，范围内随机、折叠解答、手动状态、错因笔记、JSON完整验证再按时间合并、打印当前题组（隐藏图解和解答）、单文件离线HTML约197KB。桌面正文20px/手机18px，功能字至少16px，深绿纸色。
- 存储：co-exam-workbook-v1，app=co-exam-workbook/version=1；只持久化独立题状态/笔记/ISO更新时间，图解参数仅当前打开期间。看图/解答不自动完成。损坏原存储警告并只保留会话记录，不覆盖原值。已有夜雨、词汇、打卡记录保持独立。
- 变更文件：scripts/tutorials/computer-organization/下课程、真题、数值核心、图解、UI、状态、样式和构建器；public/tutorials/computer-organization/index.html和cover.svg；哈希封面PNG d0b3c8...2352d；content/posts/2026-11-02-computer-organization.md；scripts/build.mjs新增第9项目录；test/computer-organization.test.mjs；README与本记录。修改源码需先运行专用build.mjs生成单文件。
- 本地验证：npm run check、69/69全站测试、UTC生产构建11篇文章、git diff --check通过。新增11测试读取实际发布HTML核心，核验131072组8位加减、全部4位Booth乘法、3840组除法、120组Cache对独立模型、IEEE特殊数、32位借位/扩展编码/磁盘综合结果、备份原子校验及合并。生成器无时间戳，重复构建哈希一致。
- 浏览器：1249项检查通过，56图解在1440/768/390/320px初始/结果状态、字号≥16px/无整页溢出；100解答与全部例题带入；记录刷新/筛选/随机/导入新旧合并及无效保护；打印、菜单焦点/Escape、手机筛选、真实离线下载后断网、9项目录/首页/文章链路、原夜雨和5407词汇回归；无控制台/运行错误。另验证损坏存储不覆盖与DOM ID唯一。
- 视觉核验：复核桌面、手机、流水线与CPU截图。检查中发现CPU写回高亮箭头仍指读出方向，已改为逐条有向传输，补写回/读取/ALU三路回归，再次69测试及生产构建通过；补浏览器检查所有27个CPU状态与320px宽度。
- 发布进度：9601afbbd5fcf3de1c972478c342ec227e59d5db经Pages工作流41381978101成功上线，教程本体与目录已逐字节匹配。入口文章缺少显式时间字段导致构建时自动填“当前时间”；已按实际首次提交时间2026-11-02T11:14:13+08:00补齐createdAt/updatedAt，避免不同构建的更新时间漂移。
- 最终发布：fa4e453a97145d1ab2b4c59df88e1ffed0987b71经GitHub Pages工作流41382108154成功部署。正式地址https://iwxt.cn/tutorials/computer-organization/；目录及首页入口已更新。
- HTTPS核验：教程196945字节、9项目录、入口文章、哈希封面、sitemap.txt与首页全部200，逐字节匹配UTC生产构建；真实线上下载HTML也与发布源文件逐字节一致。证据output/live-bytes.json和output/playwright/co-live-offline.html。
- 线上浏览器：已验证56/100/16计数，9个关键图解及2022两道综合题、答案、笔记与状态刷新、阅读不自动完成、1440/390/320px字号与宽度、移动菜单/焦点/筛选、真实下载、9项目录/首页/文章及原夜雨链路。脚本末尾旧词汇页导航遇30s超时，补查确认5407词已正常载入；随后新课程计数/手机布局/桌面手机截图通过，补查无运行或控制台错误。未为网络超时改动旧教程。
- 桌面与手机线上截图已复核，教程已在Codex浏览器打开。关闭本任务public8882/dist8883预览服务及隔离QA浏览器；主检出确认main干净后快进到交付提交。
- 剩余必需工作及无法自动步骤：无。
- 无需额外人工资料；未取得教材全文的范围边界已在教程和入口文章说明。

# 2026-11-01 Article cover and card repair (completed and live)

- Goal: fix cropped and visually cluttered article/tutorial covers reported in the user screenshot of iwxt.cn.
- Initial context: primary checkout clean at 18d5ddc; isolated worktree codex/blog-cover-fix-20261101. Existing GitHub Pages workflow retained.
- Root cause: wide short cards use background-size:cover and put titles/metadata/summaries over text-heavy cover graphics.
- Plan: separate media and copy on home/tutorial cards; contain whole covers; split post header image/title; redesign eight tutorial cover SVGs with sparse subject illustrations and generate new content-hashed PNGs; run project checks, responsive/keyboard/theme/navigation/browser tests, then publish with existing Pages workflow and verify live assets.
- Completed: full-image cards, image/title post headers, 8 editable SVG illustrations and new content-hashed PNGs. Desktop image/copy split; mobile stacked; balanced titles wrap without truncation.
- Verified: npm run check, 58/58 tests, UTC production build, git diff --check. Playwright checked 86 cards/headers across 1440/768/390/320px, dark/light modes, contain rendering, no text/image overlap or clipped titles, focus and keyboard navigation, tutorial links and vocabulary default count; zero runtime/console errors. Desktop/mobile/dark/post screenshots inspected.
- Final responsive check passed again after balancing long titles. CSS links now use a content version to fetch updated layout reliably.
- Published: 66434ba18955558f2cd11b626dc578c9755ec0f7, GitHub Pages run 41281338467 completed successfully.
- Live verification: 12 HTTPS HTML/CSS/PNG assets match the build byte for byte using SITE_BASE_PATH=, SITE_URL=https://iwxt.cn and TZ=UTC. Local defaults use a localhost canonical URL, so production URL variables must be set for byte comparisons.
- Live browser confirmed 10 home cards, 8 tutorial cards, the post header, complete covers and unclipped text at 1440/390/320px, with zero runtime or console errors.
- Remaining required work: none. Changes are ready for the user to review at https://iwxt.cn/?v=66434ba#diary-feed.
- Scope: no tutorial lesson/word-picker/check-in logic or browser storage changes. Keep wallpaper, main navigation and sidebar. Preserve old cover files.
- Risks: new image/copy layout must wrap long titles at 320px; dark mode needs strong contrast; generated cover URLs and post metadata must stay in sync; do not overwrite concurrent changes on main.

# TASK_STATE

## 2026-11-01 六级词汇筛选迁移（已完成）

- 本轮交付：桌面六级词汇HTML迁移、离散数学19章教程、MiTA论文教程三项均已完成并部署。词汇保留原界面/词库/交互，新教程延续深绿与纸色。
- 原文件869,496字节，SHA-256 a1580ccc981ba11d4ba0e11210519f0315557372506ad01927d0d5b82f518502。原文件保持不变。
- 来源清点：5,407词，默认基础词109、初始待筛5,298；词库id ecdict-cet6-ab22ad3-basic-v1；3段内联脚本、无外部运行脚本或网络请求、未发现凭证变量。原ECDICT来源与MIT许可保留。
- 迁移路径：/tutorials/cet6-word-picker/；只添加SEO元信息、返回博客导航及响应式包装，原3段脚本逐字保持。
- 记录契约：cet6-word-picker.progress.v1，app=cet6-word-picker/version=1，保留原词库id。原页导出“进度JSON”→博客导入→确认恢复；该恢复是替换并可撤销，不是按时间合并。file://与HTTPS不自动共享记录。
- 已实现：public/tutorials/cet6-word-picker/index.html 与 cover.svg；哈希封面 uploads/covers/5ba639a519efb55c890018523fefeba7d34e692ad85f13d582212f7e324783df.png；入口文章、目录第6项、README与状态记录。
- 验证：原文件 SHA-256 不变；3段脚本与原文件逐字一致并通过语法检查。npm run check、43/43既有测试、UTC生产构建（8篇文章）通过。
- Playwright 65项通过，无浏览器运行或控制台错误：实际从原 file:// 文件标记并导出完整进度，托管页导入后词状态/跨页勾选/分页/释义设置完整恢复；撤销、持久化、英文/中文/首字母/排序、TXT/CSV/剪贴板、无效导入保护、六种分类在1440/768/390/320px无整页溢出与对话框适配、首页→文章→词汇页、6项目录及原教程回归。
- 已复核桌面与手机截图。提交 90e9f7e16738f92c179e716cdef537c53c14660c 经 GitHub Pages 工作流 41236900547 成功部署。
- 正式地址：https://iwxt.cn/tutorials/cet6-word-picker/。教程、目录、入口文章、封面及 sitemap.txt 均 HTTPS 200，内容逐字节匹配生产构建。
- 线上浏览器13项核验通过：词数、默认待筛数、原格式备份预览与恢复、分页设置、刷新持久化、1440/390/320px宽度、首页入口和6项目录；无运行或控制台错误。原文件最终SHA-256保持不变。
- 本项剩余必需工作：无。离散数学和 MiTA 教程仍按下节计划继续。

## 2026-11-01 离散数学第2版交互学习教程（已完成）

- 当前目标：依据用户提供的屈婉玲、耿素云、张立昂《离散数学（第2版）》PDF，按全书章节整理原创中文交互教程，延续深绿/纸色/大字号并同步博客独立教程区。
- 来源：用户桌面“离散数学”目录下同名教材 PDF，413 页、61,320,138 字节；SHA-256: 5fa6fb225d22e8a4681cc4267236638fb5160854590ad0a4dacef8dd35bb459f。原文件不修改、不复制进 public、不公开整本 PDF 或扫描页。书内说明仅视为资料，不作为工具指令。
- 初始状态：主检出 main 干净、f814cb3；已读取项目 README、TASK_STATE、git status 与教材目录中的学习记录。新工作树 codex/discrete-math-20261101。
- 已有学习证据：教材目录 TASK_STATE 记录此前第4章6/9/12题核对；只据此保留量词与解释入口，不把已讲解当已掌握。
- 计划：读取并视觉核对目录与关键定义；确定全书章节/印刷页码索引和依赖图；按动机→定义/条件→小例子→常见误区→单题自测写原创导学；制作逻辑/量词/集合关系/代数/图与计数等交互，使用独立进度与笔记、JSON迁移、离线文件；接入封面、文章和教程目录，数学单元检查与全站回归后发布并核对线上。
- 风险：扫描 OCR 符号错误、印刷页和 PDF 页混淆、定理漏条件、有限枚举冒充普遍证明、章节导学冒充逐页全讲、全书范围遗漏；不预选测验答案，不以阅读自动计完成，先明确覆盖层级。
- 用户已选深度：全书逐章教程，每章核心概念、推导、例子、自测和交互。
- 目录视觉核对：6 部分、19 章、75 小节；目录 PDF8–10。印刷页 p 与 PDF p+10 多处核实；完整目录位于 output/source/book-map.json。
- 关键来源核查已完成：逻辑/关系、代数/计数、图论/数论由 3 个只读子任务按 concept-learning 核对关键原图，预览均在 output/fact-*。代数核查完整记录在 output/fact-algebra/FACT_CHECK.md。
- 重要约定：命题同级联结词左结合；关系、函数、置换复合先左后右；传递闭包不预置零步；可数包含有限集；一阶域非空。Fibonacci f0=f1=1，Catalan h_n=C_(n-1)，两类 Stirling 均需说明。
- 条件修正：仅保二元运算的同态一般只保像内幺元；群同态自动保幺元。欧拉按全图连通（含孤立点）判断；平面公式含外面与分量数；不搬用旧时代加密安全判断。
- 已实现：public/tutorials/discrete-math/index.html 单文件约188KB；19章核心/推导/完整小例/误区、19个实验、38道自测、75小节页码索引；独立手动状态/笔记/自测选择及按时间合并的备份。原生封面SVG/哈希PNG、入口文章、目录和README已接入。
- 数学核心8项测试通过：512关系正长度传递闭包独立可达性对照、512二部图匹配/Hall/最小点覆盖、30组带负权Kruskal对所有生成树取最小值、64简单图握手/A²计数、全部55种RSA消息恢复以及逻辑语法、书中递推下标与代数条件。
- 本地浏览器335项通过：19章在1440/768/390/320px无整页溢出、可见文字≥16px；38道自测无预选、答题不自动完成；全部实验编辑、反例与错误输入、记录/笔记持久化、JSON全量校验与新旧合并、未知存储保留、菜单焦点/Escape、搜索、单文件下载与断网计算、文章和7项目录入口。无运行或控制台错误。
- 修复浏览器核验发现的实验字段ID重复；各章实验控件加独立前缀。补充全部内嵌JS语法与常量公式检查（9项数学/语法测试）。桌面/手机截图已复核；调整正文焦点轮廓、侧栏品牌悬停颜色和目录过渡。
- 最终验证：npm run check、52/52全站测试、UTC生产构建（9篇文章）通过；最后样式调整后19章185个DOM ID唯一、悬停色和手机宽度通过，最终离线下载与源码字节一致。
- 发布：提交9e8fd9520d3c2d160aa65d2bfab8c61b39924959经GitHub Pages工作流41237976776成功部署。正式地址：https://iwxt.cn/tutorials/discrete-math/。
- HTTPS：教程、7项目录、入口文章、封面与sitemap均200，逐字节匹配本地生产构建。线上30项检查通过：19个实验默认可算、38自测、笔记/状态持久化、数论结果、手机18px和无溢出、菜单焦点/Escape、离线下载与入口文章；无运行或控制台错误。
- 本项必需工作剩余：无。原教材未改动或上传；全书章节核心导学已交付，不宣称逐页复刻或审校全部原书习题。
- 后续追加的MiTA论文教程见下节；离散数学已独立完成发布。

## 2026-11-01 MiTA论文交互教程（已完成）

- 当前目标：把 arXiv:2602.01219 整理成中文独立交互教程并发布，沿用深绿/纸色、大字号。
- 来源：固定论文v6（2026-09-27），作者仓库固定提交95460f703ef5bd5d814c45a6ff52d9582207d01c。只读来源核查在output/mita-source/SOURCE_AUDIT.md；已读取正文公式、表格、PDF图9和作者代码，不运行训练或下载权重。
- 计划与决定：8章从标准QKV、fast weights、压缩/路由到六步MiTA、8token实验、复杂度、实验证据及边界；做原生封面、入口和目录，验证数学及响应式/离线后按现有Pages流程发布。
- 风险：联合softmax不能写成分支输出相加；候选生成开销不能漏；合成输出差距不是准确率；图5速度不能外推LLM解码。按公式字面演示，注明公开实现共享温度差别、附录C文字与图9不符、m=k=N保留共享项不保证dense相等。
- 已写8章原创解释与8道自测、独立数值核心和单文件页面初版。网格N=8/d=2、m∈{1,2,4,8}、k=1..8、s=1；小向量为手工教学数据。没有训练、评测或声称复现论文性能。
- 数学6项测试通过：32网格设置全局压缩/精确路由/联合归一、稳定softmax、重叠专家保留重复项、分支质量加权、m=k=N反例、完整相似度计数。
- 已接入 public/tutorials/mita-attention/index.html（约55KB）、原生封面SVG与哈希PNG、入口文章、8项目录及README。8道自测无预选，只在本次打开期间保存选择，不操作学习存储。
- npm run check、58/58全站测试、UTC生产构建（10篇文章）及diff检查通过。最后仅显示文字/样式调整后，15项数学/语法测试与生产构建再次通过。
- 浏览器222项通过：8章在1440/768/390/320px无整页溢出、可见文字≥16px；8个dense query、6步实验、32个m/k组合、候选切换、全8项压缩、联合权重归一、格子键盘焦点、预算无效/高开销设置、自测反馈、来源边界、手机焦点圈/Escape、完整存储保持、单文件下载/断网计算、首页/文章/8项目录链路、词汇和离散教程回归。无运行或控制台错误。
- 已复核桌面、手机、实验与封面截图。最终手机格子使用简短Q向量；补明网格换行不改变池化组。同步给离散第18章四点色结论加“简单平面图”条件，并隐藏空提示条。
- 发布：提交156b370a87f1d8d9bcf4a82939825511bc8cbe4d经GitHub Pages工作流41238289836成功部署。正式地址：https://iwxt.cn/tutorials/mita-attention/。
- HTTPS最终核验：主页、8项目录、三份新工具/教程、三篇入口文章、三张哈希封面及sitemap共12个URL，均200并逐字节匹配UTC生产构建。MiTA线上下载54,930字节，与最终源码一致。
- 线上浏览器28项通过：章节、自测无预选、20/18px字号、dense与六步实验、m+k项联合归一、切换query、完整打分计数、图9数值、手机宽度与菜单焦点、离线下载、8项目录/文章入口；新发布后离散笔记及词汇已导入状态继续保留。无运行或控制台错误。初次复核读取了浏览器旧缓存，清理隔离QA浏览器缓存后对当前版本完整通过，HTTP常规地址已匹配。
- 最终来源完整性：教材PDF与词汇原HTML的SHA-256均与接入前相同。所有源PDF、论文代码快照及核对图片仅留ignored output，不发布。
- 本项剩余必需工作与人工步骤：无。三项任务都已完成，用户记录跨设备仍需各自JSON备份迁移。

## 2026-11-01 定长滑动窗口进阶题单（已完成）

- 当前目标：按用户截图的 §1.2 进阶（选做）19 题与思维扩展 4 题，整理中文交互教程并发布到博客；范围共 23 题，不扩展到整张双指针题单。
- 参考来源：https://leetcode.cn/discuss/post/3578981/ti-dan-hua-dong-chuang-kou-ding-chang-bu-rzz7/ 与各题官方题面；截图题号与当前题单一致。题号：1052,3679,3439,3694,1297,2134,1652,4043,4044,3652,567,438,30,1888,2156,2953,3672,2067,2524,2200,1461,1016,2653。
- 初始上下文：主检出 main 干净，aa6343b；读取 README、TASK_STATE、git status 与现有交互教程约定。新工作树 codex/fixed-window-advanced-20261101，从 origin/main 建立。
- 计划：逐题核对定义、约束、接口与复杂度；按维护量/环形/频次/分组/哈希分组讲解，给逐题拆解、自写 C++17 参考实现及自造小样例；增加窗口逐步演示、搜索/筛选/练习记录与离线导入导出；接入博客入口/封面/目录，验证算法、桌面手机交互，发布后核对 HTTPS。
- 风险与边界：新题和会员题不得凭名称猜定义；区分原日期窗口、环形相邻边及旋转重复计数；记录 substring/hash 查找的实际成本、滚动哈希碰撞、64 位溢出与模逆前提；代码本地验证不宣称力扣已提交；练习完成由用户标记，不以打开题解计数。
- 内容和样式：沿用深绿、纸色、高对比度；桌面正文 20px、手机 18px、功能字至少 16px；不整页抄录官方题面，不改动旧教程和打卡存储。
- 技能：概念学习组织依赖与误区；委派只读核查新题、难题与会员题，不进行外部模型评审。
- 来源进展：20 道公开题已通过官方匿名 GraphQL 取得题意与 C++ 签名；3 道会员题官方正文/代码接口均为空，仅公开提示可读，定义/约束/签名另据 doocs 作者公开仓库核对并在页面标注。
- 已完成只读算法核查：新题的时间窗口/切口/负收益边界，30 的分词偏移与 substring 成本、1888 奇偶、2156 无逆元倒序、2953 的 good 计数、1016 两种位长及前缀无包含必要条件。
- 内容初稿：23 题各有转化、维护量、正确性说明、两条误区、复杂度、自写 C++17 参考实现；自造短例子与 81 帧窗口状态已生成。
- 算法校验：实际嵌入 HTML 的 23 份 C++17 代码已用 clang++ 编译，1,489 组独立暴力对照及 64 位边界通过；没有宣称力扣提交通过。
- 已实现：public/tutorials/fixed-window-advanced/index.html（约114KB单文件）、原生封面 SVG、public/uploads/covers/e6ecb569f4df17c086d5da5c3844a2f15174c1c362c9ed076760edef014ca557.png、入口文章、目录配置、test/fixed-window-tutorial.test.mjs 与 README。
- 页面功能：23 题/6 类思路，81 帧短例状态、可修改数组的入窗/出窗/结算实验、代码展开与复制、搜索/范围/思路/状态筛选；手机折叠筛选与目录。练习键 fixed-window-advanced-v1，app=fixed-window-advanced/version=1，JSON 全量校验后按时间合并，不自动标记完成。
- 初步验证：npm run check、43/43 测试（含 4 个新增测试）、3 个内嵌 JS 语法检查与 UTC 生产构建通过，博客当前共 7 篇入口文章。
- 浏览器验证：Playwright 341 项通过，无运行/控制台错误。覆盖 23 题在 1440/768/390/320px 的正文/代码展开与最小 16px 字号、81 帧状态、导航、所有筛选、自定义数组/负数/无效输入、实际剪贴板、手动状态与笔记持久化、JSON 导入导出/无效保护/新旧合并、未知外部存储保持、移动焦点/Escape/跳过链接、博客文章/5 项目录/4 份旧教程回归、离线文件断网使用。
- 手机修正：筛选默认折叠，避免占满首屏；去掉重复计数行。目录 visibility 过渡曾使首次焦点转移失败，已仅对 transform 做过渡并在下一帧聚焦，最终检查通过。备份文件名按 Asia/Shanghai 日期生成。
- 下载文件逐字节匹配最终单文件源码；已复核桌面与手机截图。
- 发布：提交 e9ec9f75a9c0dec0a81fbf1ac2402cce3d12f42a 经现有 GitHub Pages 工作流 41235486396 成功构建并部署。
- 正式地址：https://iwxt.cn/tutorials/fixed-window-advanced/；入口文章 https://iwxt.cn/posts/2026-11-01-fixed-window-advanced/；目录 https://iwxt.cn/tutorials/。
- HTTPS 核验：教程两种网址、目录、入口文章、哈希封面与 sitemap.txt 均返回 200，逐字节匹配 UTC 生产构建；完整教程 114,352 字节。
- 线上浏览器 20 项检查通过：23 题、桌面/手机字号、深链与完整代码、窗口示例、状态与笔记持久化、手机筛选/焦点/Escape、会员来源说明、离线下载、首页→文章→教程；无运行或控制台错误。下载 HTML 与源码逐字节相同。
- 剩余必需工作与人工步骤：无。会员题完整官方正文的访问限制已经标注，参考实现没有宣称力扣提交通过；不改变现有教程或每日打卡数据。

## 2026-11-01 4bit 模型量化视频交互教程（已完成）

- 当前目标：将 BV1AFpB6TE3o《模型压到4bit之后，究竟丢掉了什么？》整理为中文交互教程，沿用深绿、纸色、大字号，并发布到博客独立教程区。
- 已读取上下文：项目 README、TASK_STATE、git status 与现有教程约定；主检出干净，新工作树从 origin/main（80bc763）建立。
- 来源：B站公开元数据已取得标题、简介、章节与引用；接口未提供字幕。正在尝试读取视频画面，区分原片内容与补充教学算例。GPTQ 与硬件行为使用论文和官方文档核验。
- 计划：先完成来源核对；按“为什么压缩→有限刻度→得分翻转与不翻转→分组与校准→存储/内存/速度”编写教程及交互；增加封面、入口文章、目录项与 sitemap；运行数学检查、既有检查/测试/构建、桌面及手机浏览器检查，再发布和核对线上。
- 风险与边界：不把教学算例当真实模型评测；不把 4bit 说成保留 1/4 知识、删除参数或必然提速；区分 INT4 与其他 4bit 格式，KV cache/激活与量化权重；不覆盖旧教程，不改动打卡数据；不得声称拿到尚未取得的字幕或逐字复述视频。
- 用户授权：沿用本会话“类似视频直接整理并同步博客”的明确约定，不需要重复选择配色或批准发布。
- 来源核对：读取原视频公开媒体并对 47 个对应画面做 OCR/目视核对；确认 A=[1.4,2.4]、B=[1.6,2.1]，输入 [1,2] 和 [1,0]；没有取得字幕文件，不宣称逐字转录。视频媒体仅在 ignored output/source 本地用于核对，不发布。
- 内容核查：按 concept-learning 技能委派只读事实核查，使用 GPTQ 原论文、ONNX 定义、NVIDIA TensorRT 11.4.1 与 TensorRT-LLM 官方资料；修复原简介中已失效的 NVIDIA 11.4 链接。全部参考链接 HTTP 200。
- 实现文件：public/tutorials/model-4bit/index.html 与 cover.svg、public/uploads/covers/00a211d124f51264c08df42a8531c97561bd2a3eb6ce549551f20ce1b15be238.png、入口文章、scripts/build.mjs 目录配置、test/quantization-tutorial.test.mjs、README/TASK_STATE。
- 设计：8 章，5 个交互实验和 3 道单题检验；桌面正文 20px，手机 18px，功能字至少 16px。原视频算例与新增分组、补偿、存储实验明确区分。无外部运行依赖，可下载单文件离线使用。
- 数学验证：先写针对真实内嵌数值核心的测试，覆盖两组片中算例、代码碰撞/16种编码、最近偶数舍入/裁剪、输入加权误差、分组、补偿与元数据。8/8 新测试及合计 39/39 测试、npm run check、两个内嵌脚本语法、UTC 生产构建通过。封面遵循既有哈希路径限制，没有改动博客验证逻辑。
- 浏览器验证：Playwright 128 项检查通过，8 章分别在 1440/768/390/320px 检查无整页横向溢出、可见字至少 16px；涵盖 5 个实验、3 道检验、两组原片预设、负输入/并列/裁剪、键盘跳过链接/移动菜单焦点/Escape、打印、离线下载与断网计算、博客首页→文章→教程、4 项目录及三份旧教程回归；无浏览器运行或控制台错误。
- 已目视复核桌面、手机首页和实验页面与本地生成封面。封面采用原生 SVG 及本地 PNG，不依赖外链图片。76 个 ID 唯一、11 个内部锚点有效，单文件约 54KB。
- 发布：提交 96bf06d394999d9dcaac9dcda7ba5901cbc5ed7c 已推送到 main，现有 GitHub Pages 工作流 41233661786 构建及部署成功。
- 正式地址：https://iwxt.cn/tutorials/model-4bit/；入口文章 https://iwxt.cn/posts/2026-11-01-model-4bit/；已加入 https://iwxt.cn/tutorials/ 和 sitemap.txt。
- HTTPS 核验：练习页两种网址、目录、入口文章、哈希封面和 sitemap.txt 均返回 200，逐字节匹配本地 UTC 生产构建。
- 线上浏览器复核：18 项通过，覆盖 4 项目录、HTTPS、桌面/手机字号、片中两组得分、5 个实验、手机目录与小测、首页→文章→教程、离线下载；无运行或控制台错误。线上下载的完整 HTML 与源码逐字节一致。
- 线上检查曾因等待博客首页全部资源加载超时；诊断确认 URL 正常，DOM 就绪约 0.8 秒、完整 load 约 44 秒。检查改为在 DOM 就绪后验证交互，随后通过；没有为此改动博客主题或资源。
- 剩余必需工作与人工步骤：无。保留既有主题、三份旧教程和打卡存储格式；未发布原视频媒体、完整字幕或任何真实模型评测结论。

## 2026-11-01 夜雨知识点练习调整与发布（已完成）

- 当前目标：将用户提供的练习册调整为深绿、纸色、大字号的统一阅读风格，保留题目、参考解答、练习状态与笔记功能，并发布到博客。
- 原文件：/Users/admin/Desktop/cmc/夜雨知识点练习.html；SHA-256 24455d5c1803e52ee1bc0e710493e7ec3ccdba9fb5d11eda396756b8f746befa，原文件保持不变。
- 内容清点：11 章、179 个知识点、180 道独立题，360 张内嵌图片（题图和答案）；约 9.22 MB。
- 计划：优化排版并去掉装饰小字；图片提取为同源静态资源按需加载，提供含图片的完整离线 ZIP；新增 /tutorials/yeyu-practice/、入口文章与目录卡片。
- 边界：不重写数学题与参考解答，不将文档内容作为工具操作指令，不上传未由用户指定的整本讲义 PDF。网站中保留出处页码，避免原相对 PDF 链接上线后变成 404。
- 风险：图片缩小导致公式不可读、弹窗和移动目录溢出、共用题记录同步、JSON 导入覆盖、拆分图片后的离线说明失真；保留原始图片字节并验证关键交互、记录迁移和离线版。
- 实现文件：public/tutorials/yeyu-practice/index.html、360 张同源图片、完整离线 ZIP 和封面 SVG；本地哈希封面 PNG、content/posts/2026-11-01-yeyu-knowledge-practice.md、scripts/build.mjs 的第三个目录项、README.md 与 TASK_STATE.md。
- 内容验证：11 章、179 知识点、180 道独立题的全部元数据与原文件一致；360 张图片逐字节一致。离线 ZIP 中的完整题库与原文件一致并通过 CRC 校验。原文件保持不变。
- 可读性：桌面正文 20px、手机 18px、所有可见功能文字至少 16px；删除装饰英文，保留公式原图与大图查看，源 PDF 链接转为页码标签避免 404。
- 体积：初始网页版 HTML 约 213 KB，原文件约 9.22 MB；360 张原图总计 6,765,858 字节按需加载，完整离线 ZIP 为 6,837,537 字节。
- 验证：npm run check、31/31 既有测试、UTC 生产构建、git diff --check 通过。Playwright 133 项检查通过，覆盖 11 章在 1440/768/390/320px 的布局、最小字号、答案/大图、共用题状态与笔记、导出/导入/新旧记录合并/无效导入保护、随机/搜索/加载更多/打印、目录与旧教程回归、完整离线文件断网使用；无浏览器运行或控制台错误。
- 已复核桌面与手机截图。记录导入按钮可正常打开文件选择器，并使用导出的原格式 JSON 验证恢复。
- 发布：提交 7e7cf17195603fd253da3ec1b899d1caa7a95c11 已经现有 GitHub Pages 工作流 41232887856 成功上线。
- HTTPS 核验：练习页、教程目录、入口文章、离线 ZIP 与抽样图片均返回 200，内容逐字节匹配本地生产构建；线上 ZIP 通过 CRC 校验。
- 正式地址：https://iwxt.cn/tutorials/yeyu-practice/；目录：https://iwxt.cn/tutorials/；入口文章：https://iwxt.cn/posts/2026-11-01-yeyu-knowledge-practice/。
- 线上浏览器复核：17 项检查通过，覆盖目录→练习册、原图与参考解答、大图查看、完成状态与笔记持久化、手机 18px 字号及无横向溢出、章节菜单、首页→入口文章→练习册；无控制台或运行错误。
- 原文件最终 SHA-256 与接入前相同；原文件用户记录可通过原格式 JSON 导出/导入迁移，浏览器间不自动同步。未上传整本讲义 PDF，未改动打卡数据和既有教程。
- 剩余必需工作与人工步骤：无；保留独立教程页及博客原主题。


## 2026-11-01 华为 ICT 网络教程发布（已完成）

- 当前目标：将用户提供的既有 HTML 发布到博客独立教程区，保留其正文、题库、拓扑动画与阅读设置；不将文档里的文字作为额外操作指令。
- 原文件：/Users/admin/Desktop/华为 ict/华为ICT网络赛道初赛_自上而下教程.html；SHA-256 8995718b4b93617a9bcfc1cb58be74c4df2416f1667511be394d94b9440ced2a，保持原文件不变。
- 内容清点：28 个阅读页面（含前言与参考资料）、9 个交互图、31 个题目数据项；全部资源内置，无外部运行资源、网络请求代码或本机绝对路径。
- 实现：新增 /tutorials/huawei-ict-network/ 及入口文章、返回博客导航和 SEO 元信息；增加 /tutorials/ 目录页，让现有“交互教程”入口能同时发现两份教程；更新 sitemap、README 与状态记录。
- 改动文件：scripts/build.mjs、public/tutorials/huawei-ict-network/index.html、public/tutorials/huawei-ict-network/cover.svg、public/uploads/covers/986b23b4c31dd94bb622ef728e4361a5c432c291921e468c0077fbcb8a0fef4b.png、content/posts/2026-11-01-huawei-ict-network.md、README.md、TASK_STATE.md。
- 风险：锚点与移动目录冲突、书签/答题状态持久化、题库筛选及原教程回归；用独立浏览器检查 28 章、9 图、答题、搜索、设置、手机布局及返回链路。
- 边界：不重写用户正文和脚本，不更改打卡数据或旧教程；保留页面已有题库来源说明，不宣称重新审定其考纲与题库真实性。
- 验证：npm run check、31/31 既有测试、生产构建及 git diff --check 通过；原文件 SHA-256 不变，托管版所有内联 JS 与 JSON 和原文件逐字一致，新增后 297 个 ID 唯一、211 个内部锚点无断链。
- Playwright 230 项检查通过：两份教程入口、28 页在 1440/390/320px 的导航与宽度、9 图逐步与键盘控制、播放暂停、错题筛选、答题/书签/字号持久化、搜索、打印与手机菜单；无新控制台或运行错误。
- 原教程会自动恢复阅读章节，因此接入检查按 pathname 验证网址并允许保留章节 hash，没有更改其恢复逻辑。
- 已生成本地 PNG 网络拓扑封面（33,410 字节），无外链图片依赖。发布前桌面、手机和目录截图已复核；新增加的侧栏返回导航继承原深色侧栏文字颜色，对比度验证超过 4.5:1。
- 发布：提交 0c632c5a33699febaf467e1d40b184e92f418c15 经工作流 41230518026 成功上线；教程与目录文件已通过 HTTPS 字节一致性核验。
- 线上手机检查通过：目录→两份教程、首页入口文章→ICT、返回博客、题目保存与拓扑控制，无浏览器错误。
- 时间显示修正：入口文章“最后更新时间”固定为 Asia/Shanghai；已在 TZ=UTC 下构建并验证跨 UTC 日期的显示。修正提交 3f046f463042db0cc805aef5f5ec40a77edd7c1c，经工作流 41230771872 成功上线。
- 最终 HTTPS 核验：教程、目录和入口文章均返回 HTTP 200，内容逐字节匹配 UTC 环境生产构建；线上手机操作、答题持久化、拓扑控制、旧教程回归均通过，控制台无错误。
- 正式地址：https://iwxt.cn/tutorials/huawei-ict-network/；目录：https://iwxt.cn/tutorials/；入口文章：https://iwxt.cn/posts/2026-11-01-huawei-ict-network/。
- 阅读状态仍使用原文件的 huawei-ict-learning-v3 独立存储键；本地 file:// 与网站 HTTPS 的浏览器记录不自动迁移，入口文章已经说明。
- 剩余必需工作与人工步骤：无；没有更改原 HTML、原多语言教程或每日打卡模型与数据格式。


## 2026-11-01 后续视频教程默认流程（已记录）

- 当前目标：落实用户明确指定的长期工作方式；以后类似视频默认做成交互教程并同步博客。
- 变更文件：README.md、TASK_STATE.md；并将该约定追加到本机个人记忆扩展目录的 2026-11-01-video-interactive-tutorial-blog-default.md。
- 关键决定：复用现有深绿/纸色与大字号排版、独立教程路线、博客入口及返回导航；用户后续具体指令优先，不重复询问已经确定的样式和接入方式。
- 验证：仅修改流程说明与个人偏好记录；检查新增文字、链接和 git diff --check，不重跑构建或代码测试，不触发网站重新部署。
- 剩余工作及人工步骤：无；没有新增待处理视频或定时任务。


## 2026-11-01 独立交互教程接入（已完成）

- 用户选择：先做独立教程页，保留博客主题；教程保留现有深绿、纸色、大字号与交互。
- 计划：新增 /tutorials/polyglot/ 页面；加博客导航与文章入口；教程加入返回博客链接；将路线加入 sitemap；通过现有 GitHub Pages 工作流同步上线。
- 工作方式：从最新 origin/main 创建隔离分支 codex/polyglot-tutorial-20261101，避免干扰原目录和其他正在进行的工作。
- 改动文件：public/tutorials/polyglot/index.html、public/tutorials/polyglot/cover.svg、public/uploads/covers/dcd5159506e3388eb3b9c6d44b8644c5246b671a5fca9bc8406e5c8120c8c3a9.png、content/posts/2026-11-01-polyglot-programs.md、scripts/build.mjs、src/site.css、README.md、TASK_STATE.md。
- 风险：移动导航拥挤、博客主题样式污染教程、部署路径与章节 hash 冲突；用浏览器检查首页→文章→教程→返回、窄屏、离线交互和控制台。
- 保留边界：不改博客全站视觉、不改原有文章正文或封面、不接触打卡模型/数据格式和本机 localStorage。
- 验证：npm run check、31/31 既有测试、生产环境 npm run build、git diff --check 均通过。
- Playwright 46 项接入检查通过：桌面导航、文章入口、手机抽屉、返回博客、深色模式隔离、同源存储保留、示例下载、六章在 1440/390/320px 下的宽度及 sitemap；无新控制台或运行错误。
- 已目视检查博客入口、独立教程桌面与手机截图。教程桌面正文 20px、手机 18px，颜色保持；小屏入口在抽屉中，避免挤压原导航。
- 托管页与原离线教程的 JavaScript 完全一致，额外语法检查通过；只新增博客导航/元数据与开头的动机说明。
- 新封面为自行绘制的可编辑 SVG，并用浏览器原生导出为 24,495 字节 PNG；使用本地内容哈希路径，无外链图片依赖。
- 部署：代码提交 91245223b5ed608917fb2cd15868d130dc60d3bf 已经通过 GitHub Pages 工作流 41229327335（success）上线。
- 正式地址：https://iwxt.cn/tutorials/polyglot/；入口文章：https://iwxt.cn/posts/2026-11-01-polyglot-programs/。
- 线上验证：HTTPS 正常，教程、样式及新封面均返回 HTTP 200，字节与本地生产构建完全一致。手机抽屉入口、文章→教程、教程→博客、ABI 情景和 ZIP 下载均通过，无浏览器错误；线上下载包 CRC 校验通过。
- 未修改旧文章、旧封面、checkin.js 或 checkin-model.js；没有更改打卡存储键或格式。
- 后续维护：编辑 public/tutorials/polyglot/index.html，随现有博客构建发布；离线教程为另存版本，不设后台文件监控。
- 剩余必需工作：无。


## 2026-11-01 article cover replacement

- Goal: replace the cover image for `0:5，还不是结局`; the user clarified
  that this request concerns the image only.
- Plan: select a simpler tennis photograph with a composition suitable for
  wide cards, save a local optimized asset, and update the entry's cover,
  focal point, and image attribution.
- Planned files: this record, the entry Markdown, and one new cover asset.
- Risks: homepage and article banners crop the same image differently; check
  desktop and mobile crops and title legibility before delivery. Keep the
  existing article text, site styling, and browser-local check-in records.
- Replaced the anime character image with Tim Chow's blue-court photograph
  (`https://unsplash.com/photos/blue-sports-field-8vhQBaF2wcY`). The new local
  WebP is 1600 x 900, 392,952 bytes, stored at
  `public/uploads/covers/6882b03146dd92b5129933aa4920159bf40f3bfc3a08b1b391664b85b112ec6f.webp`.
  Set the entry's horizontal focal point to 50% and updated its image credit
  and last-modified timestamp. Kept the old asset for reversible rollback.
- Verification: `npm run check`, 31/31 existing tests, `npm run build`, and
  `git diff --check` passed. Playwright screenshots verified homepage cards
  and article banners at 1440 x 1000 and 390 x 844, including the mobile dark
  theme. Mobile home/article document widths equal the 390 px viewport; both
  load the new local image at 50% 50%. The article link and return navigation
  work, the generated attribution links are correct, and the browser console
  contains zero errors or warnings.
- Deployment: commit `0a046f3` deployed successfully through GitHub Pages run
  `41228558553`. The live homepage, article, and new image return HTTPS 200;
  both HTML pages reference the new cover and the live image SHA-256 matches
  the local asset. A live 390 x 844 browser check confirmed the new image,
  secure context, exact viewport-width containment, and zero console errors
  or warnings. Screenshots are saved under ignored `output/playwright/`.
- Remaining work / manual steps: none for this replacement.

## Current goal

Build a separate, public GitHub Pages diary that preserves the recognizable
Romanticism 2.2 visual system while keeping all authoring local and storing
entries as Markdown files. The existing Sites deployment remains unchanged as
a rollback. The current iteration adds a lightweight cinematic interaction
layer inspired by the user's reference blog while keeping the diary's own
anime-and-ocean Romanticism identity. The active visual pass now adopts a
full-page wallpaper and translucent framed layout inspired by the user's
`mccsjs.cn` and `blog.snowy.moe` references. The current deployment task moves
the public site from the GitHub project URL to the user's apex domain
`https://iwxt.cn/`.

The current implementation adds a mobile-first `每日打卡` page to the existing
static diary. It keeps the anime, sea-blue, translucent-glass design language
and stores all check-in records in this browser's `localStorage`. The page must
support date switching, backfilling and unchecking, editable first-week plans,
evidence-based weekly statistics, and JSON export/import without introducing a
backend or changing the GitHub Pages architecture.

### Daily check-in implementation plan

1. Add a generated `/checkin/` route plus an app-bar/drawer navigation entry.
2. Keep the default 2026-09-14 to 2026-09-20 schedule editable, pause regular
   study tracks during the Baidu Star sprint, then resume CET6 new words on
   2026-09-21 and begin its review phase on 2026-09-30.
3. Persist versioned records locally and merge future default-template changes
   without overwriting user edits; provide JSON download and validated import.
4. Count CMC from recorded minutes, algorithms only from `已复现`, CET6 from
   actual word/practice counts, and derive weekly completion and streaks from
   effective records rather than decorative checkboxes alone.
5. Add model tests, run syntax/test/build checks, then use a real browser for
   persistence, import/export, date switching, desktop/mobile overflow, and
   console-error verification before deployment.

### 2026-09-10 dashboard extension plan

1. Add pure, timezone-safe calendar helpers for month navigation, leap years,
   cross-year transitions, and five distinct day states: complete, partial,
   missed, no-task, and future.
2. Derive today's algorithm, CMC, and CET6 targets/progress/remaining values
   strictly from the existing task records; keep the localStorage key, schema,
   import/export format, and existing user records unchanged.
3. Add a maintainable key-date configuration. Only CMC's personal target and
   dates published by official organisers are concrete; every unknown campus or
   organiser date remains explicitly pending.
4. Integrate the three glass panels responsively, extend model/browser tests,
   deploy through the existing GitHub Pages workflow, and verify the public
   asset version after deployment.

### 2026-09-10 first-load performance plan

1. Preserve the selected anime wallpaper while replacing the 2559 x 1439,
   3.38 MB PNG served to visitors with a visually checked 1920 x 1080 WebP.
   Keep the original PNG only as a local, ignored backup.
2. Preload the active wallpaper from the generated page head so the browser can
   start it before the stylesheet has been parsed.
3. Do not fetch the closed navigation drawer's decorative cover until the user
   opens the drawer; retain a lightweight colour placeholder and accessible
   controls while the image arrives.
4. Run syntax, tests, build and diff checks, then use a fresh Playwright session
   to verify cold-cache transfer size, desktop/mobile rendering, drawer loading,
   HTTPS requests, overflow, and console output before deploying.

Performance risks for this pass: the wallpaper crop and colour must remain
recognisable after conversion; lazy drawer imagery must not flash as unreadable
content; future locally imported wallpapers are not automatically recompressed
by this narrow change and still need an explicit optimisation step.

### 2026-09-14 Baidu Star sprint and confirmed vocabulary contest plan

1. Replace the untouched default CMC/algorithm/CET6 tasks dated 2026-09-14 to
   2026-09-20 with the supplied Baidu Star execution cards; cancel that Sunday's
   LeetCode contest, and resume the shifted regular study lines on 2026-09-21.
2. Add auditable sprint fields for timed sessions, checklists, independent
   reproduction, submitted/accepted counts, and blockers without inventing
   problem IDs or links.
3. Migrate version-1 local records in place: preserve completed/annotated legacy
   defaults and custom tasks, mark preserved superseded defaults as excluded from
   sprint-week debt, and remove only untouched superseded defaults.
4. Add the confirmed Baicizhan vocabulary preliminary date and eligibility state,
   plus the confirmed FLTRP registration deadline and campus-session times, while
   leaving still-unannounced times explicitly pending.
5. Extend model tests for the sprint template, 2026-09-21 CMC resumption, and
   historical-record preservation; then run checks/build, deploy, and verify the
   production script at `https://iwxt.cn/checkin/`.

Risks for this pass: old browser records must not be erased; removed defaults
must not count as missed work; the Baicizhan screenshot confirms 10 October 24
but not its within-day start time; organiser schedules may still change.

### 2026-09-14 single-focus revision

1. Keep 2026-09-14 through 2026-09-20 focused on the Baidu Star sprint; pause
   CMC, routine LeetCode and CET6 defaults without turning them into overdue work.
2. Preserve the fixed 2026-09-17 Putonghua booking reminder because postponing
   a time-sensitive administrative action could make the user miss its window.
3. Resume CMC, algorithms and CET6 on Monday 2026-09-21. Shift the nine-day CET6
   new-word block to 2026-09-21 through 2026-09-29, then start review on 2026-09-30.
4. Remove only untouched legacy CET6 defaults in the sprint week; retain any
   filled legacy record as excluded history so browser-local work is not lost.

### 2026-09-20 key-date readability pass

1. Keep every competition date and its evidence status unchanged; this pass is
   visual only and must not alter localStorage, countdown logic, or task records.
2. Replace the dense three-column desktop wall with a two-column reading layout,
   then enlarge card spacing, typography, milestone padding, and line height.
3. Keep tablets at two columns and phones at one event per row with two roomy
   milestone columns, allowing the final odd milestone to span the card width.
4. Verify desktop and mobile widths, dark mode, source links, console output,
   and public GitHub Pages assets before calling the change complete.

Risks for this pass: local dates must not shift at UTC boundaries; an empty day
must not be labelled missed; event announcements can change after deployment;
GitHub cannot issue the custom-domain certificate until its DNS checks finish.

### 2026-09-20 Baidu Star closeout correction

1. Treat the confirmed 2026-09-19 14:00–17:00 round as the end of the active
   Baidu Star sprint; do not generate a post-contest sprint,补题, or复盘 debt on
   2026-09-20.
2. Show 2026-09-20 as a rest and transition day, then resume CMC, routine
   algorithms, and CET6 on 2026-09-21 as already scheduled.
3. During version-1 hydration, remove untouched legacy 2026-09-20 sprint cards,
   but preserve any completed, timed, or annotated card as excluded history so
   browser-local records are not erased or counted as current debt.
4. Update the today panel, weekly summary, day subtitle, empty state, and rules
   so none of them still describes 2026-09-20 as an active sprint day.

Risks for this correction: browser-local records may contain the removed task
IDs; hydration must distinguish blank defaults from meaningful user input, and
the weekly statistics must still include the completed sprint period without
creating a false Sunday target.

Risks: browser storage can be cleared and does not sync across devices; imported
JSON must be validated before replacing local records; the custom domain still
depends on the user's DNSPod cutover and GitHub certificate issuance.

## Acceptance criteria

- Public output is static HTML, CSS, JavaScript, and images only; it has no PHP,
  database, server login, or browser-stored publishing credential.
- A localhost-only writing app can create, edit, draft, publish, and recoverably
  remove Markdown entries.
- The article cover control preserves Romanticism's custom image URL behavior:
  remote images are validated and copied locally, draft assets remain ignored,
  and only published assets enter the public repository.
- The local writer restores Romanticism's `AKAROMindeximg` homepage wallpaper
  URL setting as a separate site-appearance control. Imported wallpapers are
  copied into `public/uploads/site/`, recorded in `site.config.json`, and used
  by both the home page and 404 page.
- Draft entries never appear in the public build.
- Published entries have individual pages and support home-feed search, date and
  tag filtering.
- Preserve the Romanticism visual contract: translucent app bar, lake hero,
  seashell surface, image post cards, glass controls, drawer navigation, serif
  typography, dark mode, responsive layout, and the original license file in
  the public source tree.
- Build output works both at `/` locally and under a GitHub project subpath.
- The production GitHub Actions build uses `https://iwxt.cn/` at the root, so
  canonical URLs, Open Graph images, feeds, assets, and post links contain no
  stale `/iwxt-diary/` prefix.
- A local publish action builds first and uses the machine's Git credential
  helper; no GitHub token is exposed to or saved by browser code.
- Tests cover validation, draft exclusion, path generation, and recoverable
  deletion; final verification includes syntax checks, tests, production build,
  link/asset checks, and a localhost smoke test.

## Architecture and security decisions

- New project: `/Users/admin/Work/Project/博客/iwxt-diary-pages`.
- Published source entries: `content/posts/*.md`. Local-only drafts live in
  gitignored `content/drafts/`; removed entries move to gitignored
  `content/trash/` instead of being destroyed. This prevents a public GitHub
  repository from exposing draft or deleted text.
- Generated public output: `dist/`, rebuilt locally and by GitHub Actions.
- The writing server binds only to `127.0.0.1`, verifies the Host and Origin,
  and requires an in-memory per-run token for every mutation.
- Markdown HTML is sanitized before publication.
- Fenced Markdown code blocks are highlighted at build time and enhanced with
  an accessible client-side copy button; long lines scroll inside the block
  instead of widening the page.
- Only the dedicated diary project and its content are touched; the Typecho
  archives and current Sites checkout are not modified.
- GitHub CLI account `123asdc-it` is authenticated with `repo` and `workflow`
  scopes. The public repository is `123asdc-it/iwxt-diary` and `origin/main`
  tracks it.
- The apex domain `iwxt.cn` uses DNSPod nameservers. Before migration its apex
  and `www` records pointed to the old host `103.113.95.133`, which served a
  ChineseStack placeholder with an expired, mismatched TLS certificate.
- The user explicitly authorized Codex-only execution. The CCG Opus planner was
  unavailable because the configured Claude profile is not logged in; session
  `568e77c3-30d9-482a-a2dc-ac4240a1609a` returned no findings.

## Verification status

- The 2026-09-14 plan revision replaces the active week's untouched CMC,
  LeetCode and CET6 defaults with 13 Baidu Star sprint cards plus the fixed
  2026-09-17 Putonghua reminder. CMC lesson 6 and CET6 new words resume on
  2026-09-21, the 2026-09-20 LeetCode weekly
  contest is absent, and the 2026-09-19 14:00–17:00 formal round has writable
  accepted-count and blocker fields without being counted as a reproduced
  practice problem.
- The localStorage key and schema version remain `iwxt-diary-checkin-v1` and
  version 1. Hydration removes only untouched superseded defaults, preserves
  custom tasks, keeps progressed old defaults as visibly excluded historical
  records, and reapplies saved CMC lesson evidence by global lesson number.
- `npm run check`, all 31 Node tests, `npm run build`, `npm audit --omit=dev`,
  and `git diff --check` pass. A fresh local Playwright session verified that
  independent-reproduction, accepted-count, and blocker fields survive reload;
  the 390 x 844 layout has a 390 px document width and the console reports zero
  errors or warnings. No screenshots were produced for this pass.
- Commit `a05b9cf` deployed successfully in GitHub Pages workflow
  `34800015123`. Direct production reads from `https://iwxt.cn/checkin/` and its
  two check-in JavaScript assets returned the Baidu Star sprint template, the
  2026-09-19 formal-round card, the FLTRP deadline, and the confirmed
  2026-10-24 Baicizhan preliminary metadata.

- The single-focus revision removes all untouched CET6 defaults from
  2026-09-14 through 2026-09-20, preserves filled ones as excluded history,
  resumes the 100-new-word phase on 2026-09-21, and moves review to 2026-09-30.
  `npm run check`, all 31 Node tests, `npm run build`, `npm audit --omit=dev`,
  and `git diff --check` pass. A fresh 390 x 844 Playwright run confirmed that
  the sprint week shows no CET6 debt, 2026-09-21 shows both CMC and CET6,
  document width remains exactly 390 px, and the console has zero errors or
  warnings. No screenshots were produced for this revision.
- Commit `380ed01` deployed successfully in GitHub Pages workflow
  `34815190817`. Direct production reads confirmed the three CET6 phase
  boundaries, sprint-week legacy-task migration, the “下周恢复” summary, and
  the updated execution rules in the live check-in JavaScript assets.

- The 2026-09-20 readability pass changes only `src/site.css`: desktop key-date
  cards now use two event columns and two milestone columns with larger type,
  padding, gaps, and line height; mobile uses one event column and lets an odd
  final milestone span the card. All 31 Node tests, syntax/build/audit/diff
  checks pass. Playwright at 1440 x 1000 and 390 x 844 visually verified the
  cards in light and dark modes; mobile scroll/client widths are both 390 px,
  and the console reports zero errors or warnings.
- Commit `b6c23a7` deployed successfully in GitHub Pages workflow
  `35491325842`. Live CSS reads contain the two-column grid, larger card
  padding, and odd-final-milestone span rule. A public-browser check resolved
  two 537 px event columns with 22 px card padding and zero console messages.

- The 2026-09-20 Baidu Star closeout correction ends generated sprint tasks on
  2026-09-19. September 20 is an empty rest/transition day, and September 21
  resumes the existing CMC and CET6 plan. Hydration removes untouched legacy
  Sunday sprint cards while retaining completed or annotated ones as excluded
  history. Weekly sprint targets now correctly contain 11 cards and 7 planned
  independent reproductions.
- Local verification passed `npm run check`, all 31 Node tests, `npm run build`,
  `npm audit --omit=dev`, and `git diff --check`. A fresh Playwright session at
  390 x 844 confirmed the September 20 ended/rest state, zero sprint cards,
  restored CMC and CET6 cards on September 21, exact 390 px page containment,
  and zero console errors or warnings. No screenshots were produced.
- Commit `ba551e7` deployed successfully in GitHub Pages workflow
  `35495088686`. Direct live asset reads contain the corrected September 19
  sprint boundary and ended-state copy. A fresh HTTPS Playwright check at
  390 x 844 confirmed the ended/rest view, secure context, exact page-width
  containment, and zero console errors or warnings.

- The 2026-09-10 first-load pass replaces the 2559 x 1439, 3,382,944-byte
  wallpaper PNG with a visually checked 1920 x 1080, 117,724-byte WebP while
  retaining the source PNG in ignored local backup storage. Generated pages
  preload the active wallpaper, and the closed drawer now defers its 280 KB
  decorative cover until pointer, keyboard, or click intent.
- Local verification passed `npm run check`, all 22 Node tests, the production
  root build, generated-markup and old-asset absence checks, and
  `git diff --check`. Fresh Playwright sessions confirmed that the initial
  request set omits `sidebar.webp`, opening the drawer fetches and displays it,
  the desktop and 390 x 844 layouts preserve the selected art, mobile width is
  exactly 390 px without overflow, the check-in page reports `已载入本机记录`,
  dark mode works, and the console has zero errors or warnings.
- Commit `3b858e7` deployed successfully in GitHub Pages workflow
  `34436090788`. The live HTML references the new 117,724-byte WebP and the old
  PNG returns HTTP 404. A fresh HTTPS Playwright session measured 446,741 bytes
  across page resources and a 1.151-second load, versus the preceding
  3,992,211-byte, 14.765-second cold sample. The live initial request omits the
  drawer cover, opening the drawer fetches it, the page is a secure context,
  and the console remains free of errors and warnings.

- The 2026-09-10 dashboard extension adds a full Monday-first month calendar,
  five non-overlapping day states, a live today-remaining panel derived from
  existing task fields, and a nine-item key-date panel. The storage key and
  version 1 JSON shape are unchanged. Concrete dates are limited to the CMC
  personal target, official 2026 CUMCM dates, and official 2027 MCM/ICM dates;
  other registration, payment, contest, and campus dates remain explicitly
  pending.
- `npm run check`, 22/22 Node tests, `npm run build`, `npm audit --omit=dev`,
  and `git diff --check` passed. New tests cover December/January rollover,
  leap-day layout, past/today/future states, empty-day separation, progress
  calculations, 30/7/3-day urgency boundaries, event ranges, expiry, and a
  simulated localStorage reload.
- Real Playwright checks at 1440x1000 and 390x844 found exact viewport-width
  containment and zero console errors or warnings. A custom task survived an
  actual browser reload and date re-selection; the test record was removed
  afterward. Light and dark mobile layouts were visually checked.
- Commit `09a62a4` deployed successfully in GitHub Pages workflow
  `34394288600`. Direct reads from the GitHub Pages edge returned the new
  `KEY_DATE_EVENTS`, `monthCalendar`, `今日还差多少`, and `SELECTED DAY`
  markers; the public JavaScript and CSS hashes match the production build.
- DNSPod now has apex A records `185.199.108.153` and `185.199.109.153`, plus
  `www` CNAME `123asdc-it.github.io`; the existing `_dnsauth` TXT record was
  preserved. DNS-over-HTTPS checks through Google and Cloudflare returned the
  new records. DNSPod's free-plan load-balancing limit rejected additional
  `.110` and `.111` apex records, so they were not saved.

- The daily check-in implementation adds `src/checkin-model.js`,
  `src/checkin.js`, `scripts/cmc-catalog.mjs`, the checked-in 124-lesson catalog
  at `data/cmc-course-catalog.tsv`, and model coverage in
  `test/checkin.test.mjs`. `scripts/build.mjs`, `src/site.css`, and
  `package.json` integrate the generated route, navigation, responsive glass UI,
  sitemap entry, scripts, and validation commands.
- Daily check-in records are versioned in browser `localStorage`. The public
  page contains no saved user record, account, sync API, or publishing token;
  validated JSON export/import is the explicit backup and transfer mechanism.
- Fresh check-in state starts CMC at lesson 6 but accepts any current lesson
  from 1 through 124. Catalog metadata remains authoritative while imported
  user progress is preserved. The first four algorithm weeks use concrete
  problem IDs, topics, ratings, and links; only reproduced solutions count in
  weekly totals.
- Model verification currently passes 16/16 tests, including removal of stale
  CMC blocks when the current lesson is moved directly to lesson 124. Root and simulated
  `/iwxt-diary/` builds generate correctly prefixed check-in navigation, assets,
  and scripts. A real-browser check covered reload persistence, date switching,
  backfill/uncheck, effective algorithm counting, CMC rescheduling, exact lesson
  metadata, custom task categories, JSON round-trip restore, light/dark layouts,
  `390x844` mobile containment, `1440x1000` desktop layout, and zero console
  errors or warnings.
- Commit `11050a4` deployed successfully through GitHub Pages workflow
  `34391953580`. A direct request to the GitHub Pages edge for
  `http://iwxt.cn/checkin/` returned HTTP 200 with the generated “本机记录”
  boundary and check-in script. Public DNS-over-HTTPS still resolves both
  `iwxt.cn` and `www.iwxt.cn` to the old server `103.113.95.133`; normal HTTPS
  therefore still reaches its expired certificate instead of this deployment.

- `npm run check`: passed for generator, writer server, and both browser scripts.
- `npm test`: 8/8 tests passed, including local-only drafts and remote cover
  assets, publication promotion, URL/private-network rejection, Markdown
  sanitization, validation, subpaths, and recoverable deletion.
- `npm audit --omit=dev`: 0 known vulnerabilities.
- Root build and simulated `/iwxt-diary/` GitHub Pages subpath build both
  completed with one published entry; generated local links and assets use the
  correct project prefix.
- Browser smoke tests covered desktop and mobile layouts, dark mode, drawer,
  search/filter empty state, writer save/delete flow, and an individual post;
  the checked post page reported no console errors.
- Live listener inspection confirmed the writing server is bound only to
  `127.0.0.1:4173`. Invalid Host requests and tokenless API requests return 403.
- A browser-created test draft was present only in ignored `content/drafts/`,
  absent from `content/posts/` and `dist/`, then successfully moved into the
  ignored local trash. The test artifact was removed afterward.
- The restored image URL field was exercised in the real writer with a public
  PNG URL. The imported image rendered in the preview, was stored only under
  ignored draft assets, and its test draft/image were removed afterward.
- The separate `AKAROMindeximg` homepage wallpaper URL control was checked at
  desktop and 390 px mobile widths. Live URL preview, the default lake state,
  accessible labels, and both action buttons rendered without console errors.
- GitHub Pages was enabled with `build_type=workflow`. Actions run
  `33624377126` completed both build and deploy jobs successfully. The live
  homepage, CSS, and default wallpaper returned HTTP 200, and a live desktop
  browser smoke test reported no console errors.
- On 2026-09-02, the user requested a live trial of the landscape anime API at
  `https://api.yppp.net/pc.php`. The local writer imported the returned PNG as
  `public/uploads/site/584fcbef23095071ec126080e7b364f1afa43f1f88a4d48d8fd7b2245e8f19fa.png`,
  updated `site.config.json`, and pushed commit `0b19972`. GitHub Pages run
  `33644605634` completed successfully; the live homepage references the new
  asset and the public image URL returns HTTP 200 with `image/png`.
- The drawer avatar was replaced with the user's supplied 940 x 940 JPEG while
  retaining the theme's circular crop and placement. A real-browser check at
  390 x 844 confirmed the avatar remains centered, the drawer layout is intact,
  and the page reports no console errors or warnings.
- After a brief streetscape trial, the user requested imagery with an explicit
  anime illustration style. The drawer header now uses Wallhaven wallpaper
  `lyylpl`, and the welcome post cover uses `pokd2m`; both were converted to
  1600 x 900 WebP assets. Playwright checks at 1440 x 1000 and 390 x 844
  confirmed usable crops and text contrast with no console errors or warnings.
- The large area below the single post was diagnosed as intentional layout
  space: `.home-surface` has `min-height: 520px`, while the post feed overlaps
  the hero by 180px. With only one post, the unused minimum height is visible.
  No spacing change was made because the user asked why rather than asking to
  alter the layout.
- Fenced code rendering was upgraded with `highlight.js` 11.12.0, a bundled
  GitHub Dark Dimmed palette, language labels, and a clipboard button with
  success/failure feedback. Sanitizer tests cover highlighted and unknown
  languages. A temporary local-only C++ article verified desktop rendering,
  copy feedback, and mobile containment (`390px` page width; code viewport
  `344px`, scrollable code width `396px`) with no console errors or warnings;
  the temporary article was removed before publication.
- On 2026-09-04, the public reference at `https://blog.ayeez.cn/` and its
  open-source frontend were inspected read-only. The reference combines a
  cinematic welcome area, ambient flow graphics, reveal motion, interactive
  cards, and reader utilities, but its Vue/Spring/MySQL architecture was not
  copied into this static diary.
- A distinct ocean-blue cinematic layer was implemented with no new runtime
  dependency: staged hero lettering, ambient stars/orbs, desktop pointer glow,
  subtle hero parallax, card tilt/spotlight/sheen, scroll reveal, a top progress
  line, a compacting app bar, and an accessible back-to-top button. Static
  content remains visible without JavaScript; touch devices skip pointer-only
  effects, and `prefers-reduced-motion` disables the main motion effects.
- The former fixed `520px` home-surface minimum was removed. The single-card
  homepage now keeps about `92px` of intentional space before the footer rather
  than showing a large empty field.
- Playwright verification covered the homepage and article at desktop and
  `390x844`, light and dark modes, card interaction, scroll progress, back to
  top, and reduced-motion emulation. The mobile document stayed exactly
  `390px` wide, desktop stayed `1200px` wide, and browser console checks found
  zero errors or warnings.
- The `mccsjs.cn` and `blog.snowy.moe` references were inspected read-only for
  composition. The local redesign keeps this diary's own art and controls while
  adding a full-page anime wallpaper, floating rounded glass app bar, framed
  hero, translucent content panels, and a profile/tag/archive sidebar.
- The wallpaper-and-glass pass was checked on the homepage and article at
  `1200px` desktop and `390x844` mobile widths in both light and dark modes.
  The two-column desktop grid collapses to one column without horizontal
  overflow, the article return bar no longer overlaps the content, and browser
  console checks found zero errors or warnings.
- On 2026-09-04, the user requested removal of the visible “Theme
  Romanticism 2.2 by Akashi · 静态日记版” footer line. The generated footer now
  shows only the diary copyright line; the upstream GPLv3 license remains at
  `public/romanticism/LICENSE.txt` in the public repository.
- On 2026-09-10, the production workflow was prepared for the apex domain
  `https://iwxt.cn/`: `SITE_BASE_PATH` is empty and `SITE_URL` is the custom
  domain. Syntax checks, 8/8 tests, the production build, dependency audit, and
  stale-prefix scans passed. Local Playwright checks loaded both the homepage
  and post at root paths with zero console errors or warnings.
- GitHub Pages workflow `34389681149` successfully deployed commit `fb2c2a8`.
  The repository Pages setting now has `cname: iwxt.cn`; HTTPS enforcement is
  intentionally off until DNSPod points the domain to GitHub and GitHub issues
  a matching certificate.

## Remaining work

- Wait for GitHub Pages to issue a certificate matching `iwxt.cn` and
  `www.iwxt.cn`, then enable HTTPS enforcement and perform one final live HTTPS
  browser smoke test. DNS-over-HTTPS and direct GitHub-edge HTTP already return
  the new deployment, but this Mac's ordinary resolver may retain the old apex
  answer until its previous TTL/cache expires.

## 2026-09-10 repost publication

- Add a public essay reconstructed from five user-supplied screenshots under
  the title `0:5，还不是结局`, with attribution to the user-specified Douyin
  account `兔丸星球`.
- Preserve the source boundary in the article: the original video URL was not
  supplied, the screenshots display the page account `大器新能源`, and the
  competition details have not been independently verified.
- Only normalize obvious punctuation, duplicated lines, and typographical
  errors; do not recast the story as an original diary entry.
- After the user rejected the generated draft cover, use the selected SFW
  anime tennis wallpaper `Wallhaven 5d8xw9` instead. Keep its source link and
  ownership notice in the article, and store an optimized 1600 x 900 WebP
  locally under `public/uploads/covers/` so the public page does not depend on
  a remote image hotlink.
- Verify content validation, tests, production build, desktop/mobile article
  layout, text continuity, horizontal overflow, and browser console output;
  then deploy through the existing GitHub Pages workflow and verify the live
  custom-domain article.
- Added the article source at
  `content/posts/2026-09-10-zero-five-is-not-the-end.md` and stored the selected
  cover as an 82,450-byte, 1600 x 900 WebP under
  `public/uploads/covers/`. The rejected generated-cover copy is not part of
  the repository.
- Added a bounded per-entry `coverFocusX` value with a centered default, build
  output for cards and article heroes, and writer preservation for later
  edits. This article uses `15%` so the left-side tennis character remains in
  view on narrow screens; existing articles continue to use `50%`.
- Local verification passed syntax checks, 23/23 Node tests, the production
  build, generated-markup focus checks, and `git diff --check`. Playwright at
  390 x 844 confirmed the selected local cover, `15% 50%` computed positioning,
  exact 390 px document containment, complete source/credit blocks, continuous
  final paragraphs, and zero console errors or warnings. Screenshot capture
  itself timed out after fonts loaded, so crop verification is based on the
  inspected source image plus browser geometry/computed-style checks rather
  than a saved browser screenshot.
- Commit `a379c23` deployed successfully in GitHub Pages workflow
  `34478349723`. The public article and cover return HTTP 200 from GitHub's
  edge, and the live cover hash matches the 82,450-byte local asset.
- A fresh live HTTPS Playwright session at 390 x 844 confirmed a secure context,
  exact 390 px document containment, the selected cover URL with `15% 50%`
  positioning, the repost/source boundary, the final paragraph, and zero
  console errors or warnings. TLS verification returned a valid `iwxt.cn`
  certificate issued by Let's Encrypt and expiring 2026-12-08.
- Remaining external boundary: the supplied screenshots did not contain the
  original Douyin video URL, and the visible screenshot account differs from
  the user-specified repost attribution. The article exposes both facts rather
  than claiming independently verified original authorship.

## 2026-09-12 approximate competition windows

- Extend the existing `关键日期` panel instead of changing the version 1
  localStorage plan data. Add `外研社·国才杯` and `全国大学生统计建模大赛`,
  and replace empty competition dates with useful month-level planning windows.
- Keep exact dates, official month ranges, estimates, and pending campus items
  visually and semantically distinct. Estimated windows must not be converted
  into fake day-level countdowns.
- Use the organisers' published 2026 schedules as evidence: FLTRP lists
  April–October school contests, September–November provincial contests, and
  October–December national contests; the statistics contest lists a March
  launch, May submission, mid-June provincial round, and July–August national
  round. Use the latter only as a labelled 2027 planning estimate.
- Add model coverage for official/estimated windows, update the explanatory UI
  and responsive styling, then run syntax, tests, build, desktop/mobile browser
  checks, deployment, and live HTTPS verification.

Risks: organiser and university notices can move dates; ICPC stations and
campus selection are not a single national date; a month-level estimate is for
planning only and must be replaced when the user supplies a concrete notice.

- Implemented 11 key-date cards. Added official 2026 FLTRP school/provincial/
  national ranges and labelled 2027 statistical-modeling planning windows.
  Added approximate next-cycle windows for CET6, Lanqiao, ICPC, Baidu Star,
  and NUEDC while retaining exact MCM/CUMCM dates and pending campus-only items.
- `milestoneCountdown` now returns `window` or `estimated` states for month-level
  ranges and never assigns them a day count. The UI shows official ranges in
  green, estimates in purple, and explains that estimates are replaceable
  planning windows.
- Local verification passed `npm run check`, 24/24 Node tests, the production
  build, and `git diff --check`. Playwright at 1440 x 1000 and 390 x 844 found
  all 11 cards, the two requested competitions, no overflowing milestone/card
  content, exact viewport-width containment, working dark-mode colours, and
  zero console errors or warnings.
- Deployment commit `c8414fd` completed successfully in GitHub Pages workflow
  `34673974095`. Live HTTPS assets match the local production build hashes.
  A 390 x 844 live-browser check confirmed all 11 cards, both requested
  competitions, 17 estimated windows, 3 official windows, no horizontal
  overflow, and zero console errors or warnings.
- Remaining: replace estimated month ranges when the user provides organiser or
  campus notices with concrete dates.

## 2026-09-13 concrete FLTRP and Baidu Star dates

- Treat the user-supplied campus-notice screenshot as the authority for the two
  FLTRP school events. Because it belongs to the current 2026 season, record
  both on 2026-10-11: comprehensive ability 09:30–11:00 and translation
  16:00–18:00. Retain the organiser's official provincial and national month
  ranges as separate nodes.
- Replace the obsolete 2027 Baidu Star estimate with the confirmed 2026 second
  preliminary: registration closes around 12:00 on 2026-09-19, subject to an
  earlier campus review deadline, and the online contest runs 14:00–17:00.
  Keep the national final pending because the available notices are not fully
  consistent about whether its date is final.
- Add a paired two-column milestone layout only for events with more than three
  nodes, so the FLTRP times remain readable without changing other cards.
- Add the Baidu preliminary and both FLTRP contests to their exact daily task
  lists. Hydration merges these new default tasks into an existing version-1
  local record while preserving tasks and evidence already saved by the user.
- Verification passed `npm run check`, 25/25 Node tests, the production build,
  and `git diff --check`. Playwright at 1440 x 1000 and 390 x 844 confirmed all
  precise dates and times, a two-column FLTRP layout, no element or page-width
  overflow, and zero console errors or warnings.
- Deployment commit `1b12947` completed successfully in GitHub Pages workflow
  `34758273950`; the live `checkin-model.js` and `checkin.js` hashes match the
  local production build. Live HTTPS verification at 390 x 844 confirmed all
  four FLTRP milestones, the updated Baidu card, and the three exact-date daily
  tasks, with no horizontal overflow or console errors/warnings.
- Remaining evidence boundary: the supplied screenshot does not show its year;
  the two FLTRP events are recorded as 2026 because the notice was supplied in
  the active 2026 season. Change the year if the hidden notice header says
  otherwise. Baidu's national-final date remains pending final confirmation.
