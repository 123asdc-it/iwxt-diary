# TASK_STATE

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
2. Keep the default 2026-09-14 to 2026-09-20 schedule editable, then add the
   2026-09-21/22 vocabulary transition and the 2026-09-23 CET6 review phase.
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

Risks for this pass: local dates must not shift at UTC boundaries; an empty day
must not be labelled missed; event announcements can change after deployment;
GitHub cannot issue the custom-domain certificate until its DNS checks finish.

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
- Remaining: deploy the change and verify the two new cards plus responsive
  containment on the live HTTPS page.
