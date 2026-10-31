# TASK_STATE

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
