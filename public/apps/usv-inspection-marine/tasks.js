// Immutable copy of the same public assets; fall back to this site if unavailable.
// Update the pinned commit when publishing replacement model/report assets.
window.INSPECTION_ASSET_ORIGIN = location.hostname === "iwxt.cn"
  ? "https://raw.githubusercontent.com/123asdc-it/iwxt-diary/3e3b623f805ae287dfc782c8eea74dec84fd2253/public/apps/usv-inspection-marine/"
  : "";
window.INSPECTION_REPORT_ORIGIN = "";
/* Demonstration manifests. Replace assets per task when paired recordings arrive.
   mapUrl embeds the original host-controller page when supplied.
   Otherwise the map shows the explicitly labelled Qingdao demonstration route. */
window.INSPECTION_TASKS = [
  {
    id: "qd-speed",
    name: "青岛8月测试",
    subtitle: "航速 4 节任务",
    code: "QD-DEMO-01",
    start: "2026-08-03T16:06:16+08:00",
    kind: "定速试验",
    speed: 4,
    offset: 0,
    description: "查看定速巡航过程，演示设备状态与异常定位。",
  },
  {
    id: "qd-cruise",
    name: "青岛自主巡航任务",
    subtitle: "航点巡航 / 路径跟踪",
    code: "QD-DEMO-02",
    start: "2026-08-03T16:20:00+08:00",
    kind: "自主巡航",
    speed: 3.2,
    offset: 1,
    description: "查看自主巡航流程，切换航迹、影像与重建成果。",
  },
  {
    id: "qd-return",
    name: "青岛自主返航任务",
    subtitle: "返航流程 / 任务归档",
    code: "QD-DEMO-03",
    start: "2026-08-03T16:40:00+08:00",
    kind: "自主返航",
    speed: 2.5,
    offset: 2,
    description: "查看返航与任务结束流程，下载固定巡检报告。",
  },
].map((t) => ({
  ...t,
  video: "assets/trial-replay.mp4",
  poster: "assets/trial-frame.jpg",
  cloud: "assets/shoreline-sfm-full.ply",
  mapUrl: "",
  report: `assets/reports/r05/${t.id}.pdf`,
  duration: 24,
  // All quantities below are authored demonstration fixtures, not recovered telemetry.
  telemetry: [0, 6, 12, 18, 23.95].map((time, i) => ({
    time,
    health: 96,
    battery: 82 - t.offset * 5 - i,
    speed: i === 4 ? 0 : t.speed + (i % 2 ? -0.2 : 0),
    communication: i === 2 ? "较弱" : "良好",
    temperature: i === 2 ? 48 : 31.4 + i * 0.3,
    storage: 63 - i,
    left: i === 4 ? 0 : 1800 + i * 18 + t.offset * 50,
    right: i === 4 ? 0 : 1790 + i * 20 + t.offset * 50,
    lat: 36.0522 - i * 0.0015,
    lon: 120.382 + i * 0.0038,
  })),
  events: [
    {
      id: "A-07",
      time: 5 + t.offset,
      title: "疑似树木倒塌",
      level: "待复核",
      cls: "warning",
      note: "检查树干倒伏方向及其对岸线通行的影响。",
    },
    {
      id: "A-11",
      time: 12 + t.offset,
      title: "疑似枯枝堆积",
      level: "优先复核",
      cls: "danger",
      note: "检查岸边枝条聚集范围，优先清理靠近航线的枯枝。",
    },
    {
      id: "A-14",
      time: 19 + t.offset,
      title: "疑似植被侵入航道",
      level: "待复核",
      cls: "warning",
      note: "检查临水枝叶伸展范围，修剪后保留同位置复巡记录。",
    },
  ],
}));

// Shared demonstration route: event coordinates and map position use the same clock.
const qingdaoRoute = [
  [36.0522, 120.382], [36.0514, 120.3856], [36.0502, 120.3894],
  [36.048, 120.394], [36.0469, 120.3986], [36.0457, 120.402],
];
window.INSPECTION_TASKS = window.INSPECTION_TASKS.map(task => {
  const route = task.id === "qd-return" ? [...qingdaoRoute].reverse() : [...qingdaoRoute];
  const events = task.events.map(event => {
    const progress = Math.max(0, Math.min(1, event.time / task.duration)) * (route.length - 1);
    const i = Math.min(route.length - 2, Math.floor(progress)), fraction = progress - i;
    const [lat, lon] = route[i].map((value, axis) => value + (route[i + 1][axis] - value) * fraction);
    return {...event, lat, lon};
  });
  return {...task, route, events};
});
