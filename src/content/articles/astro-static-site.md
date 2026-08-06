---
title: 用 Astro 搭一个「内容优先」的个人站
summary: 为什么求职站、博客、文档站都适合用 Astro——Markdown 即内容，构建出纯静态、加载快、易部署的站点。
date: 2026-06-15
tags: ["前端", "Astro", "静态站点"]
featured: true
---

做个人求职网站时，我想要的很简单：文章和项目用 Markdown 写，发布后是一个加载飞快的纯静态站点，最好能一键部署到 GitHub Pages。

Astro 恰好满足这三点。

## 内容即 Markdown

文章放在 `src/content/articles/`，每篇是一个 `.md` 文件，元信息写在 frontmatter：

```md
---
title: 标题
date: 2026-06-15
tags: ["前端"]
---

正文用标准 Markdown 书写……
```

新增一篇文章 = 新建一个文件，零代码。

## 默认零 JS

Astro 默认把页面渲染成 HTML，不往浏览器塞运行时。只有你显式写 `<script>` 的地方才会打包 JS——比如本站顶部的移动端折叠菜单。

## 部署到 GitHub Pages

配合官方 Actions，推送 `main` 分支即可自动构建并发布。对本站而言，改一下 `astro.config.mjs` 里的 `site` 与 `base`，剩下的交给 CI。

> 结论：内容优先的站点，Astro 是目前最省心的选择之一。
