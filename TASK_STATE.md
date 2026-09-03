# TASK_STATE

## Current goal

Build a separate, public GitHub Pages diary that preserves the recognizable
Romanticism 2.2 visual system while keeping all authoring local and storing
entries as Markdown files. The existing Sites deployment remains unchanged as
a rollback.

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
  typography, dark mode, responsive layout, and original attribution.
- Build output works both at `/` locally and under a GitHub project subpath.
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
- The user explicitly authorized Codex-only execution. The CCG Opus planner was
  unavailable because the configured Claude profile is not logged in; session
  `568e77c3-30d9-482a-a2dc-ac4240a1609a` returned no findings.

## Verification status

- `npm run check`: passed for generator, writer server, and both browser scripts.
- `npm test`: 7/7 tests passed, including local-only drafts and remote cover
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

## Remaining work

- No implementation work remains. The user can paste the preferred wallpaper
  site's direct image URL in the local writer and save it when ready.
