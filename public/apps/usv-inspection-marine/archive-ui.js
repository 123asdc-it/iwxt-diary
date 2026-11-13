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
    navigate("model");
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
