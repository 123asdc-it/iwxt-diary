# iwxt 日记本 · GitHub Pages 版

这是一个保留 Romanticism 2.2 视觉风格的静态日记站：公网只展示生成后的
HTML、CSS、JavaScript 和图片，写作、草稿及 GitHub 凭据只留在本机。

现有 Sites 网站和 Typecho 备份不会被此项目覆盖。

## 开始写日记

最方便的方式是双击项目中的 `打开日记写作.command`。第一次启动会安装少量
Node.js 依赖，随后自动打开：

- 本地写作间：`http://127.0.0.1:4173/writer/`
- 公网效果预览：`http://127.0.0.1:4173/`

也可以在终端执行：

```bash
npm install
npm run write
```

写作页面提供新建、编辑、保存草稿、重新生成预览、保存并发布以及移到回收
目录。草稿保存在本机的 `content/drafts/`，这个目录被 Git 忽略，因此既不会
进入 `dist/` 的公开网站，也不会出现在公开 GitHub 仓库中。

文章封面既可以从 Romanticism 自带图片中选择，也可以像旧 Typecho 主题一样
粘贴图片 URL。保存时会验证并下载 PNG、JPEG、WebP、GIF 或 AVIF 图片（最大
8 MB）：草稿图片只保存在本机，点击“保存并发布”后才会复制到公开资源目录。

“移到回收站”不会真正删除文件，而是移到本机的 `content/trash/`，该目录也
不会上传。需要恢复已发布文章时，把对应 `.md` 文件移回 `content/posts/`；
恢复草稿时移回 `content/drafts/`。

## 本地保存与发布

- `保存草稿`：保存 Markdown，并重新生成本地预览；草稿不公开。
- `保存并发布`：把状态改为已发布，构建网站，并在 GitHub 仓库连接完成后
  自动提交和推送。
- GitHub 未连接或登录失效时，文章仍会安全地保存在本机，页面会明确提示
  “尚未推送”，不会丢稿。

浏览器中的写作页面不保存 GitHub token。推送使用 macOS 上 Git/GitHub CLI
自己的凭据。写作服务只绑定 `127.0.0.1`，其他电脑无法从局域网访问。

草稿和回收站只保存在这台电脑，请把整个项目纳入 Time Machine 或其他本地
备份；公开 GitHub 仓库只备份已经发布的日记。

## 首次连接 GitHub Pages

当前 GitHub CLI 的旧凭据已经失效。重新登录后，在本目录执行：

```bash
gh auth login -h github.com -w
gh auth setup-git
gh repo create iwxt-diary --public --source=. --remote=origin --push
```

然后进入 GitHub 仓库的 **Settings → Pages**，将 Source 设为 **GitHub
Actions**。以后在写作页面点击“保存并发布”，工作流会自动生成并发布网站。

默认地址为：

```text
https://你的GitHub用户名.github.io/iwxt-diary/
```

## 内容格式

每篇日记是一个带 YAML 头信息的 Markdown 文件：

```markdown
---
title: "标题"
date: "2026-09-02"
status: "published"
tags:
  - "日常"
summary: "摘要"
cover: "romanticism/covers/1.webp"
createdAt: "2026-09-02T08:00:00.000Z"
updatedAt: "2026-09-02T08:00:00.000Z"
---

正文写在这里。
```

从 URL 导入并发布的图片会使用 `uploads/covers/...` 路径；原始 URL 不会写入
文章文件，也不需要在浏览器中保存任何图片站账号。

可在 `site.config.json` 修改站名、副标题和作者名。

## 验证命令

```bash
npm run check
npm test
npm run build
```

主题素材来自 Romanticism 2.2，原许可文件保留在
`public/romanticism/LICENSE.txt`。
