export const CHECKIN_STORAGE_KEY = 'iwxt-diary-checkin-v1';
export const CHECKIN_VERSION = 1;
export const PLAN_START = '2026-09-14';
export const PLAN_END = '2026-11-13';
export const ALGORITHM_SOURCE_URL = 'https://leetcode.cn/discuss/post/3141566/ru-he-ke-xue-shua-ti-by-endlesscheng-q3yd/';
export const CMC_SOURCE_URL = 'https://www.bilibili.com/cheese/play/ep1415318?csource=common_channelclass_watchedrecord_null';

// Key dates are intentionally data, not rendering logic. Exact dates use the
// organiser's local calendar date. Month-level windows stay separate from the
// day countdown: `estimated: true` marks a planning estimate, while a window
// without that flag is an official organiser range.
export const KEY_DATE_EVENTS = [
  {
    id: 'cmc',
    name: 'CMC',
    subtitle: '个人学习计划',
    sourceUrl: CMC_SOURCE_URL,
    milestones: [
      { label: '报名截止', pending: '不适用' },
      { label: '缴费截止', pending: '不适用' },
      { label: '完成目标', date: '2026-11-13', note: '个人计划日期' },
    ],
  },
  {
    id: 'cet6',
    name: '六级',
    subtitle: '2026 下半年 CET6',
    sourceUrl: 'https://cet.neea.edu.cn/',
    milestones: [
      { label: '报名', window: '2026.09–10', estimated: true, note: '具体以校内通知为准' },
      { label: '缴费', pending: '待校内通知' },
      { label: '笔试', window: '2026.12', estimated: true, note: '教育考试院常规考月' },
    ],
  },
  {
    id: 'fltrp',
    name: '外研社·国才杯',
    subtitle: '2026 外语能力大赛',
    sourceUrl: 'https://2u4u.fltrp.com/c/2026-04-27/541737.shtml',
    milestones: [
      { label: '官网报名截止', date: '2026-10-04', note: '23:59 · 综合能力 / 笔译' },
      { label: '综合能力校赛', date: '2026-10-11', note: '华师 · 09:30–11:00 · 以报名群最新通知为准' },
      { label: '笔译校赛', date: '2026-10-11', note: '华师 · 16:00–18:00 · 以报名群最新通知为准' },
      { label: '省赛', window: '2026.09–11', note: '官方赛期' },
      { label: '国赛', window: '2026.10–12', note: '官方赛期' },
    ],
  },
  {
    id: 'baicizhan-vocabulary',
    name: '全国大学生英语单词大赛',
    subtitle: '百词斩 · 本科及以上非英专组',
    sourceUrl: 'https://www.baicizhan.com/little_class/article/1033/share_view',
    milestones: [
      { label: '参赛资格', status: '审核通过', note: '已获得正赛参赛资格' },
      { label: '初赛', date: '2026-10-24', note: '具体时间待报名结束分组后公布' },
      { label: '当日时间', pending: '待分组公布' },
    ],
  },
  {
    id: 'lanqiao',
    name: '蓝桥杯',
    subtitle: '第 18 届·预计赛季',
    sourceUrl: 'https://dasai.lanqiao.cn/',
    milestones: [
      { label: '报名', window: '2026.10–2027.03', estimated: true, note: '参照第 17 届官方节奏' },
      { label: '省赛', window: '2027.04', estimated: true, note: '待第 18 届公告' },
      { label: '国赛', window: '2027.06', estimated: true, note: '待第 18 届公告' },
    ],
  },
  {
    id: 'icpc',
    name: 'ICPC',
    subtitle: '2027 校队·区域赛路线',
    sourceUrl: 'https://icpc.global/',
    milestones: [
      { label: '组队选拔', window: '2027.03–06', estimated: true, note: '待华师校队通知' },
      { label: '赛站报名', window: '2027.07–09', estimated: true, note: '各赛站分别公告' },
      { label: '区域赛', window: '2027.09–12', estimated: true, note: '参照亚洲区常规赛季' },
    ],
  },
  {
    id: 'baidu-star',
    name: '百度之星',
    subtitle: '2026 第 22 届',
    sourceUrl: 'https://star.baidu.com/#/program-design-match2026?tab=1',
    milestones: [
      { label: '报名截止', date: '2026-09-19', note: '平台约 12:00；校内审核可能提前' },
      { label: '第二场初赛', date: '2026-09-19', note: '14:00–17:00 · 线上' },
      { label: '总决赛', pending: '待百度最终公告' },
    ],
  },
  {
    id: 'statistical-modeling',
    name: '统计建模',
    subtitle: '2027 全国大学生大赛·预计',
    sourceUrl: 'https://tjjmds.ai-learning.net/dstz/37119.jhtml',
    milestones: [
      { label: '组队/论文', window: '2027.03–05', estimated: true, note: '参照 2026 官方赛程' },
      { label: '省赛', window: '2027.06', estimated: true, note: '参照上届六月中旬' },
      { label: '国赛', window: '2027.07–08', estimated: true, note: '待 2027 正式通知' },
    ],
  },
  {
    id: 'mcm',
    name: '美赛',
    subtitle: '2027 MCM/ICM',
    sourceUrl: 'https://www.contest.comap.com/undergraduate/contests/mcm/',
    milestones: [
      { label: '报名截止', date: '2027-01-28', note: '美东时间 15:00' },
      { label: '缴费截止', date: '2027-01-28', note: '报名时支付' },
      { label: '比赛', date: '2027-01-28', endDate: '2027-02-01' },
    ],
  },
  {
    id: 'cumcm',
    name: '数模',
    subtitle: '2026 CUMCM',
    sourceUrl: 'https://www.mcm.edu.cn/index_en.html',
    milestones: [
      { label: '报名截止', date: '2026-09-09', note: '北京时间 18:00' },
      { label: '缴费截止', pending: '待校内通知' },
      { label: '比赛', date: '2026-09-10', endDate: '2026-09-13' },
    ],
  },
  {
    id: 'nuedc',
    name: '电赛',
    subtitle: '2027 全国大学生电子设计竞赛',
    sourceUrl: 'https://www.nuedc-training.com.cn/',
    milestones: [
      { label: '组队备赛', window: '2027.03–05', estimated: true, note: '校内选拔待通知' },
      { label: '报名', window: '2027.05–06', estimated: true, note: '待赛区和学校通知' },
      { label: '比赛', window: '2027.07–08', estimated: true, note: '参照 2025 全国赛时段' },
    ],
  },
  {
    id: 'putonghua',
    name: '普通话测试',
    subtitle: '校内考点',
    milestones: [
      { label: '报名截止', pending: '待校内通知' },
      { label: '缴费截止', pending: '待校内通知' },
      { label: '考试', pending: '待校内通知' },
    ],
  },
];

export const CMC_CHAPTERS = [
  ['1–13', '极限', '13 节 · 7.36h'],
  ['14–18', '递推数列极限', '5 节 · 2.26h'],
  ['19–32', '一元积分', '14 节 · 5.76h'],
  ['33–46', '中值问题', '14 节 · 10.33h'],
  ['47–55', '二重积分', '9 节 · 4.18h'],
  ['56–62', '三重积分', '7 节 · 2.18h'],
  ['63–67', '曲线积分', '5 节 · 3.25h'],
  ['68–77', '曲面积分', '10 节 · 4.30h'],
  ['78–89', '微分方程', '12 节 · 4.00h'],
  ['90–99', '无穷级数·常数项敛散', '10 节 · 5.72h'],
  ['100–108', '无穷级数·幂级数与傅里叶', '9 节 · 3.92h'],
  ['109–115', '微分不等式', '7 节 · 2.47h'],
  ['116–124', '积分不等式', '9 节 · 2.48h'],
];

const DAY_MS = 86_400_000;
const VALID_KINDS = new Set(['cmc', 'algorithm', 'cet6', 'contest', 'sprint', 'review', 'other']);
const BAIDU_SPRINT_START = '2026-09-14';
const BAIDU_SPRINT_END = '2026-09-20';
export const CET6_NEW_START = '2026-09-21';
export const CET6_NEW_END = '2026-09-29';
export const CET6_REVIEW_START = '2026-09-30';

function currentLocalDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export const ALGORITHM_ROUTE = [
  { step: 0, title: '编程入门', detail: '若 C++ 基本语法与常用库函数不熟，先做官方「新」动计划 20 题' },
  { step: 1, title: '滑动窗口', detail: '定长 → 不定长' },
  { step: 2, title: '二分算法', detail: '先二分查找；二分答案困难时可暂跳' },
  { step: 3, title: '常用数据结构', detail: '枚举技巧、前缀和、栈、队列、堆' },
  { step: 4, title: '链表、树、回溯', detail: '先二叉树 DFS' },
  { step: 5, title: '网格图', detail: '网格图 DFS' },
  { step: 6, title: '回溯', detail: '进一步理解递归' },
  { step: 7, title: '动态规划', detail: '题单前六章，第一轮难度上限放宽到 2000' },
];

const ALGORITHM_WEEKS = [
  {
    start: '2026-09-14',
    topic: '滑动窗口与双指针',
    section: '§1.1 定长滑动窗口基础',
    problems: [
      ['2026-09-15', '09:00', 1456, '定长子串中元音的最大数目', 'maximum-number-of-vowels-in-a-substring-of-given-length', 1263],
      ['2026-09-15', '10:00', 643, '子数组最大平均数 I', 'maximum-average-subarray-i', null],
      ['2026-09-17', '19:30', 1343, '大小为 K 且平均值大于等于阈值的子数组数目', 'number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold', 1317],
      ['2026-09-17', '20:15', 2090, '半径为 k 的子数组平均值', 'k-radius-subarray-averages', 1358],
      ['2026-09-19', '09:00', 2379, '得到 K 个黑块的最少涂色次数', 'minimum-recolors-to-get-k-consecutive-black-blocks', 1360],
      ['2026-09-19', '09:45', 2841, '几乎唯一子数组的最大和', 'maximum-sum-of-almost-unique-subarray', 1546],
    ],
  },
  {
    start: '2026-09-21',
    topic: '滑动窗口与双指针',
    section: '§1.1 定长 → §2.1 不定长滑窗基础',
    problems: [
      ['2026-09-22', '09:00', 2461, '长度为 K 子数组中的最大和', 'maximum-sum-of-distinct-subarrays-with-length-k', 1553],
      ['2026-09-22', '10:00', 1423, '可获得的最大点数', 'maximum-points-you-can-obtain-from-cards', 1574],
      ['2026-09-24', '19:30', 3, '无重复字符的最长子串', 'longest-substring-without-repeating-characters', null],
      ['2026-09-24', '20:15', 3090, '每个字符最多出现两次的最长子字符串', 'maximum-length-substring-with-two-occurrences', 1329],
      ['2026-09-26', '09:00', 1493, '删掉一个元素以后全为 1 的最长子数组', 'longest-subarray-of-1s-after-deleting-one-element', 1423],
      ['2026-09-26', '09:45', 3634, '使数组平衡的最少移除数目', 'minimum-removals-to-balance-array', 1453],
    ],
  },
  {
    start: '2026-09-28',
    topic: '滑动窗口与双指针',
    section: '§2.1 不定长滑窗基础',
    problems: [
      ['2026-09-29', '09:00', 1208, '尽可能使字符串相等', 'get-equal-substrings-within-budget', 1497],
      ['2026-09-29', '10:00', 904, '水果成篮', 'fruit-into-baskets', 1516],
      ['2026-10-01', '19:30', 1695, '删除子数组的最大得分', 'maximum-erasure-value', 1529],
      ['2026-10-01', '20:15', 2958, '最多 K 个重复元素的最长子数组', 'length-of-longest-subarray-with-at-most-k-frequency', 1535],
      ['2026-10-03', '09:00', 2024, '考试的最大困扰度', 'maximize-the-confusion-of-an-exam', 1643],
      ['2026-10-03', '09:45', 1004, '最大连续 1 的个数 III', 'max-consecutive-ones-iii', 1656],
    ],
  },
  {
    start: '2026-10-05',
    topic: '滑动窗口与双指针',
    section: '§2.2 求最短 / §2.3 求子数组个数',
    problems: [
      ['2026-10-06', '09:00', 209, '长度最小的子数组', 'minimum-size-subarray-sum', null],
      ['2026-10-06', '10:00', 3795, '不同元素和至少为 K 的最短子数组长度', 'minimum-subarray-length-with-distinct-sum-at-least-k', 1505],
      ['2026-10-08', '19:30', 713, '乘积小于 K 的子数组', 'subarray-product-less-than-k', null],
      ['2026-10-08', '20:15', 3258, '统计满足 K 约束的子字符串数量 I', 'count-substrings-that-satisfy-k-constraint-i', null],
      ['2026-10-10', '09:00', 1358, '包含所有三种字符的子字符串数目', 'number-of-substrings-containing-all-three-characters', 1646],
      ['2026-10-10', '09:45', 930, '和相同的二元子数组', 'binary-subarrays-with-sum', 1592],
    ],
  },
];

function parseDate(date) {
  return new Date(`${date}T00:00:00.000Z`);
}

export function isDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) return false;
  const parsed = parseDate(value);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export function addDays(date, amount) {
  const next = parseDate(date);
  next.setUTCDate(next.getUTCDate() + amount);
  return next.toISOString().slice(0, 10);
}

export function addMonths(month, amount) {
  if (!/^\d{4}-\d{2}$/.test(String(month || '')) || !isDate(`${month}-01`)) return '';
  const [year, monthNumber] = month.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, monthNumber - 1 + Number(amount || 0), 1));
  return `${parsed.getUTCFullYear()}-${String(parsed.getUTCMonth() + 1).padStart(2, '0')}`;
}

function taskHasProgress(task) {
  if (!task || typeof task !== 'object') return false;
  if (task.completed || Number(task.actualMinutes) > 0 || cleanText(task.note).trim()) return true;
  if (task.kind === 'algorithm') {
    const value = task.algorithm || {};
    return Boolean(value.viewedHint || value.reproduced || value.nextDayRewrite || cleanText(value.wrongReason).trim());
  }
  if (task.kind === 'cmc') {
    return (task.cmc?.lessons || []).some((lesson) => (
      lesson.watched || lesson.reproduced || lesson.conditionsWritten || Number(lesson.actualMinutes) > 0 || cleanText(lesson.recall).trim()
    ));
  }
  if (task.kind === 'cet6') return Number(task.cet6?.wordsActual) > 0 || Number(task.cet6?.practiceCount) > 0;
  if (task.kind === 'contest') return Number(task.contest?.solvedIndependently) > 0 || cleanText(task.contest?.blockers).trim();
  if (task.kind === 'sprint') {
    const value = task.sprint || {};
    return Number(value.reproducedActual) > 0
      || Number(value.submittedActual) > 0
      || Number(value.acceptedActual) > 0
      || cleanText(value.blockers).trim()
      || (value.checklist || []).some((item) => item.done);
  }
  return false;
}

function activeTasks(tasks) {
  return (tasks || []).filter((task) => !task.planExcluded);
}

export function dayCheckinStatus(state, date, today = currentLocalDate()) {
  if (!isDate(date) || !isDate(today)) return 'empty';
  if (date > today) return 'future';
  const tasks = activeTasks(Array.isArray(state?.days?.[date]?.tasks) ? state.days[date].tasks : []);
  if (!tasks.length) return 'empty';
  const completed = tasks.filter(effectiveComplete).length;
  if (completed === tasks.length) return 'complete';
  if (completed > 0 || tasks.some(taskHasProgress)) return 'partial';
  return 'missed';
}

export function monthCalendar(state, month, today = currentLocalDate()) {
  if (!/^\d{4}-\d{2}$/.test(String(month || '')) || !isDate(`${month}-01`)) return [];
  const first = `${month}-01`;
  const firstDate = parseDate(first);
  const mondayOffset = (firstDate.getUTCDay() + 6) % 7;
  const start = addDays(first, -mondayOffset);
  const nextMonth = addMonths(month, 1);
  const last = addDays(`${nextMonth}-01`, -1);
  const lastDate = parseDate(last);
  const sundayOffset = (7 - lastDate.getUTCDay()) % 7;
  const end = addDays(last, sundayOffset);
  const length = Math.round((parseDate(end) - parseDate(start)) / DAY_MS) + 1;
  return Array.from({ length }, (_, index) => {
    const date = addDays(start, index);
    return {
      date,
      day: Number(date.slice(-2)),
      inMonth: date.startsWith(`${month}-`),
      status: dayCheckinStatus(state, date, today),
    };
  });
}

export function weekStart(date) {
  const parsed = parseDate(date);
  const offset = (parsed.getUTCDay() + 6) % 7;
  return addDays(date, -offset);
}

export function weekDates(date) {
  const start = weekStart(date);
  return Array.from({ length: 7 }, (_, index) => addDays(start, index));
}

function clampNumber(value, minimum = 0, maximum = 1_000_000) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 0;
  return Math.min(maximum, Math.max(minimum, parsed));
}

function cleanText(value, maximum = 500) {
  return typeof value === 'string' ? value.slice(0, maximum) : '';
}

function taskBase(id, kind, time, title, plannedMinutes = 0) {
  return {
    id,
    kind,
    time,
    title,
    plannedMinutes,
    completed: false,
    actualMinutes: 0,
    note: '',
  };
}

const KNOWN_CMC_LESSONS = new Map([
  [6, ['利用洛必达法则', '30:23']],
  [7, ['利用定积分的定义', '58:08']],
  [8, ['夹逼准则', '34:25']],
  [9, ['利用导数的定义', '17:26']],
  [10, ['积分放缩法 + 单调有界准则', '38:32']],
  [11, ['利用无穷级数', '17:11']],
  [12, ['拟合法', '26:57']],
  [13, ['极限的定义 + 斯特林公式 + 欧拉常数', '38:33']],
  [14, ['递推数列专题·差分求通项', '30:01']],
  [15, ['递推数列专题·做差法', '15:58']],
  [16, ['递推数列专题·递推函数导数正负', '37:25']],
  [17, ['递推数列专题·压缩映射', '22:46']],
  [18, ['递推数列专题·蛛网图解法', '29:17']],
  [19, ['有理函数积分', '26:50']],
  [20, ['三角有理函数积分', '15:36']],
  [21, ['无理函数积分', '44:20']],
]);

let cmcCatalog = Array.from({ length: 124 }, (_, index) => {
  const number = index + 1;
  const known = KNOWN_CMC_LESSONS.get(number);
  return { number, chapter: '', title: known?.[0] || '', duration: known?.[1] || '' };
});

export function setCmcCatalog(value) {
  if (!Array.isArray(value) || value.length !== 124 || value.some((lesson, index) => Number(lesson?.number) !== index + 1)) {
    throw new Error('CMC 课程目录必须包含连续的 1–124 课。');
  }
  cmcCatalog = value.map((lesson) => ({
    number: Number(lesson.number),
    chapter: cleanText(lesson.chapter, 80),
    title: cleanText(lesson.title, 200),
    duration: cleanText(lesson.duration, 40),
  }));
}

function cmcChapter(number) {
  const ranges = [
    [1, 13, '极限'], [14, 18, '递推数列极限'], [19, 32, '一元积分'], [33, 46, '中值问题'],
    [47, 55, '二重积分'], [56, 62, '三重积分'], [63, 67, '曲线积分'], [68, 77, '曲面积分'],
    [78, 89, '微分方程'], [90, 99, '无穷级数·常数项敛散'], [100, 108, '无穷级数·幂级数与傅里叶'],
    [109, 115, '微分不等式'], [116, 124, '积分不等式'],
  ];
  return ranges.find(([start, end]) => number >= start && number <= end)?.[2] || '课程目录';
}

function cmcLesson(number) {
  const catalogEntry = cmcCatalog[number - 1];
  return {
    number,
    chapter: catalogEntry?.chapter || cmcChapter(number),
    title: catalogEntry?.title || '',
    duration: catalogEntry?.duration || '',
    watched: false,
    reproduced: false,
    conditionsWritten: false,
    recall: '',
    grade: '',
    actualMinutes: 0,
  };
}

const CMC_BLOCKS = [
  ['2026-09-14', '19:30', 120, 3, '第 6–8 课：标称 123 分钟；建议 1.25 倍速约 98 分钟，剩余时间做方法卡与代表例题复现。'],
  ['2026-09-16', '19:30', 120, 4, '第 9–12 课：标称 100 分钟；建议 1.25 倍速约 80 分钟，至少复现 2 个不同方法。若有课可改为 20:45–22:15，并把 30 分钟顺延到周五。'],
  ['2026-09-18', '09:00', 120, 4, '第 13–16 课：标称 122 分钟；建议 1.25 倍速约 98 分钟，整理“递推数列先试什么”的判断表。'],
  ['2026-09-20', '14:30', 150, 5, '第 17–21 课：标称 139 分钟；建议 1.25 倍速约 111 分钟，闭卷复现一题并完成周复盘。'],
  ['2026-09-21', '19:30', 120, 5, '第 2 周：一元积分收尾并进入中值问题。'],
  ['2026-09-23', '19:30', 120, 4, '第 2 周：一元积分收尾并进入中值问题。'],
  ['2026-09-25', '09:00', 120, 4, '第 2 周：一元积分收尾并进入中值问题。'],
  ['2026-09-27', '14:30', 150, 4, '第 2 周：一元积分收尾并进入中值问题。'],
  ['2026-09-28', '19:30', 120, 3, '第 3 周：中值问题高强度长课。'],
  ['2026-09-30', '19:30', 120, 1, '第 42 课“双中值问题”约 1:52，独占学习块。'],
  ['2026-10-02', '09:00', 120, 1, '第 43 课“泰勒中值定理的运用”约 1:46，独占学习块。'],
  ['2026-10-04', '14:30', 150, 1, '第 44 课与本章方法复现。'],
  ['2026-10-05', '19:30', 120, 5, '第 4 周：中值问题收尾、二重积分、三重积分。'],
  ['2026-10-07', '19:30', 120, 5, '第 4 周：中值问题收尾、二重积分、三重积分。'],
  ['2026-10-09', '09:00', 120, 4, '第 4 周：中值问题收尾、二重积分、三重积分。'],
  ['2026-10-11', '14:30', 150, 4, '第 4 周：完成三重积分并做章末关联真题。'],
  ['2026-10-12', '19:30', 120, 4, '第 5 周：曲线积分、曲面积分、微分方程开头。'],
  ['2026-10-14', '19:30', 120, 4, '第 5 周：曲线积分、曲面积分、微分方程开头。'],
  ['2026-10-16', '09:00', 120, 4, '第 5 周：曲线积分、曲面积分、微分方程开头。'],
  ['2026-10-18', '14:30', 150, 4, '第 5 周：完成曲面积分并做章末关联真题。'],
  ['2026-10-19', '19:30', 120, 5, '第 6 周：微分方程收尾、常数项级数。'],
  ['2026-10-21', '19:30', 120, 5, '第 6 周：微分方程收尾、常数项级数。'],
  ['2026-10-23', '09:00', 120, 5, '第 6 周：微分方程收尾、常数项级数。'],
  ['2026-10-25', '14:30', 150, 5, '第 6 周：常数项级数与章末关联真题。'],
  ['2026-10-26', '19:30', 120, 5, '第 7 周：级数、微分不等式、积分不等式开头。'],
  ['2026-10-28', '19:30', 120, 5, '第 7 周：级数、微分不等式、积分不等式开头。'],
  ['2026-10-30', '09:00', 120, 5, '第 7 周：级数、微分不等式、积分不等式开头。'],
  ['2026-11-01', '14:30', 150, 5, '第 7 周：课程主体收尾与综合复现。'],
  ['2026-11-02', '19:30', 150, 6, '第 119–124 课收尾；完成后进入三套完整真题。'],
];

const CMC_CHAPTER_ENDS = new Map([
  [13, '极限'], [18, '递推数列极限'], [32, '一元积分'], [46, '中值问题'], [55, '二重积分'], [62, '三重积分'],
  [67, '曲线积分'], [77, '曲面积分'], [89, '微分方程'], [99, '无穷级数·常数项敛散'],
  [108, '无穷级数·幂级数与傅里叶'], [115, '微分不等式'], [124, '积分不等式'],
]);

function buildCmcTasks(startLesson = 6) {
  let lessonNumber = startLesson;
  const tasks = [];
  for (const [date, time, plannedMinutes, count, guidance] of CMC_BLOCKS) {
    const scheduledDate = addDays(date, 7);
    const numbers = Array.from({ length: count }, () => lessonNumber++).filter((number) => number <= 124);
    if (date === '2026-11-02' && lessonNumber <= 124) {
      while (lessonNumber <= 124) numbers.push(lessonNumber++);
    }
    if (!numbers.length) continue;
    const start = numbers[0];
    const end = numbers.at(-1);
    const resolvedGuidance = startLesson === 6
      ? `${guidance} 本周计划已因百度之星冲刺顺延 7 天。`
      : `按当前起点顺序安排第 ${start}${end === start ? '' : `–${end}`} 课；请按实际难度选择 1.0–1.5 倍速，并为方法卡与关视频复现保留 15–30 分钟。`;
    tasks.push({
      date: scheduledDate,
      task: {
        ...taskBase(`${scheduledDate}-cmc-course`, 'cmc', time, `CMC 第 ${start}${end === start ? '' : `–${end}`} 课`, plannedMinutes),
        cmc: { courseTitle: '大学生数学竞赛课程（全新第二代）', guidance: resolvedGuidance, lessons: numbers.map(cmcLesson) },
      },
    });
    for (const number of numbers) {
      const chapter = CMC_CHAPTER_ENDS.get(number);
      if (!chapter) continue;
      const reviewTime = time.startsWith('09') ? '11:15' : time.startsWith('14') ? '20:00' : '21:35';
      tasks.push({
        date: scheduledDate,
        task: taskBase(`${scheduledDate}-cmc-chapter-${number}`, 'review', reviewTime, `章末关联真题 / 综合题复现 · ${chapter}`, 45),
      });
    }
  }
  return tasks;
}

function cetTask(date) {
  const newWords = date >= CET6_NEW_START && date <= CET6_NEW_END;
  return {
    ...taskBase(`${date}-cet6`, 'cet6', newWords ? '21:30' : '21:00', newWords ? '六级高频新词 100' : '六级复习 1000 词 + 刷题 45 分钟', newWords ? 35 : 45),
    cet6: {
      phase: newWords ? 'new' : 'review',
      wordsTarget: newWords ? 100 : 1000,
      wordsActual: 0,
      practiceType: newWords ? '' : '听力',
      practiceCount: 0,
    },
  };
}

function algorithmTask(date, time, number, title, slug, rating, topic, section) {
  const plannedMinutes = time === '10:00' ? 60 : 45;
  return {
    ...taskBase(`${date}-leetcode-${number}`, 'algorithm', time, `${number}《${title}》`, plannedMinutes),
    algorithm: {
      topic,
      section,
      number: String(number),
      title,
      url: `https://leetcode.cn/problems/${slug}/`,
      rating: rating ?? '',
      premium: false,
      optional: false,
      secondPass: Boolean(rating && rating > 1700),
      independentStart: '',
      viewedHint: false,
      reproduced: false,
      nextDayRewrite: false,
      wrongReason: '',
      reviewDate: addDays(date, 1),
    },
  };
}

function contestTask(date) {
  return {
    ...taskBase(`${date}-contest`, 'contest', '10:30', 'LeetCode 周赛', 90),
    contest: { solvedIndependently: 0, blockers: '' },
  };
}

function reviewTask(date, title = '复现本周最卡的一题') {
  return taskBase(`${date}-review`, 'review', '20:00', title, 30);
}

function sprintTask(date, id, time, title, plannedMinutes, options = {}) {
  return {
    ...taskBase(`${date}-sprint-${id}`, 'sprint', time, title, plannedMinutes),
    sprint: {
      instructions: cleanText(options.instructions, 800),
      checklist: (options.checklist || []).map((label) => ({ label, done: false })),
      reproducedTarget: Number(options.reproducedTarget) || 0,
      reproducedActual: 0,
      submittedTarget: Number(options.submittedTarget) || 0,
      submittedActual: 0,
      acceptedActual: 0,
      blockers: '',
    },
  };
}

function baiduSprintTasks() {
  return [
    ['2026-09-14', sprintTask('2026-09-14', 'registration-check', '19:00', '百度之星报名 / 缴费核验', 20, {
      instructions: '只核对自己的报名链路，不在页面保存账号或密码。',
      checklist: ['确认报名状态', '确认缴费状态', '确认第二场初赛场次'],
    })],
    ['2026-09-14', sprintTask('2026-09-14', 'platform-public-set', '19:30', '平台测试 + 公开初赛题分层训练', 150, {
      instructions: '通读一套公开初赛题，先按难度排序，再完成并独立复现最容易的 2 题。',
      checklist: ['完成平台 / OJ 测试', '通读一套公开初赛题', '按预估难度完成排序'],
      reproducedTarget: 2,
    })],
    ['2026-09-15', sprintTask('2026-09-15', 'timed-training', '09:00', '公开初赛题限时训练 + 订正', 150, {
      instructions: '2 小时限时训练，随后用 30 分钟订正；至少认真提交 2 题并关掉题解独立复现 1 题。',
      checklist: ['完成 2 小时限时训练', '完成 30 分钟订正'],
      submittedTarget: 2,
      reproducedTarget: 1,
    })],
    ['2026-09-16', sprintTask('2026-09-16', 'weak-topic', '19:30', '枚举 / 模拟 / 排序 / 前缀和 / 哈希弱项训练', 150, {
      instructions: '无晚课时 19:30–22:00；有晚课时改为 20:45–22:15。选择最弱的一项训练，复现 2 题并记录错因。',
      checklist: ['确认当天最弱专题', '完成针对性训练'],
      reproducedTarget: 2,
    })],
    ['2026-09-17', sprintTask('2026-09-17', 'half-mock', '19:30', '百度之星半场模拟 + 复盘', 150, {
      instructions: '先通读全卷并排序，再开始作答；赛后独立复现 1–2 题。',
      checklist: ['先通读并排序题目', '完成半场模拟', '完成赛后复盘'],
      reproducedTarget: 1,
    })],
    ['2026-09-17', taskBase('2026-09-17-putonghua-booking', 'other', '', '普通话测试预约', 15)],
    ['2026-09-18', sprintTask('2026-09-18', 'full-mock', '09:00', '百度之星完整 3 小时模拟', 180, {
      instructions: '09:00–12:00 完整模拟，比赛时段内禁用题解。',
      checklist: ['完成完整 3 小时模拟', '模拟期间未使用题解'],
    })],
    ['2026-09-18', sprintTask('2026-09-18', 'closest-ac-review', '19:30', '只复盘最接近 AC 的题', 60, {
      instructions: '只处理白天模拟中最接近 AC 的一题，关掉题解后独立复现。',
      reproducedTarget: 1,
    })],
    ['2026-09-18', sprintTask('2026-09-18', 'equipment-check', '20:30', '正式赛账号与设备检查', 30, {
      checklist: ['账号可登录', '报名与缴费无误', 'OJ 可正常提交', 'C++17 环境可用', '网络稳定', '电源与充电器就绪'],
    })],
    ['2026-09-19', sprintTask('2026-09-19', 'warm-up', '09:30', '赛前轻量热身', 60, {
      instructions: '只做轻量热身，不在赛前消耗过多精力。',
      checklist: ['完成轻量热身', '停止继续加量并留出休息时间'],
    })],
    ['2026-09-19', sprintTask('2026-09-19', 'login-check', '13:00', '13:20 前登录与设备复检', 20, {
      checklist: ['13:20 前完成登录', '网络 / 电源 / 编译环境复检完成'],
    })],
    ['2026-09-19', {
      ...sprintTask('2026-09-19', 'baidu-star-round-2', '14:00', '百度之星第 22 届第二场初赛（线上）', 180, {
        instructions: '14:00–17:00 正式参赛。赛后只填写 AC 数、未过题与关键卡点。',
        checklist: ['完成 14:00–17:00 正式参赛'],
      }),
      id: '2026-09-19-event-baidu-star-round-2',
    }],
    ['2026-09-20', sprintTask('2026-09-20', 'closest-ac-fixes', '10:00', '补最接近 AC 的 1–2 题', 120, {
      instructions: '优先补正式赛里最接近 AC 的题；完成仍以关掉题解后独立复现计数。',
      reproducedTarget: 1,
    })],
    ['2026-09-20', sprintTask('2026-09-20', 'weekly-review', '20:00', '百度之星冲刺周复盘', 30, {
      checklist: ['记录本周有效复现数', '整理高频卡点', '确定下周恢复的 CMC 与算法主线'],
    })],
  ];
}

function ensureDay(days, date) {
  if (!days[date]) days[date] = { tasks: [] };
  return days[date].tasks;
}

export function defaultDays(cmcStartLesson = 6) {
  const days = {};

  for (let date = CET6_NEW_START; date <= PLAN_END; date = addDays(date, 1)) {
    ensureDay(days, date).push(cetTask(date));
  }

  const confirmedEvents = [
    ['2026-10-11', '09:30', 'fltrp-comprehensive', '外研社·国才杯综合能力校赛', 90],
    ['2026-10-11', '16:00', 'fltrp-translation', '外研社·国才杯笔译校赛', 120],
  ];
  for (const [date, time, id, title, minutes] of confirmedEvents) {
    ensureDay(days, date).push(taskBase(`${date}-event-${id}`, 'other', time, title, minutes));
  }
  const vocabularyPreliminary = taskBase(
    '2026-10-24-event-baicizhan-vocabulary-preliminary',
    'other',
    '',
    '百词斩全国大学生英语单词大赛初赛',
  );
  vocabularyPreliminary.note = '具体时间待报名结束分组后公布';
  ensureDay(days, '2026-10-24').push(vocabularyPreliminary);

  for (const [date, task] of baiduSprintTasks()) ensureDay(days, date).push(task);

  for (const { date, task } of buildCmcTasks(cmcStartLesson)) ensureDay(days, date).push(task);

  const simulations = [
    ['2026-11-10', '真题模拟一（完整 150 分钟）'], ['2026-11-11', '真题模拟一订正'],
    ['2026-11-12', '真题模拟二（完整 150 分钟）'], ['2026-11-13', '真题模拟二订正'],
  ];
  for (const [date, title] of simulations) {
    ensureDay(days, date).push(taskBase(`${date}-cmc-paper`, 'cmc', title.includes('模拟') ? '14:30' : '19:30', title, title.includes('150') ? 150 : 90));
  }

  for (const week of ALGORITHM_WEEKS) {
    if (week.start === BAIDU_SPRINT_START) continue;
    for (const [date, time, number, title, slug, rating] of week.problems) {
      ensureDay(days, date).push(algorithmTask(date, time, number, title, slug, rating, week.topic, week.section));
    }
    const sunday = addDays(week.start, 6);
    ensureDay(days, sunday).push(contestTask(sunday), reviewTask(sunday));
  }

  Object.values(days).forEach((day) => day.tasks.sort((left, right) => left.time.localeCompare(right.time)));
  return days;
}

export function createDefaultState(cmcStartLesson = 6) {
  return {
    version: CHECKIN_VERSION,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    preferences: { cmcBaselineMinutes: 0, cmcCurrentLesson: cmcStartLesson },
    days: defaultDays(cmcStartLesson),
  };
}

function normalizeAlgorithm(value = {}) {
  return {
    topic: cleanText(value.topic, 80),
    section: cleanText(value.section, 100),
    number: cleanText(value.number, 12),
    title: cleanText(value.title, 160),
    url: /^https:\/\/leetcode\.cn\/problems\//.test(value.url || '') ? cleanText(value.url, 500) : '',
    rating: value.rating === '' ? '' : clampNumber(value.rating, 0, 5000),
    premium: Boolean(value.premium),
    optional: Boolean(value.optional),
    secondPass: Boolean(value.secondPass),
    independentStart: cleanText(value.independentStart, 32),
    viewedHint: Boolean(value.viewedHint),
    reproduced: Boolean(value.reproduced),
    nextDayRewrite: Boolean(value.nextDayRewrite),
    wrongReason: cleanText(value.wrongReason, 1000),
    reviewDate: isDate(value.reviewDate) ? value.reviewDate : '',
  };
}

function normalizeCmc(value = {}) {
  const lessons = Array.isArray(value.lessons) ? value.lessons.slice(0, 30).map((lesson) => ({
    number: clampNumber(lesson?.number, 1, 124),
    chapter: cleanText(lesson?.chapter, 80),
    title: cleanText(lesson?.title, 200),
    duration: cleanText(lesson?.duration, 40),
    watched: Boolean(lesson?.watched),
    reproduced: Boolean(lesson?.reproduced),
    conditionsWritten: Boolean(lesson?.conditionsWritten),
    recall: cleanText(lesson?.recall, 500),
    grade: ['A', 'B', 'C'].includes(lesson?.grade) ? lesson.grade : '',
    actualMinutes: clampNumber(lesson?.actualMinutes, 0, 1440),
  })) : [];
  return {
    courseTitle: cleanText(value.courseTitle, 200),
    guidance: cleanText(value.guidance, 800),
    lessons,
  };
}

function normalizeSprint(value = {}) {
  return {
    instructions: cleanText(value.instructions, 800),
    checklist: Array.isArray(value.checklist) ? value.checklist.slice(0, 20).map((item) => ({
      label: cleanText(item?.label, 160) || '待核验事项',
      done: Boolean(item?.done),
    })) : [],
    reproducedTarget: clampNumber(value.reproducedTarget, 0, 20),
    reproducedActual: clampNumber(value.reproducedActual, 0, 20),
    submittedTarget: clampNumber(value.submittedTarget, 0, 20),
    submittedActual: clampNumber(value.submittedActual, 0, 20),
    acceptedActual: clampNumber(value.acceptedActual, 0, 20),
    blockers: cleanText(value.blockers, 2000),
  };
}

function normalizeTask(value = {}, fallbackId = '') {
  const kind = VALID_KINDS.has(value.kind) ? value.kind : 'other';
  const task = {
    id: cleanText(value.id || fallbackId, 120),
    kind,
    time: /^\d{2}:\d{2}$/.test(value.time || '') ? value.time : '',
    title: cleanText(value.title, 200) || '未命名任务',
    plannedMinutes: clampNumber(value.plannedMinutes, 0, 1440),
    completed: Boolean(value.completed),
    actualMinutes: clampNumber(value.actualMinutes, 0, 1440),
    note: cleanText(value.note, 2000),
    planExcluded: Boolean(value.planExcluded),
    planNote: cleanText(value.planNote, 300),
  };
  if (kind === 'cmc' && value.cmc) task.cmc = normalizeCmc(value.cmc);
  if (kind === 'algorithm') task.algorithm = normalizeAlgorithm(value.algorithm);
  if (kind === 'cet6') {
    task.cet6 = {
      phase: value.cet6?.phase === 'new' ? 'new' : 'review',
      wordsTarget: clampNumber(value.cet6?.wordsTarget, 0, 10000),
      wordsActual: clampNumber(value.cet6?.wordsActual, 0, 10000),
      practiceType: ['听力', '阅读', '翻译', '写作'].includes(value.cet6?.practiceType) ? value.cet6.practiceType : '',
      practiceCount: clampNumber(value.cet6?.practiceCount, 0, 100),
    };
  }
  if (kind === 'contest') {
    task.contest = {
      solvedIndependently: clampNumber(value.contest?.solvedIndependently, 0, 10),
      blockers: cleanText(value.contest?.blockers, 1200),
    };
  }
  if (kind === 'sprint') task.sprint = normalizeSprint(value.sprint);
  return task;
}

function mergeTask(defaultTask, savedTask) {
  if (!savedTask) return structuredClone(defaultTask);
  const normalized = normalizeTask(savedTask, defaultTask.id);
  const merged = { ...structuredClone(defaultTask), ...normalized, id: defaultTask.id, kind: defaultTask.kind, planExcluded: false, planNote: '' };
  if (defaultTask.algorithm || normalized.algorithm) merged.algorithm = { ...defaultTask.algorithm, ...normalized.algorithm };
  if (defaultTask.cmc || normalized.cmc) {
    const savedLessons = new Map((normalized.cmc?.lessons || []).map((lesson) => [lesson.number, lesson]));
    merged.cmc = {
      ...defaultTask.cmc,
      ...normalized.cmc,
      courseTitle: defaultTask.cmc?.courseTitle || normalized.cmc?.courseTitle || '',
      guidance: defaultTask.cmc?.guidance || normalized.cmc?.guidance || '',
      lessons: (defaultTask.cmc?.lessons || normalized.cmc?.lessons || []).map((lesson) => {
        const saved = savedLessons.get(lesson.number) || {};
        return {
          ...lesson,
          watched: Boolean(saved.watched),
          reproduced: Boolean(saved.reproduced),
          conditionsWritten: Boolean(saved.conditionsWritten),
          recall: saved.recall || '',
          grade: saved.grade || '',
          actualMinutes: Number(saved.actualMinutes) || 0,
        };
      }),
    };
  }
  if (defaultTask.cet6 || normalized.cet6) merged.cet6 = { ...defaultTask.cet6, ...normalized.cet6 };
  if (defaultTask.contest || normalized.contest) merged.contest = { ...defaultTask.contest, ...normalized.contest };
  if (defaultTask.sprint || normalized.sprint) {
    const savedChecks = new Map((normalized.sprint?.checklist || []).map((item) => [item.label, item.done]));
    merged.sprint = {
      ...defaultTask.sprint,
      ...normalized.sprint,
      instructions: defaultTask.sprint?.instructions || normalized.sprint?.instructions || '',
      checklist: (defaultTask.sprint?.checklist || normalized.sprint?.checklist || []).map((item) => ({
        ...item,
        done: Boolean(savedChecks.get(item.label)),
      })),
      reproducedTarget: defaultTask.sprint?.reproducedTarget || 0,
      submittedTarget: defaultTask.sprint?.submittedTarget || 0,
    };
  }
  return merged;
}

function cmcLessonNumbers(task) {
  return (task?.cmc?.lessons || []).map((lesson) => Number(lesson.number)).join(',');
}

function supersededDefaultTask(task, date) {
  if (!task?.id?.startsWith(`${date}-`)) return false;
  if (/-(cmc-course|cmc-chapter-\d+|cmc-paper)$/.test(task.id)) return true;
  if (date >= BAIDU_SPRINT_START && date <= BAIDU_SPRINT_END) {
    return /-(leetcode-\d+|contest|review|cet6)$/.test(task.id);
  }
  return false;
}

function preservedLegacyTask(task, date, sequence) {
  const legacy = normalizeTask(task, `${date}-legacy-${sequence}`);
  legacy.id = `${legacy.id}-legacy-plan-v1-${sequence}`.slice(0, 120);
  legacy.planExcluded = true;
  legacy.planNote = '计划调整前已有进度：记录已保留，但不计入本周欠账或完成率。';
  return legacy;
}

function applySavedCmcLessonProgress(days, savedDays) {
  const savedLessons = new Map();
  for (const savedDay of Object.values(savedDays)) {
    for (const task of savedDay?.tasks || []) {
      for (const lesson of task?.cmc?.lessons || []) {
        if (lesson.watched || lesson.reproduced || lesson.conditionsWritten || Number(lesson.actualMinutes) > 0 || cleanText(lesson.recall).trim()) {
          savedLessons.set(Number(lesson.number), lesson);
        }
      }
    }
  }
  for (const day of Object.values(days)) {
    for (const task of activeTasks(day.tasks)) {
      if (!task.cmc?.lessons) continue;
      task.cmc.lessons = task.cmc.lessons.map((lesson) => {
        const saved = savedLessons.get(lesson.number);
        if (!saved) return lesson;
        return {
          ...lesson,
          watched: Boolean(saved.watched),
          reproduced: Boolean(saved.reproduced),
          conditionsWritten: Boolean(saved.conditionsWritten),
          recall: cleanText(saved.recall, 500),
          grade: ['A', 'B', 'C'].includes(saved.grade) ? saved.grade : '',
          actualMinutes: clampNumber(saved.actualMinutes, 0, 1440),
        };
      });
    }
  }
}

export function hydrateState(raw) {
  const requestedStart = Math.round(clampNumber(raw?.preferences?.cmcCurrentLesson, 1, 124)) || 6;
  const defaults = createDefaultState(requestedStart);
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return defaults;
  const savedDays = raw.days && typeof raw.days === 'object' && !Array.isArray(raw.days) ? raw.days : {};
  const days = {};

  for (const [date, defaultDay] of Object.entries(defaults.days)) {
    const savedTasks = Array.isArray(savedDays[date]?.tasks) ? savedDays[date].tasks : [];
    const byId = new Map(savedTasks.map((task) => [task?.id, task]));
    const legacy = [];
    days[date] = { tasks: defaultDay.tasks.map((task) => {
      const saved = byId.get(task.id);
      const changedCmcBlock = task.cmc?.lessons?.length && saved?.cmc?.lessons?.length
        && cmcLessonNumbers(task) !== cmcLessonNumbers(saved);
      if (changedCmcBlock && taskHasProgress(saved)) legacy.push(preservedLegacyTask(saved, date, legacy.length + 1));
      return mergeTask(task, changedCmcBlock ? null : saved);
    }) };
    for (const savedTask of savedTasks) {
      if (!savedTask?.id || byId.get(savedTask.id) !== savedTask) continue;
      if (days[date].tasks.some((task) => task.id === savedTask.id)) continue;
      if (supersededDefaultTask(savedTask, date)) {
        if (taskHasProgress(savedTask)) legacy.push(preservedLegacyTask(savedTask, date, legacy.length + 1));
        continue;
      }
      days[date].tasks.push(normalizeTask(savedTask, `${date}-custom-${days[date].tasks.length + 1}`));
    }
    days[date].tasks.push(...legacy);
  }

  for (const [date, savedDay] of Object.entries(savedDays)) {
    if (!isDate(date) || days[date] || !Array.isArray(savedDay?.tasks)) continue;
    days[date] = { tasks: savedDay.tasks.slice(0, 80).map((task, index) => normalizeTask(task, `${date}-custom-${index + 1}`)) };
  }

  applySavedCmcLessonProgress(days, savedDays);

  return {
    version: CHECKIN_VERSION,
    createdAt: cleanText(raw.createdAt, 40) || defaults.createdAt,
    updatedAt: new Date().toISOString(),
    preferences: {
      cmcBaselineMinutes: clampNumber(raw.preferences?.cmcBaselineMinutes, 0, 60 * 1000),
      cmcCurrentLesson: requestedStart,
    },
    days,
  };
}

export function importCheckinState(text) {
  if (typeof text !== 'string' || text.length > 2_000_000) throw new Error('备份文件过大或格式无效。');
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('这不是有效的 JSON 备份文件。');
  }
  if (parsed?.version !== CHECKIN_VERSION || !parsed?.days || typeof parsed.days !== 'object' || Array.isArray(parsed.days)) {
    throw new Error('备份版本不匹配，或缺少打卡记录。');
  }
  return hydrateState(parsed);
}

export function exportCheckinState(state) {
  const normalized = hydrateState(state);
  normalized.updatedAt = new Date().toISOString();
  return JSON.stringify(normalized, null, 2);
}

export function loadCheckinState(storage) {
  try {
    const saved = storage?.getItem?.(CHECKIN_STORAGE_KEY);
    return hydrateState(saved ? JSON.parse(saved) : null);
  } catch {
    return hydrateState(null);
  }
}

export function storeCheckinState(storage, state) {
  if (!storage?.setItem) throw new Error('浏览器存储不可用。');
  const stored = { ...state, updatedAt: new Date().toISOString() };
  storage.setItem(CHECKIN_STORAGE_KEY, JSON.stringify(stored));
  return stored;
}

export function effectiveComplete(task) {
  if (task?.planExcluded) return false;
  if (!task?.completed) return false;
  if (task.kind === 'algorithm') return Boolean(task.algorithm?.reproduced);
  if (task.kind === 'cmc') {
    if (!task.cmc?.lessons?.length) return Number(task.actualMinutes) > 0;
    return Number(task.actualMinutes) > 0
      && task.cmc.lessons.every((lesson) => lesson.watched && lesson.conditionsWritten)
      && task.cmc.lessons.some((lesson) => lesson.reproduced);
  }
  if (task.kind === 'cet6') {
    if (task.cet6?.phase === 'new') return Number(task.cet6.wordsActual) > 0;
    return Number(task.cet6?.wordsActual) > 0 && Number(task.cet6?.practiceCount) > 0;
  }
  if (task.kind === 'sprint') {
    const sprint = task.sprint || {};
    const checksComplete = !(sprint.checklist || []).length || sprint.checklist.every((item) => item.done);
    return checksComplete
      && Number(sprint.reproducedActual) >= Number(sprint.reproducedTarget || 0)
      && Number(sprint.submittedActual) >= Number(sprint.submittedTarget || 0);
  }
  return true;
}

export function allTasks(state) {
  return Object.entries(state?.days || {}).flatMap(([date, day]) => (day?.tasks || []).map((task) => ({ date, task })));
}

function targetForWeek(date) {
  const start = weekStart(date);
  const end = addDays(start, 6);
  const newWordDays = Array.from({ length: 7 }, (_, index) => addDays(start, index))
    .filter((day) => day >= CET6_NEW_START && day <= CET6_NEW_END).length;
  const reviewDays = Array.from({ length: 7 }, (_, index) => addDays(start, index))
    .filter((day) => day >= CET6_REVIEW_START && day <= PLAN_END).length;
  return {
    start,
    end,
    cmcMinutes: start === BAIDU_SPRINT_START ? 0 : start <= '2026-11-09' && end >= '2026-09-21' ? 510 : 0,
    algorithms: start === BAIDU_SPRINT_START ? 0 : ALGORITHM_WEEKS.some((week) => week.start === start) ? 6 : 0,
    sprintTasks: start === BAIDU_SPRINT_START ? baiduSprintTasks().filter(([, task]) => task.kind === 'sprint').length : 0,
    sprintReproductions: start === BAIDU_SPRINT_START
      ? baiduSprintTasks().reduce((sum, [, task]) => sum + (Number(task.sprint?.reproducedTarget) || 0), 0)
      : 0,
    newWords: newWordDays * 100,
    reviewWords: reviewDays * 1000,
  };
}

export function checkinStats(state, selectedDate) {
  const dates = weekDates(selectedDate);
  const dateSet = new Set(dates);
  const rows = allTasks(state);
  const weekly = rows.filter(({ date, task }) => dateSet.has(date) && !task.planExcluded);
  const effective = weekly.filter(({ task }) => effectiveComplete(task));
  const cmcWeeklyMinutes = weekly.filter(({ task }) => task.kind === 'cmc').reduce((sum, { task }) => sum + (task.completed ? Number(task.actualMinutes) || 0 : 0), 0);
  const cmcTotalMinutes = clampNumber(state?.preferences?.cmcBaselineMinutes, 0, 60_000)
    + rows.filter(({ task }) => task.kind === 'cmc').reduce((sum, { task }) => sum + (task.completed ? Number(task.actualMinutes) || 0 : 0), 0);
  const algorithmsReproduced = weekly.filter(({ task }) => task.kind === 'algorithm' && effectiveComplete(task)).length;
  const sprintTasks = weekly.filter(({ task }) => task.kind === 'sprint');
  const sprintCompleted = sprintTasks.filter(({ task }) => effectiveComplete(task)).length;
  const sprintReproduced = sprintTasks.reduce((sum, { task }) => sum + (Number(task.sprint?.reproducedActual) || 0), 0);
  const cmcWeeklyLessons = weekly.filter(({ task }) => task.kind === 'cmc').flatMap(({ task }) => task.cmc?.lessons || []);
  const cmcWatchedLessons = cmcWeeklyLessons.filter((lesson) => lesson.watched).length;
  const cmcReproducedLessons = cmcWeeklyLessons.filter((lesson) => lesson.reproduced).length;
  const cetNewTotal = rows.filter(({ task }) => task.kind === 'cet6' && task.completed && task.cet6?.phase === 'new')
    .reduce((sum, { task }) => sum + (Number(task.cet6?.wordsActual) || 0), 0);
  const cetWeeklyNew = weekly.filter(({ task }) => task.kind === 'cet6' && task.completed && task.cet6?.phase === 'new')
    .reduce((sum, { task }) => sum + (Number(task.cet6?.wordsActual) || 0), 0);
  const cetWeeklyReview = weekly.filter(({ task }) => task.kind === 'cet6' && task.completed && task.cet6?.phase === 'review')
    .reduce((sum, { task }) => sum + (Number(task.cet6?.wordsActual) || 0), 0);
  const cetWeeklyPractice = weekly.filter(({ task }) => task.kind === 'cet6' && task.completed && task.cet6?.phase === 'review')
    .reduce((sum, { task }) => sum + (Number(task.cet6?.practiceCount) || 0), 0);
  const completionRate = weekly.length ? Math.round((effective.length / weekly.length) * 100) : 0;

  const today = new Date().toISOString().slice(0, 10);
  const completedDays = new Set(Object.entries(state?.days || {})
    .filter(([date, day]) => {
      const tasks = activeTasks(day.tasks);
      return date <= today && tasks.length && tasks.every(effectiveComplete);
    })
    .map(([date]) => date));
  let cursor = selectedDate;
  if (!completedDays.has(cursor)) cursor = addDays(cursor, -1);
  let streak = 0;
  while (cursor && completedDays.has(cursor)) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }

  return {
    weekStart: dates[0],
    weekEnd: dates[6],
    target: targetForWeek(selectedDate),
    cmcWeeklyMinutes,
    cmcTotalMinutes,
    algorithmsReproduced,
    sprintTaskTotal: sprintTasks.length,
    sprintCompleted,
    sprintReproduced,
    cmcLessonTotal: cmcWeeklyLessons.length,
    cmcWatchedLessons,
    cmcReproducedLessons,
    cetNewTotal,
    cetWeeklyNew,
    cetWeeklyReview,
    cetWeeklyPractice,
    completionRate,
    streak,
    completedTasks: effective.length,
    totalTasks: weekly.length,
  };
}

export function todayRemaining(state, date) {
  const tasks = activeTasks(Array.isArray(state?.days?.[date]?.tasks) ? state.days[date].tasks : []);
  const algorithms = tasks.filter((task) => task.kind === 'algorithm');
  const sprintTasks = tasks.filter((task) => task.kind === 'sprint');
  const cmcTasks = tasks.filter((task) => task.kind === 'cmc');
  const cmcLessons = cmcTasks.flatMap((task) => task.cmc?.lessons || []);
  const cetTasks = tasks.filter((task) => task.kind === 'cet6');
  const reviewCetTasks = cetTasks.filter((task) => task.cet6?.phase === 'review');
  const wordsTarget = cetTasks.reduce((sum, task) => sum + (Number(task.cet6?.wordsTarget) || 0), 0);
  const wordsActual = cetTasks.reduce((sum, task) => sum + (Number(task.cet6?.wordsActual) || 0), 0);
  const practiceTarget = reviewCetTasks.length;
  const practiceActual = reviewCetTasks.reduce((sum, task) => sum + (Number(task.cet6?.practiceCount) || 0), 0);

  const cmc = cmcLessons.length
    ? {
      mode: 'lessons',
      unit: '节',
      target: cmcLessons.length,
      actual: cmcLessons.filter((lesson) => lesson.watched).length,
    }
    : {
      mode: 'minutes',
      unit: '分钟',
      target: cmcTasks.reduce((sum, task) => sum + (Number(task.plannedMinutes) || 0), 0),
      actual: cmcTasks.reduce((sum, task) => sum + (Number(task.actualMinutes) || 0), 0),
    };
  cmc.remaining = Math.max(0, cmc.target - cmc.actual);

  return {
    date,
    taskCount: tasks.length,
    algorithm: {
      unit: '题',
      target: algorithms.length,
      actual: algorithms.filter(effectiveComplete).length,
      remaining: Math.max(0, algorithms.length - algorithms.filter(effectiveComplete).length),
    },
    sprint: {
      unit: '项',
      target: sprintTasks.length,
      actual: sprintTasks.filter(effectiveComplete).length,
      remaining: Math.max(0, sprintTasks.length - sprintTasks.filter(effectiveComplete).length),
    },
    cmc,
    cet6: {
      wordLabel: cetTasks.some((task) => task.cet6?.phase === 'review') ? '复习词' : '新词',
      words: {
        unit: '词',
        target: wordsTarget,
        actual: wordsActual,
        remaining: Math.max(0, wordsTarget - wordsActual),
      },
      practice: {
        unit: '项',
        target: practiceTarget,
        actual: practiceActual,
        remaining: Math.max(0, practiceTarget - practiceActual),
      },
    },
  };
}

export function daysUntil(date, today = currentLocalDate()) {
  if (!isDate(date) || !isDate(today)) return null;
  return Math.round((parseDate(date) - parseDate(today)) / DAY_MS);
}

export function urgencyForDays(days) {
  if (days === null || !Number.isFinite(days)) return 'pending';
  if (days < 0) return 'ended';
  if (days <= 3) return 'critical';
  if (days <= 7) return 'urgent';
  if (days <= 30) return 'soon';
  return 'normal';
}

export function milestoneCountdown(milestone, today = currentLocalDate()) {
  if (milestone?.status) {
    return { ...milestone, state: 'confirmed', text: milestone.status, days: null };
  }
  if (milestone?.window) {
    return {
      ...milestone,
      state: milestone.estimated ? 'estimated' : 'window',
      text: milestone.estimated ? '预计赛期' : '官方赛期',
      days: null,
    };
  }
  if (!milestone?.date) {
    return { ...milestone, state: 'pending', text: milestone?.pending || '待公布', days: null };
  }
  const days = daysUntil(milestone.date, today);
  const endDays = milestone.endDate ? daysUntil(milestone.endDate, today) : days;
  if (milestone.endDate && days <= 0 && endDays >= 0) {
    return { ...milestone, state: 'ongoing', text: `进行中 · 至 ${milestone.endDate.slice(5).replace('-', '.')} · 还有 ${endDays} 天`, days: endDays };
  }
  if (endDays < 0) return { ...milestone, state: 'ended', text: '已结束', days: endDays };
  if (days === 0) return { ...milestone, state: 'critical', text: '就是今天', days };
  return { ...milestone, state: urgencyForDays(days), text: `还有 ${days} 天`, days };
}

export function eventCountdowns(today = currentLocalDate(), events = KEY_DATE_EVENTS) {
  return events.map((event) => ({
    ...event,
    milestones: event.milestones.map((milestone) => milestoneCountdown(milestone, today)),
  }));
}

export function suggestedDate(today = new Date().toISOString().slice(0, 10)) {
  if (!isDate(today)) return PLAN_START;
  if (today < PLAN_START) return PLAN_START;
  if (today > PLAN_END) return today;
  return today;
}

export function makeCustomTask(date, sequence = Date.now()) {
  return taskBase(`${date}-custom-${sequence}`, 'other', '20:00', '新任务', 30);
}

export function rescheduleCmc(state, startLesson) {
  const nextStart = Math.round(clampNumber(startLesson, 1, 124)) || 6;
  const savedLessons = new Map(allTasks(state)
    .filter(({ task }) => task.kind === 'cmc' && task.cmc?.lessons)
    .flatMap(({ task }) => task.cmc.lessons)
    .map((lesson) => [lesson.number, lesson]));
  const rebuilt = buildCmcTasks(nextStart);

  for (const day of Object.values(state.days || {})) {
    day.tasks = (day.tasks || []).filter((task) => !(
      !task.planExcluded && ((task.kind === 'cmc' && task.cmc?.lessons) || task.id.includes('-cmc-chapter-'))
    ));
  }
  for (const { date, task } of rebuilt) {
    if (!state.days[date]) state.days[date] = { tasks: [] };
    if (task.cmc?.lessons) {
      task.cmc.lessons = task.cmc.lessons.map((lesson) => {
        const saved = savedLessons.get(lesson.number) || {};
        return {
          ...lesson,
          watched: Boolean(saved.watched),
          reproduced: Boolean(saved.reproduced),
          conditionsWritten: Boolean(saved.conditionsWritten),
          recall: saved.recall || '',
          grade: saved.grade || '',
          actualMinutes: Number(saved.actualMinutes) || 0,
        };
      });
    }
    state.days[date].tasks.push(task);
  }
  state.preferences.cmcCurrentLesson = nextStart;
  return state;
}
