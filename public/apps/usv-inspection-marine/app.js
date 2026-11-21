const $ = (s, p = document) => p.querySelector(s),
  $$ = (s, p = document) => [...p.querySelectorAll(s)];
const paths = {
  tasks: '<path d="m3 11 9-8 9 8M5 10v11h5v-7h4v7h5V10"/>',
  monitor:
    '<rect x="3" y="4" width="18" height="15" rx="2"/><path d="M8 22h8M7 12h3l2-4 3 8 2-4h2"/>',
  model: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5zm0 10 9-5M3 7l9 5v10"/>',
  report: '<path d="M14 2H5v20h14V7zM14 2v6h5M8 12h8M8 16h8"/>',
  data: '<path d="M3 5h7l3 3h8v13H3z"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
  camera: '<path d="M3 6h18v14H3z"/><circle cx="12" cy="13" r="4"/>',
  play: '<path d="m8 4 12 8-12 8z"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  shield: '<path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6z"/>',
  layers: '<path d="m12 3 10 6-10 6L2 9zm-9 11 9 5 9-5"/>',
};
const icon = (n) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[n] || paths.data}</svg>`;
const pages = [
  ["monitor", "巡检监控", "01"],
  ["model", "三维重建", "02"],
  ["report", "巡检报告", "03"],
  ["data", "原始数据", "04"],
];
let current = "login",
  selected = 0,
  cloud = null,
  toastTimer,
  filter = "all",
  query = "",
  pendingCloudMode = null;
let reconstructionMode = "gaussian";
let reconstructionQuality = "quick";
let reconstructionModule;
function loadReconstructionModule() {
  if (reconstructionModule) return reconstructionModule;
  const local = "./reconstruction.bundle.js?v=20261117-fast4";
  if (!window.INSPECTION_ASSET_ORIGIN) return reconstructionModule = import(local);
  // Keep this revision aligned with the published bundle when rebuilding it.
  const cdn = "https://cdn.jsdelivr.net/gh/123asdc-it/iwxt-diary@e45a718e2946cdf714db378267dbd1594a6ee941/public/apps/usv-inspection-marine/reconstruction.bundle.js";
  let timer;
  reconstructionModule = Promise.race([
    import(cdn),
    new Promise((_, reject) => { timer = setTimeout(() => reject(Error("Module timeout")), 5000); }),
  ]).catch(() => import(local)).finally(() => clearTimeout(timer)).catch(error => {
    reconstructionModule = null;
    throw error;
  });
  return reconstructionModule;
}

let mapLibrary;
function loadMapLibrary() {
  if (window.L) return Promise.resolve();
  if (!mapLibrary) mapLibrary = import("./vendor/leaflet.js").catch(error => {
    mapLibrary = null;
    throw error;
  });
  return mapLibrary;
}

const reportImages = new Map();

let demo = true,
  mode = "replay",
  offline = false,
  cleanup = () => {},
  playback = new Map(),
  completedTasks = new Set();
const tasks = window.INSPECTION_TASKS;
let task =
  tasks.find((t) => t.id === sessionStorage.getItem("shore-task")) || null;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const clock = (t) =>
  `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
function toast(text) {
  $("#toast").textContent = text;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 3000);
}
function heading(eyebrow, title, sub, actions = "") {
  return `<div class="page-heading"><div><h1>${title}</h1></div><div class="heading-actions">${actions}</div></div>`;
}
function stat(ic, label, value, unit, note) {
  return `<div class="stat-card"><div class="stat-icon">${icon(ic)}</div><div class="stat-content"><div class="stat-label">${label}</div><div class="stat-value">${value}<small>${unit}</small></div><div class="stat-note">${note}</div></div></div>`;
}
function login() {
  return `<section class="login-layout"><div class="login-intro"><h1>每一次巡检，<br>都有迹可循。</h1><p>岸堤巡检与三维重建工作台</p><img src="assets/usv.png" alt="巡检无人船" loading="lazy" decoding="async"/></div><form id="loginForm" class="login-card"><h2>登录工作台</h2><label>账号<input name="account" autocomplete="username" value="demo" required></label><label>密码<input name="password" type="password" autocomplete="current-password" placeholder="请输入密码" required></label><p id="loginError" class="error-text" role="alert"></p><button class="button primary" type="submit">登录 ${icon("arrow")}</button><small>演示账号 demo / 密码 123456</small></form></section>`;
}
function monitor() {
  return `<div class="marine-toolbar"><label class="task-picker"><span>当前任务</span><select id="taskSelect" aria-label="选择巡检任务">${tasks.map((t) => `<option value="${t.id}" ${t.id === task.id ? "selected" : ""}>${t.name} · ${t.subtitle}</option>`).join("")}</select></label><label class="demo-switch"><input id="demoToggle" type="checkbox" ${demo ? "checked" : ""}>演示数据</label><div class="mode-switch" aria-label="数据模式"><button data-mode="live" aria-pressed="${mode === "live"}">实时模式</button><button data-mode="replay" aria-pressed="${mode === "replay"}">历史回放</button></div><span class="pill muted" id="connectionState">演示在线</span><div class="control-spacer"></div><button class="button small" id="connectionToggle" ${!demo ? "disabled" : ""}>${offline ? "恢复演示设备" : "模拟离线"}</button><button class="button primary small" id="startMission">${demo ? "开始任务" : "下发真实任务"}</button></div>
  <div class="marine-workspace"><section class="panel route-panel"><div class="panel-head"><h2>航迹地图</h2><span class="map-heading">${task.mapUrl ? "上位机航迹" : "青岛 · 演示航迹"}</span><button class="button small" id="fitRoute">定位</button></div><div class="route-host" id="routeHost">${task.mapUrl ? `<iframe id="hostMap" title="上位机原版航迹页面" src="${esc(task.mapUrl)}"></iframe>` : `<div id="qingdaoMap" aria-label="青岛地图与演示航迹"></div><div id="mapLoading" class="map-loading">正在加载青岛地图…</div>`}<div class="map-north" aria-hidden="true">N<br>▲</div></div><div class="route-readout"><span>演示船位 <b id="positionValue">—</b></span><span id="mapSync">演示航迹</span></div></section>
  <section class="panel camera-panel"><div class="panel-head"><h2>${icon("camera")}云台监控</h2><div class="camera-actions"><button class="button small" id="toggleReplay">播放</button><button class="button small" id="restartReplay">重播</button><b id="replayTime">00:00</b><button class="button small" id="fullscreenReplay">全屏</button></div></div><div class="camera-view"><video id="trialVideo" muted playsinline preload="metadata" poster="${task.poster}" aria-label="演示云台视频"></video><div class="feed-tag" id="feedLabel"></div><div class="camera-offline" id="cameraOffline" hidden><strong>设备离线</strong><span>画面与设备数据已停止刷新</span></div></div></section>
  <section class="panel events-panel"><div class="panel-head"><h2>疑似异常</h2><span class="meta">${task.events.length} 条</span></div><div class="event-list">${task.events.map((e, i) => `<button class="event-item ${e.cls === "danger" ? "priority-event" : ""}" data-event="${i}"><span class="event-symbol">${e.cls === "danger" ? "△" : "·"}</span><span class="event-name"><strong>${e.title}</strong><small>${e.id}</small></span><span class="event-coordinates" title="演示航迹坐标"><span>${e.lat.toFixed(4)}° N</span><span>${e.lon.toFixed(4)}° E</span></span><span class="event-arrow">›</span></button>`).join("")}</div></section></div>
  <section class="marine-telemetry"><div id="deviceMetrics" class="metric-grid"></div><div class="marine-task-status"><span>任务状态</span><strong id="missionStatus" aria-live="polite">待演示</strong></div><a class="button report-entry" href="#report">${icon("report")}巡检报告</a></section>
  <div class="monitor-status"><span id="syncStatus">同一回放时钟 · 演示数据</span><span id="sourceBadge">${demo ? "模拟数据 · 试验素材复用" : "真实模式 · 未接入设备"}</span><span id="deviceStamp">等待回放</span><span id="absoluteTime"></span></div>`;
}

function model() {
  if (pendingCloudMode === "raw") reconstructionMode = "legacy";
  const source = {
    gaussian: ["3D GAUSSIAN SPLATTING", "实景重建", "317,107 个高斯点"],
    sparse: ["SPARSE POINT CLOUD", "稀疏点云", "6,907 个点"],
    legacy: ["SOURCE MODEL / PLY", "原有点云", "原有素材"],
  }[reconstructionMode];
  return (
    heading(
      "RECONSTRUCTION / " + task.code,
      "三维重建与缺陷标注",
      task.name + " · 新增实景模型与稀疏点云，演示任务共用",
      `<a class="button" href="#monitor">巡检监控</a><a class="button primary" href="#report">巡检报告 ${icon("arrow")}</a>`,
    ) +
    `<div class="model-layout v4-model"><section class="panel model-main"><div class="reconstruction-tabs" aria-label="重建视图">${[
      ["gaussian", "实景重建"],
      ["sparse", "稀疏点云"],
      ["legacy", "原有点云"],
    ]
      .map(
        ([id, label]) =>
          `<button class="button small ${reconstructionMode === id ? "active" : ""}" data-reconstruction="${id}" aria-pressed="${reconstructionMode === id}">${label}</button>`,
      )
      .join(
        "",
      )}<span>${source[2]}</span></div><div class="model-toolbar"><div class="interaction-tabs"><button class="button small active" data-interaction="pan" aria-pressed="true">平移</button><button class="button small" data-interaction="rotate" aria-pressed="false">旋转</button></div><div class="viewer-actions">${reconstructionMode === "gaussian" ? `<button class="button small" id="modelQuality" title="轻量模型优先显示；完整模型保留全部高斯点">${reconstructionQuality === "quick" ? "载入完整模型" : "切回轻量模型"}</button>` : ""}<button class="icon-button" id="zoomOut" aria-label="缩小">−</button><button class="icon-button" id="zoomIn" aria-label="放大">＋</button><button class="button small" id="resetView">复位</button></div></div><div class="cloud-stage ${reconstructionMode === "gaussian" ? "has-model-preview" : ""}" id="cloudStage">${reconstructionMode === "gaussian" ? `<img id="modelPreview" class="model-preview" src="${window.INSPECTION_ASSET_ORIGIN}assets/reconstruction/preview.jpg" alt="模型预览，交互视图载入后可旋转与平移" fetchpriority="high"/>` : ""}<canvas id="cloudCanvas" tabindex="0" aria-label="三维点云，拖动平移，右键或Shift拖动旋转，滚轮缩放"></canvas><div class="stage-label"><strong>${source[1]}</strong></div>${task.events.map((d, i) => `<button class="model-marker" data-defect="${i}" aria-label="演示标注 ${d.id}" style="display:none">${i + 1}</button>`).join("")}<div class="cloud-status" id="cloudStatus">正在读取点云…</div><div class="model-help">拖动平移 · 右键 / Shift 旋转 · 滚轮缩放</div></div><div class="model-footer"><span id="pointCount">PLY 读取中</span><span>${reconstructionMode === "gaussian" ? "3DGS 实景渲染" : "保留点云原色"}</span></div></section><div class="stack"><section class="panel"><div class="panel-head"><h2>缺陷详情</h2></div><div id="defectDetail"></div></section><section class="panel"><div class="panel-head"><h2>标注列表</h2></div><div class="defect-list">${task.events.map((d, i) => `<button class="defect-select" data-defect="${i}"><span class="number">${i + 1}</span><span><strong>${d.title}</strong><small>${d.id}</small></span></button>`).join("")}</div></section></div></div>`
  );
}
function report() {
  const number =
    "ZJ-QD-" + String(tasks.indexOf(task) + 1).padStart(2, "0") + "-R03";
  const pageNames = ["监测数据与影像", "航线与异常复核", "历史对比与总结"];
  return (
    heading(
      "",
      "巡检报告",
      "",
      `<a href="${task.report}" download="${number}-巡检报告.pdf" class="button primary">${icon("download")}下载报告</a>`,
    ) +
    `<div class="report-layout"><section class="report-document"><div class="report-document-toolbar"><strong>${number}</strong><span>完整报告</span></div><div class="report-continuous">${pageNames.map((name, i) => `<section class="report-page-stage" id="report-section-${i + 1}" aria-label="${name}"><div class="report-loading" role="status">正在载入${name}…</div><img class="report-sheet" alt="${name}" width="1191" height="1684" decoding="async" hidden/></section>`).join("")}</div></section><aside class="stack"><section class="panel report-side"><h3>报告信息</h3><dl><div><dt>任务</dt><dd>${task.name}</dd></div><div><dt>报告版本</dt><dd>V3.0</dd></div><div><dt>编制日期</dt><dd>2026-11-18</dd></div></dl><div class="report-actions"><button class="button" id="previewReport">打开 PDF</button><a class="button" href="#monitor">返回监控</a></div></section><section class="panel report-side"><h3>报告目录</h3><div class="report-page-list">${pageNames.map((name, i) => `<button data-report-page="${i + 1}" class="${i === 0 ? "active" : ""}" aria-pressed="${i === 0}"><span>0${i + 1}</span>${name}</button>`).join("")}</div></section></aside></div>`
  );
}
function sampleAt(t) {
  let samples = task.telemetry;
  return [...samples].reverse().find((s) => s.time <= t) || samples[0];
}
function renderMetrics(s) {
  const entries = [
    ["电池健康", s ? `${s.health} %` : "—", false],
    ["剩余电量", s ? `${s.battery} %` : "—", s && s.battery < 25],
    ["运行速度", s ? `${s.speed.toFixed(1)} kn` : "—", false],
    ["通信质量", s ? s.communication : "—", s && s.communication === "较弱"],
    [
      "舱内温度",
      s ? `${s.temperature.toFixed(1)} ℃` : "—",
      s && s.temperature >= 45,
    ],
    ["存储剩余", s ? `${s.storage} %` : "—", s && s.storage < 15],
    ["左推进器", s ? `${s.left} rpm` : "—", false],
    ["右推进器", s ? `${s.right} rpm` : "—", false],
  ];
  $("#deviceMetrics").innerHTML = entries
    .map(
      ([label, value, alarm]) =>
        `<div class="metric ${alarm ? "metric-alarm" : ""}"><span>${label}${alarm ? " · 告警" : ""}</span><strong>${value}</strong></div>`,
    )
    .join("");
}
function bindMonitor() {
  $("#taskSelect").onchange = (e) => {
    cleanup();
    cleanup = () => {};
    task = tasks.find((t) => t.id === e.target.value);
    sessionStorage.setItem("shore-task", task.id);
    offline = false;
    render();
  };
  const mission = task;
  let routeView = null;
  const mapElement = $("#qingdaoMap");
  if (mapElement) loadMapLibrary().then(() => {
    if (!mapElement.isConnected) return;
    routeView = createQingdaoMap(mapElement, mission, demo);
    routeView?.setTime(v.currentTime / mission.duration);
  }).catch(() => {
    if (mapElement.isConnected) $("#mapLoading").textContent = "地图暂不可用，请稍后重试";
  });
  if ($("#fitRoute")) $("#fitRoute").onclick = () => routeView?.fit();
  const v = $("#trialVideo");
  let ended = completedTasks.has(mission.id);
  const disconnected = !demo || offline;
  let saved = playback.get(task.id) || 0;
  routeView?.setTime(saved / mission.duration);
  $("#cameraOffline").hidden = !disconnected;
  $("#connectionState").textContent = disconnected ? "离线" : "演示在线";
  $("#connectionState").className =
    "pill " + (disconnected ? "danger" : "warning");
  $("#feedLabel").textContent = demo
    ? mode === "live"
      ? "录像模拟"
      : "历史回放"
    : "真实流未接入";
  $("#startMission").disabled = disconnected;
  $("#toggleReplay").disabled = disconnected;
  $("#restartReplay").disabled = disconnected;
  $("#fullscreenReplay").disabled = disconnected;
  const update = () => {
    if (!v.isConnected || disconnected) return;
    const t = v.currentTime;
    playback.set(task.id, t);
    const s = sampleAt(t);
    const position = routeView?.setTime(t / mission.duration) || [s.lat, s.lon];
    renderMetrics(s);
    $("#replayTime").textContent = clock(t);
    $("#positionValue").textContent =
      `${position[0].toFixed(4)}° N / ${position[1].toFixed(4)}° E`;
    const absolute = new Date(
      new Date(task.start).getTime() + t * 1000,
    ).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false });
    $("#absoluteTime").textContent = absolute + " · 演示时刻";
    $("#deviceStamp").textContent =
      "状态采样 " + clock(s.time) + " / 视频 " + clock(t) + " · 模拟";
    $("#missionStatus").textContent = ended
      ? "任务已完成"
      : v.paused
        ? t > 0
          ? "已暂停"
          : "待演示"
        : "模拟任务进行中";
    $("#toggleReplay").textContent = v.paused ? "播放" : "暂停";
    $("#syncStatus").textContent = ended
      ? "任务已完成 · 可查看巡检报告"
      : "回放同步";
    $$("[data-event]").forEach((b) =>
      b.classList.toggle(
        "active",
        Math.abs(t - task.events[+b.dataset.event].time) < 1,
      ),
    );
  };
  if (!disconnected) {
    v.src = task.video;
    v.addEventListener(
      "loadedmetadata",
      () => {
        if (saved > 0)
          v.currentTime = Math.min(saved, Math.max(0, v.duration - 0.1));
        update();
      },
      { once: true },
    );
    for (const name of ["timeupdate", "seeked", "play", "pause"])
      v.addEventListener(name, update);
    v.addEventListener("ended", () => {
      ended = true;
      completedTasks.add(mission.id);
      update();
      toast("模拟任务已完成，可查看巡检报告");
    });
    update();
  } else {
    renderMetrics(null);
    $("#deviceStamp").textContent = demo
      ? "设备离线 · 数据停止刷新"
      : "真实设备与历史数据尚未接入";
    $("#missionStatus").textContent = demo ? "设备离线" : "未接入真实设备";
    $("#syncStatus").textContent = "离线 · 不刷新模拟数据";
    $("#absoluteTime").textContent = "—";
    v.removeAttribute("poster");
  }
  async function play() {
    if (disconnected) return;
    ended = false;
    completedTasks.delete(mission.id);
    if (v.ended) v.currentTime = 0;
    try {
      await v.play();
    } catch {
      toast("视频暂时无法播放，请检查素材文件");
    }
  }
  $("#toggleReplay").onclick = () => (v.paused ? play() : v.pause());
  $("#restartReplay").onclick = () => {
    saved = 0;
    ended = false;
    completedTasks.delete(mission.id);
    v.currentTime = 0;
    update();
    play();
  };
  $("#startMission").onclick = () => {
    saved = 0;
    ended = false;
    completedTasks.delete(mission.id);
    v.currentTime = 0;
    play();
  };
  $("#fullscreenReplay").onclick = () => {
    if (v.requestFullscreen)
      v.requestFullscreen().catch(() => toast("浏览器暂不支持全屏"));
    else toast("当前浏览器暂不支持全屏");
  };
  $$("[data-event]").forEach((b) => {
    b.disabled = disconnected;
    b.onclick = () => {
      const seek = () => {
        ended = false;
        completedTasks.delete(mission.id);
        v.pause();
        v.currentTime = task.events[+b.dataset.event].time;
        update();
        toast(
          `已定位 ${task.events[+b.dataset.event].id} · ${clock(v.currentTime)}`,
        );
      };
      if (v.readyState >= 1) seek();
      else v.addEventListener("loadedmetadata", seek, { once: true });
    };
  });
  $$("[data-mode]").forEach(
    (b) =>
      (b.onclick = () => {
        mode = b.dataset.mode;
        render();
      }),
  );
  $("#demoToggle").onchange = (e) => {
    demo = e.target.checked;
    offline = false;
    render();
  };
  $("#connectionToggle").onclick = () => {
    offline = !offline;
    render();
  };
  v.addEventListener("error", () => {
    if (!v.isConnected || disconnected) return;
    v.pause();
    $("#cameraOffline").hidden = false;
    $("#cameraOffline").innerHTML =
      "<strong>视频素材暂不可用</strong><span>请检查素材文件后重试</span>";
    $("#syncStatus").textContent = "视频加载失败 · 已停止回放";
    $("#missionStatus").textContent = "素材加载失败";
  });
  cleanup = () => {
    routeView?.dispose();
    v.pause();
    if (!disconnected) playback.set(mission.id, v.currentTime);
    v.removeAttribute("src");
    v.load();
  };
}
function selectDefect(i) {
  selected = i;
  const d = task.events[i];
  $("#defectDetail").innerHTML =
    `<div class="defect-info"><span class="pill ${d.cls}">${d.level}</span><h3>${d.title}</h3><div class="data-pair"><span>标注编号</span><b>${d.id}</b></div><div class="data-pair"><span>视频位置</span><b>${clock(d.time)}</b></div><div class="defect-actions"><button class="button" id="locateVideo">定位视频</button><a class="button primary" href="#report">查看报告</a></div></div>`;
  $$("[data-defect]").forEach((b) => {
    b.classList.toggle("active", +b.dataset.defect === i);
    b.setAttribute("aria-pressed", String(+b.dataset.defect === i));
  });
  $("#locateVideo").onclick = () => {
    playback.set(task.id, d.time);
    mode = "replay";
    demo = true;
    offline = false;
    navigate("monitor");
  };
}
function bindModel() {
  $$("[data-reconstruction]").forEach((button) => {
    button.onclick = () => {
      reconstructionMode = button.dataset.reconstruction;
      pendingCloudMode = null;
      render();
    };
  });
  if ($("#modelQuality")) $("#modelQuality").onclick = () => {
    reconstructionQuality = reconstructionQuality === "quick" ? "full" : "quick";
    render();
  };
  if (reconstructionMode === "legacy") {
    bindLegacyModel();
    return;
  }
  pendingCloudMode = null;
  selectDefect(0);
  $$("[data-defect]").forEach(
    (b) => (b.onclick = () => selectDefect(+b.dataset.defect)),
  );
  const stage = $("#cloudStage"),
    canvas = $("#cloudCanvas");
  const status = stage.querySelector("#cloudStatus");
  let active = true,
    instance = null,
    pan = true;
  const poster = $("#modelPreview");
  let posterTimer;
  if (poster && window.INSPECTION_ASSET_ORIGIN) {
    const fallback = () => { poster.onerror = null; poster.src = "assets/reconstruction/preview.jpg"; };
    poster.onerror = fallback;
    poster.onload = () => clearTimeout(posterTimer);
    if (!poster.complete) posterTimer = setTimeout(fallback, 5000);
  }
  cleanup = () => {
    active = false;
    clearTimeout(posterTimer);
    instance?.dispose();
  };
  $("#resetView").onclick = () => instance?.reset();
  $("#zoomOut").onclick = () => instance?.zoom(1.15);
  $("#zoomIn").onclick = () => instance?.zoom(1 / 1.15);
  $$("[data-interaction]").forEach(
    (button) =>
      (button.onclick = () => {
        pan = button.dataset.interaction === "pan";
        if (instance) instance.panMode = pan;
        $$("[data-interaction]").forEach((b) => {
          b.classList.toggle("active", b === button);
          b.setAttribute("aria-pressed", String(b === button));
        });
      }),
  );
  loadReconstructionModule()
    .then(({ ReconstructionView }) => {
      if (!active) return;
      instance = new ReconstructionView(
        canvas,
        reconstructionMode,
        (positions) => {
          if (!active) return;
          stage.querySelectorAll(".model-marker").forEach((marker, i) => {
            marker.style.left = positions[i][0] + "px";
            marker.style.top = positions[i][1] + "px";
            marker.style.display = positions[i][2] ? "" : "none";
          });
        },
        (text) => {
          if (!active) return;
          status.textContent = text && $("#modelPreview") ? "预览画面 · " + text : text;
          status.hidden = !text;
        },
        (count) => {
          if (active) {
            $("#modelPreview")?.remove();
            stage.classList.remove("has-model-preview");
          }
          if (active)
            $("#pointCount").textContent =
              count.toLocaleString() +
              (reconstructionMode === "gaussian" ? (reconstructionQuality === "quick" ? " 个高斯点 · 轻量预览" : " 个高斯点 · 完整模型") : " 个点");
        },
        reconstructionQuality,
      );
      instance.panMode = pan;
      cloud = instance;
    })
    .catch(() => {
      if (active) {
        status.hidden = false;
        status.textContent = "三维组件加载失败，请刷新页面重试。";
      }
    });
}
function bindLegacyModel() {
  selectDefect(0);
  $$("[data-defect]").forEach(
    (b) => (b.onclick = () => selectDefect(+b.dataset.defect)),
  );
  cloud = new ShoreCloud(
    $("#cloudCanvas"),
    (positions, hide) => {
      $$(".model-marker").forEach((m, i) => {
        if (!positions[i]) return;
        m.style.left = positions[i][0] + "px";
        m.style.top = positions[i][1] + "px";
        m.style.display = hide ? "none" : "";
      });
    },
    (text) => {
      const el = $("#cloudStatus");
      if (el) {
        el.textContent = text;
        el.hidden = !text;
      }
    },
  );
  cloud.sourceUrl =
    pendingCloudMode === "raw" ? "assets/shoreline-sfm-web.ply" : task.cloud;
  pendingCloudMode = null;
  const legacyView = cloud;
  legacyView.setMode("raw").then(() => {
    if (cloud === legacyView && legacyView.alive && legacyView.points.pos.length && $("#pointCount"))
      $("#pointCount").textContent = legacyView.points.pos.length / 3 + " 个点";
  });
  $("#resetView").onclick = () => cloud.reset();
  $("#zoomOut").onclick = () => (cloud.dist = Math.min(18, cloud.dist * 1.15));
  $("#zoomIn").onclick = () => (cloud.dist = Math.max(3.3, cloud.dist / 1.15));
  $$("[data-interaction]").forEach(
    (b) =>
      (b.onclick = () => {
        cloud.panMode = b.dataset.interaction === "pan";
        $$("[data-interaction]").forEach((x) => {
          x.classList.toggle("active", x === b);
          x.setAttribute("aria-pressed", String(x === b));
        });
      }),
  );
}
function bind() {
  if (current === "login")
    $("#loginForm").onsubmit = (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      if (f.get("account") === "demo" && f.get("password") === "123456") {
        sessionStorage.setItem("shore-login", "yes");
        navigate("monitor");
      } else
        $("#loginError").textContent = "账号或密码不正确，请使用下方演示账号。";
    };
  if (current === "monitor") {
    bindMonitor();
  }
  if (current === "model") bindModel();
  if (current === "report") {
    $("#previewReport").onclick = () =>
      dialog(
        "巡检报告",
        `<iframe title="${task.code} 巡检报告" src="${task.report}"></iframe>`,
      );
    let active = true;
    const sections = $$(".report-continuous .report-page-stage");
    const showPage = async (page) => {
      const section = sections[page - 1];
      const status = $(".report-loading", section), sheet = $(".report-sheet", section);
      status.hidden = false;
      status.textContent = "正在载入报告…";
      sheet.hidden = true;
      const local = `assets/reports/r03/${task.id}-page-${page}.webp`;
      try {
        if (!reportImages.has(local)) reportImages.set(local, (async () => {
          const image = new Image();
          if (window.INSPECTION_REPORT_ORIGIN) {
            let timer;
            try {
              image.src = window.INSPECTION_REPORT_ORIGIN + local;
              await Promise.race([image.decode(), new Promise((_, reject) => {
                timer = setTimeout(() => reject(Error("Image timeout")), 5000);
              })]);
            } catch {
              image.src = local;
              await image.decode();
            } finally { clearTimeout(timer); }
          } else {
            image.src = local;
            await image.decode();
          }
          return image;
        })().catch(error => { reportImages.delete(local); throw error; }));
        const image = await reportImages.get(local);
        if (!active) return;
        sheet.src = image.src;
        sheet.alt = `巡检报告第${page}页`;
        sheet.hidden = false;
        status.hidden = true;

      } catch {
        if (active) {
          status.textContent = "暂时无法载入，点击此处重试。";
          status.onclick = () => showPage(page);
        }
      }
    };
    const buttons = $$("[data-report-page]");
    buttons.forEach(button => {
      button.onclick = () => sections[Number(button.dataset.reportPage) - 1].scrollIntoView({behavior:"smooth", block:"start"});
    });
    const observer = new IntersectionObserver(entries => {
      if (!active) return;
      const entry = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!entry) return;
      const page = sections.indexOf(entry.target) + 1;
      buttons.forEach(button => {
        const selected = Number(button.dataset.reportPage) === page;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
    }, {rootMargin:"-80px 0px -40% 0px", threshold:0});
    sections.forEach((section, i) => { observer.observe(section); showPage(i + 1); });
    cleanup = () => { active = false; observer.disconnect(); };
  }

  if (current === "data") {
    renderFiles();
    $("#fileSearch").value = query;
    $("#fileSearch").oninput = (e) => {
      query = e.target.value;
      renderFiles();
    };
    $$("[data-filter]").forEach(
      (b) =>
        (b.onclick = () => {
          filter = b.dataset.filter;
          $$("[data-filter]").forEach((x) =>
            x.classList.toggle("active", x === b),
          );
          renderFiles();
        }),
    );
  }
}
function navigate(page) {
  if (location.hash !== `#${page}`) history.pushState(null, "", `#${page}`);
  render();
}
function render() {
  cleanup();
  cleanup = () => {};
  cloud?.dispose();
  cloud = null;
  let requested = location.hash.slice(1);
  current =
    sessionStorage.getItem("shore-login") === "yes"
      ? pages.some((p) => p[0] === requested)
        ? requested
        : "monitor"
      : "login";
  if (!task && current !== "login") {
    task = tasks[0];
    sessionStorage.setItem("shore-task", task.id);
  }
  // Keep the URL and visible page aligned, including login and invalid routes.
  if (location.hash !== `#${current}`)
    history.replaceState(null, "", `#${current}`);
  document.body.dataset.page = current;
  $("#main").innerHTML = {
    login,
    monitor,
    model,
    report,
    data,
  }[current]();
  $("#breadcrumb").textContent =
    current === "login" ? "演示登录" : pages.find((p) => p[0] === current)[1];
  $("#railNav").innerHTML = pages
    .map(
      ([id, label, n]) =>
        `<a class="nav-item ${id === current ? "active" : ""}" href="#${id}" ${id === current ? 'aria-current="page"' : ""}>${icon(id)}<span>${label}</span><span class="nav-num">${n}</span></a>`,
    )
    .join("");
  $$("#railNav a").forEach((link) => {
    link.onclick = (event) => {
      if (
        event.button ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      navigate(link.hash.slice(1));
    };
  });
  document.title = $("#breadcrumb").textContent + " · 舟行见微";
  bind();
  window.scrollTo({ top: 0, behavior: "instant" });
}
$(".skip-link").onclick = (e) => {
  e.preventDefault();
  $("#main").focus();
};
window.addEventListener("hashchange", render);

$("#logout").onclick = () => {
  sessionStorage.removeItem("shore-login");
  sessionStorage.removeItem("shore-task");
  task = null;
  offline = false;
  demo = true;
  navigate("login");
};
