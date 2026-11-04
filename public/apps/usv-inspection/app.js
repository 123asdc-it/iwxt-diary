const $ = (s, p = document) => p.querySelector(s),
  $$ = (s, p = document) => [...p.querySelectorAll(s)];
const paths = {
  monitor:
    '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4m-6-10h3l2-3 3 6 2-3h2"/>',
  model: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5zm0 10 9-5M3 7l9 5v10"/>',
  report:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M8 12h8m-8 4h6"/>',
  data: '<path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/>',
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
  camera:
    '<path d="M14 5h-4L8 8H3v12h18V8h-5l-2-3z"/><circle cx="12" cy="14" r="4"/>',
  battery:
    '<rect x="2" y="6" width="18" height="12" rx="2"/><path d="M23 10v4M5 9v6m3-6v6m3-6v6m3-6v6"/>',
  speed:
    '<path d="M4 18a9 9 0 1 1 16 0M12 13l5-5M6 17h12"/><circle cx="12" cy="13" r="1.5"/>',
  route:
    '<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M5 7v8a4 4 0 0 0 4 4h8M8 5h7a4 4 0 0 1 0 8h-3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pause: '<path d="M8 5v14m8-14v14"/>',
  play: '<path d="m8 4 12 8-12 8V4z"/>',
  expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  reset: '<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  check: '<path d="m5 12 4 4 10-10"/>',
  shield:
    '<path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4z"/><path d="m8 12 3 3 5-6"/>',
  warning: '<path d="m12 3 10 18H2L12 3zm0 6v5m0 3v.1"/>',
  layers: '<path d="m12 3 10 6-10 6L2 9l10-6zm-9 11 9 5 9-5M3 18l9 5 9-5"/>',
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.data}</svg>`;
const pages = [
  ["monitor", "巡检监控", "01"],
  ["model", "三维重建", "02"],
  ["report", "巡检报告", "03"],
  ["data", "原始数据", "04"],
];
const defects = [
  {
    id: "A-07",
    title: "接缝疑似细裂纹",
    position: "K0+826",
    level: "中风险",
    cls: "warning",
    type: "表面裂纹",
    note: "接缝区域存在疑似细裂纹，建议补充近距离影像后人工复核。",
    action: "近距离复拍 · 人工复核",
  },
  {
    id: "A-11",
    title: "临水面局部缺损",
    position: "K0+864",
    level: "高风险",
    cls: "danger",
    type: "局部缺损",
    note: "临水面局部形态存在差异，建议优先安排现场检查。此处为交互演示标注。",
    action: "优先现场检查",
  },
  {
    id: "A-14",
    title: "表面附着物变化",
    position: "K0+903",
    level: "低风险",
    cls: "muted",
    type: "附着物变化",
    note: "表面附着物形态出现变化，建议记录后在下次任务中复拍。",
    action: "记录 · 下次复巡",
  },
];
let current = "monitor",
  selected = 0,
  cloud = null,
  toastTimer,
  filter = "all",
  query = "",
  routeMap = null,
  monitorView = "camera",
  pendingCloudMode = null;
$("#navigation").innerHTML = pages
  .map(
    ([id, label, n]) =>
      `<a class="nav-item" href="#${id}" aria-label="${label}" data-page="${id}">${icon(id)}<span>${label}</span><span class="nav-num">${n}</span></a>`,
  )
  .join("");
function toast(text) {
  $("#toast").textContent = text;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2800);
}
function heading(eyebrow, title, sub, actions = "") {
  return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${sub}</p></div><div class="heading-actions">${actions}</div></div>`;
}
function stat(ic, label, value, unit, note) {
  return `<div class="stat-card"><div class="stat-icon">${icon(ic)}</div><div class="stat-content"><div class="stat-label">${label}</div><div class="stat-value">${value}<small>${unit}</small></div><div class="stat-note">${note}</div></div></div>`;
}
function monitor() {
  return (
    heading(
      "MISSION CONTROL / 01",
      "巡检监控",
      "云台看现场，航迹看位置。",
      `<button class="button" id="openReplay">${icon("expand")}放大回放</button><a href="#model" class="button primary">查看建模 ${icon("arrow")}</a>`,
    ) +
    `<div class="monitor-workspace">
      <aside class="stack telemetry-column">
        <section class="panel"><div class="panel-head"><h2>${icon("battery")}设备状态</h2><span class="pill warning">演示</span></div>
          <div class="device-body"><div class="device-label"><span>电池健康 / 剩余电量</span><span class="health-ok">正常</span></div><div class="battery">82<small> %</small></div><div class="bar"><i style="width:82%"></i></div>
            <div class="speed-readout"><span>${icon("speed")}运行速度</span><strong>2.3 <small>kn</small></strong></div>
            <div class="device-row"><span>通信质量</span><b class="health-ok">良好</b></div><div class="device-row"><span>舱内温度</span><b>31.4 ℃</b></div><div class="device-row"><span>存储剩余</span><b>63 %</b></div>
            <div class="thrusters"><div><small>左推进器</small><strong>1,810</strong><em>rpm</em></div><div><small>右推进器</small><strong>1,796</strong><em>rpm</em></div></div>
          </div></section>
        <section class="panel"><div class="panel-head"><h2>${icon("pin")}航迹位置</h2><span class="meta">青岛示例</span></div><div class="device-body"><div class="position"><span>LAT</span>36.0480° N<br><span>LON</span>120.3940° E</div><div class="position-source">与第二视图的演示船位对应</div><div class="device-row"><span>定位模式</span><b>RTK 示例</b></div><div class="device-row"><span>卫星数量</span><b>24</b></div></div></section>
      </aside>
      <div class="stack monitor-content">
        <section class="panel main-monitor"><div class="monitor-tabs" role="tablist" aria-label="监控展示部分"><button class="monitor-tab active" role="tab" aria-selected="true" aria-controls="cameraView" id="cameraTab" data-monitor="camera">${icon("camera")}<span>01 云台监控</span></button><button class="monitor-tab" role="tab" aria-selected="false" aria-controls="trajectoryView" id="trajectoryTab" data-monitor="trajectory" tabindex="-1">${icon("route")}<span>02 青岛航迹</span></button><span class="view-context">USV-01 / 近岸巡检</span></div>
          <div id="cameraView" role="tabpanel" aria-labelledby="cameraTab"><div class="camera-stage"><video id="trialVideo" src="assets/trial-replay.mp4" poster="assets/trial-frame.jpg" muted playsinline autoplay loop aria-label="船载云台视角历史试验录像"></video><div class="camera-topline"><span class="pill warning"><span class="dot amber"></span>云台视角 · 录像回放</span><span class="camera-feed-id">CAM 01</span></div><div class="camera-caption"><div><small>ONBOARD GIMBAL CAMERA</small><strong>云台主视角</strong></div><span class="pill muted">历史试验素材</span></div></div>
            <div class="video-controls"><button class="icon-button" id="toggleReplay" aria-label="暂停回放">${icon("pause")}</button><span class="video-time" id="replayTime">00:00</span><div class="video-progress"><i id="replayProgress"></i></div><span class="video-time">循环回放</span><button class="icon-button" id="fullscreenReplay" aria-label="放大云台回放">${icon("expand")}</button></div><div class="source-note">2026.08.03 船载试验回放；画面内仪表为历史记录，与左侧演示状态分开。</div>
          </div>
          <div id="trajectoryView" role="tabpanel" aria-labelledby="trajectoryTab" hidden><div class="trajectory-toolbar"><div><strong>青岛 · 浮山湾周边</strong><span>扁平街道底图 / 演示航迹</span></div><button class="button small" id="fitRoute">${icon("pin")}定位航迹</button></div><div class="trajectory-stage"><div id="qingdaoMap" aria-label="青岛扁平地图与演示航迹"></div><div class="map-loading" id="mapLoading">正在载入青岛街道底图…</div><div class="map-overlay"><span class="dot amber"></span>已巡检<span class="dot"></span>计划航迹</div></div><div class="source-note">青岛街道底图：OpenStreetMap；航迹为前端示例，与历史回放不属于同一采集任务。</div></div>
        </section>
        <div class="stats-row monitor-stats">${stat("route", "演示巡检里程", "2.84", "km", "岸堤 A 段")}${stat("clock", "演示任务时长", "42:16", "", "采集过程回放")}${stat("camera", "演示采集影像", "1,286", "帧", "多视角影像序列")}</div>
        <section class="panel mission-summary"><div><span class="meta">任务进度</span><strong>72.6 <small>%</small></strong><div class="bar"><i style="width:72.6%"></i></div></div><div class="mission-event"><span class="dot amber"></span><p>发现疑似表面异常<small>A-11 · 待人工复核</small></p></div><a class="button" href="#report">巡检报告 ${icon("arrow")}</a></section>
      </div>
    </div>`
  );
}
function model() {
  return (
    heading(
      "RECONSTRUCTION / 02",
      "建模结果与缺陷",
      "先看实景形态，再看与上次相比的变化。",
      `<button class="button secondary-action" data-mode="raw">${icon("layers")}素材点云</button><a class="button primary" href="#report">查看报告 ${icon("arrow")}</a>`,
    ) +
    `<div class="model-layout"><section class="panel model-main"><div class="model-sections" role="tablist" aria-label="建模展示部分"><button class="model-section active" role="tab" aria-selected="true" aria-controls="modelWorkspace" id="sceneTab" data-mode="scene">01 实景建模与缺陷</button><button class="model-section" role="tab" aria-selected="false" aria-controls="modelWorkspace" id="changeTab" data-mode="change" tabindex="-1">02 点云变化对比</button></div>
      <div id="modelWorkspace" role="tabpanel" aria-labelledby="sceneTab"><div class="model-toolbar"><div class="interaction-tabs" aria-label="三维拖动方式"><button class="button small active" data-interaction="pan" aria-pressed="true">${icon("expand")}平移</button><button class="button small" data-interaction="rotate" aria-pressed="false">${icon("reset")}旋转</button></div><div class="viewer-actions"><button class="icon-button" id="zoomOut" aria-label="缩小三维视图">−</button><button class="icon-button" id="zoomIn" aria-label="放大三维视图">＋</button><button class="button small" id="resetView">${icon("reset")}复位</button></div></div>
      <div class="comparison-tools" id="comparisonTools" hidden><div class="epoch-controls" aria-label="点云时相"><button class="epoch-button active" data-epoch="overlay" aria-pressed="true">叠加对比</button><button class="epoch-button" data-epoch="previous" aria-pressed="false">仅上次</button><button class="epoch-button" data-epoch="current" aria-pressed="false">仅本次</button></div><div class="comparison-legend"><span><i class="cyan-swatch"></i>上次</span><span><i class="orange-swatch"></i>本次</span><span><i class="gray-swatch"></i>稳定区域</span></div></div>
      <div class="cloud-stage" id="cloudStage"><canvas id="cloudCanvas" tabindex="0" aria-label="三维视图：默认拖动平移，右键或 Shift 拖动旋转，滚轮缩放，R复位。方向键平移，Shift加方向键旋转。"></canvas><div class="stage-label" id="stageLabel">SCENE / 01<strong>实景建模展示 · 交互示意</strong></div>${defects.map((d, i) => `<button class="model-marker ${i === selected ? "active" : ""}" data-defect="${i}" aria-label="查看缺陷 ${d.id} ${d.title}">${i + 1}</button>`).join("")}<div class="axis">Z ↑<br>↙ Y　X →</div><div class="model-help">拖动平移 · 右键 / Shift 拖动旋转 · 滚轮缩放</div><div class="cloud-status" id="cloudStatus">正在准备三维场景…</div></div><div class="model-footer"><span id="modelSource">程序生成示意 · 待接入对应实景成果</span><span id="modelLegend">● 缺陷点 1 / 2 / 3</span></div></div></section>
      <div class="stack model-side-stack"><section class="panel"><div class="panel-head"><h2>${icon("pin")}缺陷详情</h2><span class="meta">示例标注</span></div><div id="defectDetail"></div></section><section class="panel"><div class="panel-head"><h2>${icon("warning")}疑似异常</h2><span class="meta">03 处</span></div><div class="defect-list">${defects.map((d, i) => `<button class="defect-select ${i === selected ? "active" : ""}" data-defect="${i}"><span class="number">${i + 1}</span><span><strong>${d.title}</strong><small>${d.id} · ${d.position}</small></span></button>`).join("")}</div></section></div></div>
      <section class="panel changes-summary" id="changesSummary" hidden><div class="panel-head"><h2>${icon("layers")}与上次相比，哪些地方变了？</h2><span class="pill warning">两期示意点云</span></div><div class="change-cards"><div><span class="change-no">01</span><div><strong>接缝区域</strong><p>本次表面出现窄带差异，建议复拍确认。</p></div></div><div><span class="change-no">02</span><div><strong>临水面局部缺损</strong><p>本次表面低于上次，橙、青两层可见分离。</p></div></div><div><span class="change-no">03</span><div><strong>附着物变化</strong><p>本次局部表面新增凸起，待人工复核。</p></div></div></div></section>
      <div class="model-bottom"><section class="panel info-tile"><small>浏览方式</small><strong>默认平移 · 可切换旋转</strong><p>缺陷标记绑定三维位置，平移、转动和缩放时均跟随。</p></section><section class="panel info-tile"><small>实景成果</small><strong>展示结构已就位</strong><p>当前为岸堤交互示意；原工程 PLY 可从右上角单独查看。</p></section><section class="panel info-tile"><small>点云对比</small><strong>上次 / 本次 / 叠加</strong><p>两期点云由示意场景生成，用于演示前后变化的查看方式。</p></section></div>`
  );
}
function defectDetail() {
  const d = defects[selected];
  return `<div class="defect-info"><span class="pill ${d.cls}">${d.level} · 待复核</span><h3>${d.title}</h3><p>${d.note}</p><div class="data-pair"><span>缺陷编号</span><b>${d.id}</b></div><div class="data-pair"><span>所在区段</span><b>${d.position} · 示例桩号</b></div><div class="data-pair"><span>问题类型</span><b>${d.type}</b></div><div class="data-pair"><span>标注来源</span><b>前端演示数据</b></div><div class="defect-actions"><a class="button" href="#data">查看素材</a><a class="button primary" href="#report">报告详情</a></div></div>`;
}
function report() {
  return (
    heading(
      "INSPECTION REPORT / 03",
      "巡检报告",
      "让发现有记录，让复核有依据。",
      `<button class="button secondary-action" id="exportCsv">${icon("download")}异常清单</button><button class="button primary" id="printReport">${icon("report")}打印 / 存为 PDF</button>`,
    ) +
    `<div class="stats-row">${stat("check", "任务状态", "已完成", "", "演示任务 · A 段")}${stat("route", "演示巡检里程", "2.84", "km", "单程近岸巡检")}${stat("warning", "疑似异常", "03", "处", "1 处高风险 · 2 处常规复核")}${stat("report", "报告版本", "V1.0", "", "前端示例报告")}</div><div class="report-layout"><article class="report-paper"><div class="paper-top"><span>舟行见微 / SHORELINE INTELLIGENCE</span><span>DEMO · 2026-11-01</span></div><div class="paper-eyebrow">COASTAL INSPECTION REPORT</div><h2>岸堤巡检任务报告</h2><div class="paper-meta"><span>报告编号：DEMO-A-001</span><span>任务区段：岸堤 A 段</span><span>数据性质：交互演示</span></div><div class="paper-summary"><div><small>示例巡检里程</small><b>2.84 <small style="display:inline">km</small></b></div><div><small>疑似异常</small><b>03 <small style="display:inline">处</small></b></div><div><small>待人工复核</small><b>03 <small style="display:inline">处</small></b></div></div><h3>01 / 巡检概述</h3><p>本示例报告演示岸堤巡检结果的组织方式，覆盖任务概况、疑似异常位置及复核建议。以下缺陷、桩号与风险等级为前端示例，不作为工程检测结论。</p><h3>02 / 异常与复核清单</h3><table class="paper-table"><thead><tr><th>编号 / 位置</th><th>问题描述</th><th>风险</th><th>复核建议</th></tr></thead><tbody>${defects.map((d) => `<tr><td>${d.id}<br><span style="color:#758799">${d.position}</span></td><td>${d.title}</td><td>${d.level}</td><td>${d.action}</td></tr>`).join("")}</tbody></table><h3>03 / 后续建议</h3><p>优先检查 A-11 局部缺损区域；补充 A-07 近距离影像；在后续复巡中记录 A-14 附着物变化。将现场复核结果与原始影像、点云分别归档。</p><div class="paper-foot"><span>前端示例 · 非正式检测报告</span><span>01 / 01</span></div></article><aside class="stack"><section class="panel report-side"><h3>报告操作</h3><div class="data-pair"><span>当前报告</span><b>DEMO-A-001</b></div><div class="data-pair"><span>异常条目</span><b>3 条</b></div><div class="data-pair"><span>报告状态</span><span class="pill warning">示例预览</span></div><button class="button primary" id="downloadHtml">${icon("download")}下载当前报告 HTML</button><button class="button" id="downloadCsv">${icon("download")}下载异常清单 CSV</button><p class="tip">可通过浏览器打印将当前示例报告保存为 PDF。</p></section><section class="panel report-side"><h3>已有报告素材</h3><p class="tip">原工程中的 PDF 已独立复制，内容与上方前端示例分开保留，可作为版式参考。</p><button class="button" id="previewExisting">${icon("eye")}查看已有 PDF</button><a class="button" download="原工程报告素材.pdf" href="assets/existing-report.pdf">${icon("download")}下载已有 PDF</a></section></aside></div>`
  );
}
const files = [
  {
    name: "船载试验回放",
    ext: "MP4",
    type: "video",
    size: "约 24 秒",
    source: "2026.08.03 · 本地试验素材",
    url: "assets/trial-replay.mp4",
    thumb: "assets/trial-frame.jpg",
    icon: "play",
  },
  {
    name: "船载影像截帧",
    ext: "JPG",
    type: "image",
    size: "960 × 600",
    source: "从上述试验回放截取",
    url: "assets/trial-frame.jpg",
    thumb: "assets/trial-frame.jpg",
    icon: "camera",
  },
  {
    name: "项目无人船照片",
    ext: "PNG",
    type: "image",
    size: "原工程素材",
    source: "设备外观 · 非船载视角",
    url: "assets/usv.png",
    thumb: "assets/usv.png",
    icon: "camera",
  },
  {
    name: "SFM 抽样点云素材",
    ext: "PLY",
    type: "cloud",
    size: "约 3.1 MB",
    source: "原工程文件 · 场景待核对",
    url: "assets/shoreline-sfm-web.ply",
    icon: "model",
  },
  {
    name: "已有巡检报告素材",
    ext: "PDF",
    type: "document",
    size: "原工程文档",
    source: "独立素材 · 与示例报告分开",
    url: "assets/existing-report.pdf",
    icon: "report",
  },
];
function data() {
  return (
    heading(
      "DATA ARCHIVE / 04",
      "原始数据",
      "回到原始材料，查看每一个结果的来处。",
      `<span class="pill muted">${icon("data")}本地素材库</span>`,
    ) +
    `<div class="stats-row">${stat("data", "已归档素材", "05", "项", "本地独立副本")}${stat("play", "视频素材", "01", "段", "船载试验历史录像")}${stat("camera", "图片素材", "02", "张", "截帧 / 设备照片")}${stat("layers", "点云与文档", "02", "项", "PLY 素材 / 原有 PDF")}</div><div class="file-filters"><div class="tabs" aria-label="文件类型筛选">${[
      ["all", "全部素材"],
      ["video", "视频"],
      ["image", "图片"],
      ["cloud", "点云"],
      ["document", "文档"],
    ]
      .map(
        ([id, text]) =>
          `<button class="tab ${id === filter ? "active" : ""}" data-filter="${id}">${text}</button>`,
      )
      .join(
        "",
      )}</div><label class="search">${icon("search")}<input id="fileSearch" type="search" placeholder="搜索素材名称…" aria-label="搜索素材名称" value=""></label></div><div class="file-grid" id="fileGrid"></div><div class="archive-note">${icon("shield")}素材来自不同来源或批次，分别保留来源说明。缺陷标注和任务遥测为前端演示数据，尚未与这些文件建立实测关联。</div>`
  );
}
function renderFiles() {
  const hits = files
    .map((f, i) => ({ ...f, i }))
    .filter(
      (f) =>
        (filter === "all" || f.type === filter) &&
        f.name.toLowerCase().includes(query.toLowerCase()),
    );
  $("#fileGrid").innerHTML = hits.length
    ? hits
        .map(
          (f) =>
            `<article class="panel file-card"><div class="file-thumb">${f.thumb ? `<img src="${f.thumb}" alt="${f.name}缩略图" ${f.url.endsWith("usv.png") ? 'style="object-fit:contain;padding:20px"' : ""}>` : icon(f.icon)}<span class="file-type">${f.ext}</span></div><div class="file-detail"><h3>${f.name}</h3><p>${f.source}<br>${f.size}</p><div class="file-actions"><button class="button small" data-preview="${f.i}">${icon("eye")}查看</button><a class="button small" href="${f.url}" download>${icon("download")}下载</a></div></div></article>`,
        )
        .join("")
    : '<div class="empty">没有找到匹配的素材，试试其他名称或分类。</div>';
  $$("[data-preview]").forEach(
    (b) => (b.onclick = () => previewFile(Number(b.dataset.preview))),
  );
}
function dialog(title, content) {
  $("#dialogTitle").textContent = title;
  $("#dialogBody").innerHTML = content;
  $("#previewDialog").showModal();
}
function previewFile(i) {
  const f = files[i];
  if (f.type === "cloud") {
    pendingCloudMode = "raw";
    location.hash = "model";
    return;
  }
  dialog(
    f.name,
    f.type === "video"
      ? `<video src="${f.url}" controls autoplay muted playsinline></video>`
      : f.type === "image"
        ? `<img src="${f.url}" alt="${f.name}">`
        : `<iframe title="已有报告 PDF" src="${f.url}"></iframe>`,
  );
}
$("#closeDialog").onclick = () => $("#previewDialog").close();
$("#previewDialog").addEventListener("close", () =>
  $("#dialogBody").replaceChildren(),
);
$("#previewDialog").addEventListener("click", (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  if (
    e.clientX < r.left ||
    e.clientX > r.right ||
    e.clientY < r.top ||
    e.clientY > r.bottom
  )
    e.currentTarget.close();
});
function selectDefect(i) {
  selected = i;
  $("#defectDetail").innerHTML = defectDetail();
  $$("[data-defect]").forEach((b) => {
    b.classList.toggle("active", Number(b.dataset.defect) === selected);
    b.setAttribute(
      "aria-pressed",
      String(Number(b.dataset.defect) === selected),
    );
  });
}
function setMode(mode) {
  $$(".model-section").forEach((b) => {
    const active = b.dataset.mode === (mode === "raw" ? "scene" : mode);
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", String(active));
    b.tabIndex = active ? 0 : -1;
  });
  cloud?.setMode(mode);
  $("#modelWorkspace").setAttribute(
    "aria-labelledby",
    mode === "change" ? "changeTab" : "sceneTab",
  );
  $("#comparisonTools").hidden = mode !== "change";
  $("#changesSummary").hidden = mode !== "change";
  $("#stageLabel").innerHTML =
    mode === "raw"
      ? "SOURCE MATERIAL / PLY<strong>原工程点云素材 · 场景待核对</strong>"
      : mode === "change"
        ? "POINT CLOUD / 02<strong>上次与本次 · 同坐标叠加对比</strong>"
        : "SCENE / 01<strong>实景建模展示 · 交互示意</strong>";
  $("#modelSource").textContent =
    mode === "raw"
      ? "原工程 PLY 副本 · 独立素材"
      : mode === "change"
        ? "两期程序生成点云 · 非实测对比"
        : "程序生成示意 · 待接入对应实景成果";
  $("#modelLegend").textContent =
    mode === "change"
      ? "青 = 上次 / 橙 = 本次"
      : mode === "raw"
        ? "已隐藏示意缺陷标记"
        : "● 缺陷点 1 / 2 / 3";
  $$("[data-epoch]").forEach((b) => {
    b.classList.toggle("active", b.dataset.epoch === "overlay");
    b.setAttribute("aria-pressed", String(b.dataset.epoch === "overlay"));
  });
}
function initRouteMap() {
  if (routeMap) {
    routeMap.invalidateSize();
    return;
  }
  const message = $("#mapLoading");
  if (!window.L) {
    message.textContent = "地图组件未能载入，请刷新页面。";
    return;
  }
  const route = [
    [36.0522, 120.382],
    [36.0514, 120.3856],
    [36.0502, 120.3894],
    [36.048, 120.394],
    [36.0469, 120.3986],
    [36.0457, 120.402],
  ];
  routeMap = L.map("qingdaoMap", {
    scrollWheelZoom: false,
    maxZoom: 17,
    minZoom: 10,
    zoomControl: false,
  }).setView([36.058, 120.392], 13);
  L.control
    .zoom({ zoomInTitle: "放大地图", zoomOutTitle: "缩小地图" })
    .addTo(routeMap);
  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
  }).addTo(routeMap);
  let loaded = false;
  tiles.on("tileload", () => {
    loaded = true;
    if (message.isConnected) message.hidden = true;
  });
  tiles.on("tileerror", () => {
    if (!loaded && message.isConnected) {
      message.textContent =
        "街道底图暂未载入，航迹仍可查看。请检查网络后刷新。";
      message.classList.add("map-unavailable");
    }
  });
  L.polyline(route, { color: "#338f87", weight: 5, dashArray: "7 10" }).addTo(
    routeMap,
  );
  L.polyline(route.slice(0, 4), { color: "#c98516", weight: 6 }).addTo(
    routeMap,
  );
  L.circleMarker(route[0], {
    color: "#fff",
    weight: 2,
    fillColor: "#308e7c",
    fillOpacity: 1,
    radius: 7,
  })
    .addTo(routeMap)
    .bindTooltip("巡检起点", { permanent: true, direction: "top" });
  L.marker(route[3], {
    icon: L.divIcon({
      className: "vessel-map-marker",
      html: "<span>▲</span>",
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    }),
  })
    .addTo(routeMap)
    .bindTooltip("USV-01 · 演示船位", {
      permanent: true,
      direction: "top",
      offset: [0, -12],
    });
  L.control.scale({ imperial: false, position: "bottomleft" }).addTo(routeMap);
  $("#fitRoute").onclick = () =>
    routeMap.fitBounds(L.latLngBounds(route).pad(0.8), { maxZoom: 14 });
}
function setMonitorView(view) {
  monitorView = view;
  $$("[data-monitor]").forEach((b) => {
    const active = b.dataset.monitor === view;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", String(active));
    b.tabIndex = active ? 0 : -1;
  });
  $("#cameraView").hidden = view !== "camera";
  $("#trajectoryView").hidden = view !== "trajectory";
  const video = $("#trialVideo");
  if (view === "trajectory") {
    video.pause();
    initRouteMap();
  } else video.play().catch(() => {});
}
function wireTabKeys(selector, activate) {
  const buttons = $$(selector);
  buttons.forEach((button, index) =>
    button.addEventListener("keydown", (e) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      const next =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? buttons.length - 1
            : (index + (e.key === "ArrowRight" ? 1 : -1) + buttons.length) %
              buttons.length;
      buttons[next].focus();
      activate(buttons[next]);
    }),
  );
}
function download(name, text, type) {
  const u = URL.createObjectURL(new Blob([text], { type })),
    a = document.createElement("a");
  a.href = u;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1500);
  toast("已开始下载");
}
function exportCsv() {
  download(
    "示例异常清单.csv",
    "\uFEFF编号,位置,问题,风险,建议,数据性质\n" +
      defects
        .map((d) =>
          [d.id, d.position, d.title, d.level, d.action, "演示数据"].join(","),
        )
        .join("\n"),
    "text/csv;charset=utf-8",
  );
}
function bind() {
  if (current === "monitor") {
    const v = $("#trialVideo");
    const update = () => {
      if (!v.isConnected) return;
      $("#replayProgress").style.width =
        `${v.duration ? (v.currentTime / v.duration) * 100 : 0}%`;
      $("#replayTime").textContent =
        `00:${String(Math.floor(v.currentTime)).padStart(2, "0")}`;
    };
    v.addEventListener("timeupdate", update);
    v.addEventListener("play", () => {
      if (!v.isConnected) return;
      $("#toggleReplay").innerHTML = icon("pause");
      $("#toggleReplay").setAttribute("aria-label", "暂停回放");
    });
    v.addEventListener("pause", () => {
      if (!v.isConnected) return;
      $("#toggleReplay").innerHTML = icon("play");
      $("#toggleReplay").setAttribute("aria-label", "播放回放");
    });
    v.play().catch(() => {
      if (!v.isConnected) return;
      $("#toggleReplay").innerHTML = icon("play");
      $("#toggleReplay").setAttribute("aria-label", "播放回放");
    });
    $("#toggleReplay").onclick = () =>
      v.paused ? v.play().catch(() => toast("请点击画面播放")) : v.pause();
    const large = () =>
      dialog(
        "船载试验录像 · 2026.08.03",
        `<video src="assets/trial-replay.mp4" controls autoplay muted playsinline></video>`,
      );
    $("#openReplay").onclick = large;
    $("#fullscreenReplay").onclick = large;
    $$("[data-monitor]").forEach(
      (b) => (b.onclick = () => setMonitorView(b.dataset.monitor)),
    );
    wireTabKeys("[data-monitor]", (b) => setMonitorView(b.dataset.monitor));
    setMonitorView(monitorView);
  }
  if (current === "model") {
    selectDefect(selected);
    $$("[data-defect]").forEach(
      (b) => (b.onclick = () => selectDefect(Number(b.dataset.defect))),
    );
    cloud = new ShoreCloud(
      $("#cloudCanvas"),
      (positions, hide) => {
        $$(".model-marker").forEach((m, i) => {
          m.style.left = positions[i][0] + "px";
          m.style.top = positions[i][1] + "px";
          m.style.display = hide ? "none" : "";
        });
      },
      (text) => {
        const s = $("#cloudStatus");
        if (s) {
          s.textContent = text;
          s.style.display = text ? "grid" : "none";
        }
      },
    );
    $("#resetView").onclick = () => {
      cloud.reset();
      toast("视角已复位");
    };
    $("#zoomOut").onclick = () =>
      (cloud.dist = Math.min(18, cloud.dist * 1.15));
    $("#zoomIn").onclick = () =>
      (cloud.dist = Math.max(3.3, cloud.dist / 1.15));
    $$("[data-interaction]").forEach(
      (b) =>
        (b.onclick = () => {
          cloud.panMode = b.dataset.interaction === "pan";
          $$("[data-interaction]").forEach((x) => {
            const active = x === b;
            x.classList.toggle("active", active);
            x.setAttribute("aria-pressed", String(active));
          });
        }),
    );
    $$("[data-mode]").forEach(
      (b) => (b.onclick = () => setMode(b.dataset.mode)),
    );
    wireTabKeys(".model-section", (b) => setMode(b.dataset.mode));
    $$("[data-epoch]").forEach(
      (b) =>
        (b.onclick = () => {
          cloud.setEpoch(b.dataset.epoch);
          $$("[data-epoch]").forEach((x) => {
            x.classList.toggle("active", x === b);
            x.setAttribute("aria-pressed", String(x === b));
          });
        }),
    );
    if (pendingCloudMode) {
      setMode(pendingCloudMode);
      pendingCloudMode = null;
    }
  }
  if (current === "report") {
    $("#exportCsv").onclick = exportCsv;
    $("#downloadCsv").onclick = exportCsv;
    $("#printReport").onclick = () => window.print();
    $("#downloadHtml").onclick = () => {
      download(
        "岸堤巡检示例报告.html",
        '<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><title>岸堤巡检示例报告</title><style>body{font:16px/1.8 system-ui;max-width:850px;margin:45px auto;color:#253747;padding:20px}table{width:100%;border-collapse:collapse}td,th{padding:14px;border-bottom:1px solid #ccd5dd;text-align:left}.paper-top,.paper-meta,.paper-foot,.paper-summary{display:flex;justify-content:space-between;gap:20px}.paper-meta,.paper-foot,.paper-eyebrow{font-size:14px;color:#6d7e8f}.paper-summary{background:#eef2f5;padding:20px}.paper-summary small{display:block}.paper-summary b{font-size:25px}h2{font-size:28px}</style>' +
          $(".report-paper").outerHTML +
          "</html>",
        "text/html;charset=utf-8",
      );
    };
    $("#previewExisting").onclick = () => previewFile(4);
  }
  if (current === "data") {
    renderFiles();
    $("#fileSearch").value = query;
    $("#fileSearch").addEventListener("input", (e) => {
      query = e.target.value;
      renderFiles();
    });
    $$("[data-filter]").forEach(
      (b) =>
        (b.onclick = () => {
          filter = b.dataset.filter;
          $$("[data-filter]").forEach((x) => {
            x.classList.toggle("active", x === b);
            x.setAttribute("aria-pressed", String(x === b));
          });
          renderFiles();
        }),
    );
  }
}
function render() {
  const hash = location.hash.slice(1);
  current = pages.some((p) => p[0] === hash) ? hash : "monitor";
  cloud?.dispose();
  cloud = null;
  routeMap?.remove();
  routeMap = null;
  const old = $("#trialVideo");
  old?.pause();
  $("#main").innerHTML = { monitor, model, report, data }[current]();
  $("#breadcrumb").textContent = pages.find((p) => p[0] === current)[1];
  $$(".nav-item").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === current);
    if (a.dataset.page === current) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.title = pages.find((p) => p[0] === current)[1] + " · 舟行见微";
  bind();
  window.scrollTo({ top: 0, behavior: "instant" });
}
$(".skip-link").addEventListener("click", (e) => {
  e.preventDefault();
  $("#main").focus();
});
window.addEventListener("hashchange", render);
render();
