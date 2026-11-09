const $ = (s, p = document) => p.querySelector(s),
  $$ = (s, p = document) => [...p.querySelectorAll(s)];
const paths = {
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
  ["tasks", "任务选择", "00"],
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
  return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${sub}</p></div><div class="heading-actions">${actions}</div></div>`;
}
function stat(ic, label, value, unit, note) {
  return `<div class="stat-card"><div class="stat-icon">${icon(ic)}</div><div class="stat-content"><div class="stat-label">${label}</div><div class="stat-value">${value}<small>${unit}</small></div><div class="stat-note">${note}</div></div></div>`;
}
function login() {
  return `<section class="login-layout"><div class="login-intro"><div class="eyebrow">SHORELINE INSPECTION / V.04</div><h1>每一次巡检，<br>都有迹可循。</h1><p>从水面航行到岸堤重建，<br>在同一工作台查看任务、影像与巡检记录。</p><img src="assets/usv.png" alt="巡检无人船"/><span class="pill warning">答辩演示 · 无真实设备控制</span></div><form id="loginForm" class="login-card"><div class="eyebrow">WELCOME ABOARD</div><h2>登录巡检工作台</h2><p>选择试验任务，开始完整演示。</p><label>账号<input name="account" autocomplete="username" value="demo" required></label><label>密码<input name="password" type="password" autocomplete="current-password" placeholder="请输入演示密码" required></label><p id="loginError" class="error-text" role="alert"></p><button class="button primary" type="submit">登录并选择任务 ${icon("arrow")}</button><small>演示账号 demo / 密码 123456</small><small>登录后选择任务，进入巡检演示。</small></form></section>`;
}
function taskList() {
  return (
    heading(
      "MISSION LIBRARY / 00",
      "选择巡检任务",
      "从一次试验开始，查看影像、设备状态与三维成果。",
      `<button class="button" id="logout">退出登录</button>`,
    ) +
    `<div class="task-overview"><span class="pill warning">演示任务库</span><span>3 个任务场景</span><span>同一批视频与点云素材复用 · 后续可独立替换</span></div><div class="task-grid">${tasks.map((t, i) => `<article class="panel task-card"><div class="task-cover"><img src="${t.poster}" alt="船载试验影像素材"/><span class="task-index">0${i + 1}</span><span class="pill warning">演示场景</span></div><div class="task-card-body"><div class="eyebrow">${t.code} / ${t.kind}</div><h2>${t.name}</h2><h3>${t.subtitle}</h3><p>${t.description}</p><div class="task-assets"><span>试验录像</span><span>PLY 点云</span><span>固定 PDF</span></div><div class="task-card-actions"><button class="button primary" data-enter="${t.id}" data-target="monitor">进入监控 ${icon("arrow")}</button><button class="button" data-enter="${t.id}" data-target="model">三维重建</button></div></div></article>`).join("")}</div><div class="archive-note">${icon("shield")}任务名称用于场景演示；航速、状态、时间和异常为模拟数据，复用素材不代表三次独立实测试验。</div>`
  );
}
function monitor() {
  return `<div class="monitor-title"><div><div class="eyebrow">MISSION CONTROL / ${task.code}</div><h1>${task.name} <small>${task.subtitle}</small></h1></div><a class="button" href="#tasks">切换任务</a></div><div class="control-strip"><div class="mode-switch" aria-label="数据模式"><button data-mode="replay" aria-pressed="${mode === "replay"}">历史回放</button><button data-mode="live" aria-pressed="${mode === "live"}">实时模式</button></div><label class="demo-switch"><input id="demoToggle" type="checkbox" ${demo ? "checked" : ""}>演示模式</label><span class="pill ${demo ? "warning" : "muted"}" id="sourceBadge">${demo ? "模拟数据 · 试验素材复用" : "真实模式 · 未接入设备"}</span><div class="control-spacer"></div><button class="button small" id="connectionToggle" ${!demo ? "disabled" : ""}>${offline ? "恢复演示设备" : "模拟设备离线"}</button><button class="button primary small" id="startMission">${demo ? "开始模拟任务" : "下发真实任务"}</button></div><div class="monitor-grid"><section class="panel camera-panel"><div class="panel-head"><h2>${icon("camera")}云台监控</h2><div class="camera-actions"><button class="button small" id="toggleReplay">播放</button><button class="button small" id="restartReplay">重播</button><button class="button small" id="fullscreenReplay">全屏</button></div></div><div class="camera-view"><video id="trialVideo" muted playsinline preload="metadata" poster="${task.poster}" aria-label="演示云台视频"></video><div class="feed-tag" id="feedLabel"></div><div class="camera-offline" id="cameraOffline" hidden><strong>设备离线</strong><span>画面与设备数据已停止刷新</span></div><div class="feed-bottom"><span>CAM 01 / USV-01</span><b id="replayTime">00:00</b></div></div><div class="view-note">现有 24 秒试验录像 · ${mode === "live" ? "演示实时画面由录像模拟" : "视频时间驱动全部演示状态"}</div></section><section class="panel route-panel"><div class="panel-head"><h2>${icon("monitor")}航迹地图</h2><span class="pill muted">上位机原版页面</span></div><div class="route-host" id="routeHost">${task.mapUrl ? `<iframe id="hostMap" title="上位机原版航迹页面" src="${esc(task.mapUrl)}"></iframe>` : `<div class="integration-empty"><span class="empty-symbol">⌖</span><h3>等待嵌入上位机航迹页</h3><p>此处直接显示原版网页<br>待补充原版页面资料</p><span>暂不另绘地图</span></div>`}</div><div class="route-readout"><span>演示船位 <b id="positionValue">—</b></span><span id="mapSync">航迹页面未接入</span></div></section><aside class="monitor-rail"><section class="panel device-panel"><div class="panel-head"><h2>设备状态</h2><span class="pill warning" id="connectionState">演示</span></div><div id="deviceMetrics" class="metric-grid"></div><div class="device-stamp" id="deviceStamp">等待回放</div></section><section class="panel events-panel"><div class="panel-head"><h2>疑似异常</h2><span class="meta">${task.events.length} 条 · 演示标注</span></div><div class="event-list">${task.events.map((e, i) => `<button class="event-item" data-event="${i}"><span class="event-dot ${e.cls}"></span><span><strong>${e.title}</strong><small>${e.id} · ${e.level}</small></span><time>${clock(e.time)}</time></button>`).join("")}</div></section><section class="panel mission-card"><span class="meta">任务状态</span><strong id="missionStatus" aria-live="polite">待演示</strong><a class="button" href="#report">巡检报告 ${icon("arrow")}</a></section></aside></div><div class="monitor-status"><span><i class="dot amber"></i> <span id="syncStatus">同一回放时钟 · 演示数据</span></span><span id="absoluteTime"></span></div>`;
}
function model() {
  return (
    heading(
      "RECONSTRUCTION / " + task.code,
      "三维重建与缺陷标注",
      task.name + " · 现有 PLY 素材，任务间复用",
      `<a class="button" href="#tasks">切换任务</a><a class="button primary" href="#report">巡检报告 ${icon("arrow")}</a>`,
    ) +
    `<div class="model-layout v4-model"><section class="panel model-main"><div class="model-toolbar"><div class="interaction-tabs"><button class="button small active" data-interaction="pan" aria-pressed="true">平移</button><button class="button small" data-interaction="rotate" aria-pressed="false">旋转</button></div><span class="pill warning">素材点云 · 演示标注</span><div class="viewer-actions"><button class="icon-button" id="zoomOut" aria-label="缩小">−</button><button class="icon-button" id="zoomIn" aria-label="放大">＋</button><button class="button small" id="resetView">复位</button></div></div><div class="cloud-stage" id="cloudStage"><canvas id="cloudCanvas" tabindex="0" aria-label="三维点云，拖动平移，右键或Shift拖动旋转，滚轮缩放"></canvas><div class="stage-label">SOURCE MODEL / PLY<strong>现有实采点云素材</strong></div>${task.events.map((d, i) => `<button class="model-marker" data-defect="${i}" aria-label="演示标注 ${d.id}" style="display:none">${i + 1}</button>`).join("")}<div class="cloud-status" id="cloudStatus">正在读取点云…</div><div class="model-help">拖动平移 · 右键 / Shift 旋转 · 滚轮缩放</div></div><div class="model-footer"><span id="pointCount">PLY 读取中</span><span>保留点云原色</span></div></section><div class="stack"><section class="panel"><div class="panel-head"><h2>缺陷详情</h2><span class="pill warning">示意标注</span></div><div id="defectDetail"></div></section><section class="panel"><div class="panel-head"><h2>标注列表</h2><span class="meta">绑定模型坐标</span></div><div class="defect-list">${task.events.map((d, i) => `<button class="defect-select" data-defect="${i}"><span class="number">${i + 1}</span><span><strong>${d.title}</strong><small>${d.id} · 演示位置</small></span></button>`).join("")}</div></section><div class="model-notice"><strong>待替换更好的点云素材</strong><p>当前保留已有 PLY，不展示虚构的两期对比。缺陷为查看流程示意，非实测判定。</p></div></div></div>`
  );
}
function report() {
  return (
    heading(
      "INSPECTION REPORT / " + task.code,
      "巡检检测报告",
      "固定 PDF · 按工程巡查记录结构编排",
      `<a href="${task.report}" download="${task.code}-巡检检测报告.pdf" class="button primary">${icon("download")}下载 PDF 报告</a>`,
    ) +
    `<div class="fixed-report-layout"><article class="report-paper"><div class="paper-top"><span>舟行见微 / 巡检记录</span><span>固定文档 · V1.0</span></div><div class="paper-eyebrow">SHORELINE INSPECTION RECORD</div><h2>岸堤巡检检测报告</h2><p class="report-demo-label">答辩演示样件 · 非工程检测结论</p><dl class="report-fields"><div><dt>报告编号</dt><dd>${task.code}</dd></div><div><dt>任务名称</dt><dd>${task.name}</dd></div><div><dt>任务类型</dt><dd>${task.subtitle}</dd></div><div><dt>文档格式</dt><dd>PDF · 3 页 · 固定版本</dd></div></dl><h3>报告内容</h3><ol class="report-contents"><li>任务概况、委托与设备信息</li><li>外观检查项目与异常记录</li><li>复核意见、附件索引与签署栏</li></ol><div class="paper-summary">按正式巡检记录的表格形式组织，保留待补实测信息与人工签署栏。页面直接下载已经排版的 PDF。</div><div class="paper-foot"><span>记录可追溯 · 结论待人工复核</span><span>${task.code}</span></div></article><aside class="stack"><section class="panel report-side"><h3>已归档文件</h3><p>${task.code}-巡检检测报告.pdf</p><a class="button primary" href="${task.report}" download="${task.code}-巡检检测报告.pdf">${icon("download")}下载固定 PDF</a><button class="button" id="previewReport">${icon("eye")}预览 PDF</button><p class="tip">三个任务各自关联一份固定报告，下载内容与归档版本一致。</p></section><section class="panel report-side"><h3>材料说明</h3><p class="tip">现有视频与点云用于演示。正式任务日期、工程桩号、缺陷尺寸和检测结论均待资料补充。</p><a class="button" href="#monitor">返回巡检监控</a></section></aside></div>`
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
  const mission = task;
  const v = $("#trialVideo");
  let ended = completedTasks.has(mission.id);
  const disconnected = !demo || offline;
  let saved = playback.get(task.id) || 0;
  $("#cameraOffline").hidden = !disconnected;
  $("#connectionState").textContent = disconnected ? "离线" : "演示在线";
  $("#connectionState").className =
    "pill " + (disconnected ? "danger" : "warning");
  $("#feedLabel").textContent = demo
    ? mode === "live"
      ? "演示实时 · 录像模拟"
      : "历史素材 · 同步演示回放"
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
    renderMetrics(s);
    $("#replayTime").textContent = clock(t);
    $("#positionValue").textContent =
      `${s.lat.toFixed(4)}° N / ${s.lon.toFixed(4)}° E`;
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
      : "视频 / 设备状态共用回放时钟 · 航迹待接入";
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
    `<div class="defect-info"><span class="pill ${d.cls}">${d.level} · 演示</span><h3>${d.title}</h3><p>${d.note}</p><div class="data-pair"><span>标注编号</span><b>${d.id}</b></div><div class="data-pair"><span>视频位置</span><b>${clock(d.time)}</b></div><div class="data-pair"><span>模型位置</span><b>PLY 坐标锚点</b></div><div class="defect-actions"><button class="button" id="locateVideo">定位视频</button><a class="button primary" href="#report">查看报告</a></div></div>`;
  $$("[data-defect]").forEach((b) => {
    b.classList.toggle("active", +b.dataset.defect === i);
    b.setAttribute("aria-pressed", String(+b.dataset.defect === i));
  });
  $("#locateVideo").onclick = () => {
    playback.set(task.id, d.time);
    mode = "replay";
    demo = true;
    offline = false;
    location.hash = "monitor";
  };
}
function bindModel() {
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
  cloud.setMode("raw").then(() => {
    if ($("#pointCount") && cloud?.points)
      $("#pointCount").textContent =
        cloud.points.pos.length / 3 + " 个点 · 现有素材";
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
        location.hash = "tasks";
      } else
        $("#loginError").textContent = "账号或密码不正确，请使用下方演示账号。";
    };
  if (current === "tasks") {
    $$("[data-enter]").forEach(
      (b) =>
        (b.onclick = () => {
          task = tasks.find((t) => t.id === b.dataset.enter);
          sessionStorage.setItem("shore-task", task.id);
          offline = false;
          demo = true;
          location.hash = b.dataset.target;
        }),
    );
    $("#logout").onclick = () => {
      sessionStorage.removeItem("shore-login");
      sessionStorage.removeItem("shore-task");
      task = null;
      location.hash = "login";
    };
  }
  if (current === "monitor") bindMonitor();
  if (current === "model") bindModel();
  if (current === "report")
    $("#previewReport").onclick = () =>
      dialog(
        "固定巡检报告",
        `<iframe title="${task.code} PDF 报告" src="${task.report}"></iframe>`,
      );
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
        : "tasks"
      : "login";
  if (!task && !["login", "tasks"].includes(current)) current = "tasks";
  document.body.dataset.page = current;
  $("#main").innerHTML = {
    login,
    tasks: taskList,
    monitor,
    model,
    report,
    data,
  }[current]();
  $("#breadcrumb").textContent =
    current === "login" ? "演示登录" : pages.find((p) => p[0] === current)[1];
  $("#navigation").innerHTML = pages
    .map(
      ([id, label, n]) =>
        `<a class="nav-item ${id === current ? "active" : ""}" href="#${id}" ${id === current ? 'aria-current="page"' : ""}>${icon(id)}<span>${label}</span><span class="nav-num">${n}</span></a>`,
    )
    .join("");
  document.title = $("#breadcrumb").textContent + " · 舟行见微";
  bind();
  window.scrollTo({ top: 0, behavior: "instant" });
}
$(".skip-link").onclick = (e) => {
  e.preventDefault();
  $("#main").focus();
};
window.addEventListener("hashchange", render);
