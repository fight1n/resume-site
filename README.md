# 个人求职网站（文章 + 项目展示）

基于 [Astro](https://astro.build) 的纯静态个人站，包含 **文章** 与 **项目** 两个核心板块。

## 目录结构

```
src/
├── content/
│   ├── config.ts        # 文章 / 项目 的内容集合 schema
│   ├── articles/        # 文章（Markdown）
│   └── projects/        # 项目（Markdown）
├── data/profile.ts      # 你的简历信息（姓名/头衔/联系方式/技能）
├── components/          # Header / Footer / 卡片 / 日期 等组件
├── layouts/             # 页面骨架与文章/项目详情排版
├── pages/               # 路由：首页 / 文章 / 项目 / 关于
└── styles/global.css    # 设计变量与全局样式
public/                  # 静态资源（favicon 等）
.github/workflows/       # GitHub Pages 自动部署
```

## 本地开发

```bash
npm install
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 添加文章

1. 在 `src/content/articles/` 新建一个 `.md` 文件。
2. 填写 frontmatter：

   ```md
   ---
   title: 文章标题
   summary: 一句话摘要，会显示在列表页
   date: 2026-07-01        
   tags: ["前端", "思考"]
   featured: false         # true 会优先出现在首页「精选项目/最新文章」
   draft: false            # true 则不发布
   ---

   正文用标准 Markdown 书写……
   ```

3. 保存后（dev 模式热更新）即可在 `/articles/` 看到。

## 添加项目

在 `src/content/projects/` 新建 `.md`，frontmatter 示例：

```md
---
title: 项目名
summary: 一句话介绍
date: 2026-04-10      
role: 前端负责人
tech: ["React", "TypeScript"]
links:
  demo: "https://..."   # 可选
  repo: "https://..."   # 可选
featured: true
---

项目正文……
```

## 修改个人信息

编辑 `src/data/profile.ts`：姓名、头衔、城市、邮箱、简介、技能、社交链接。

## 部署到 GitHub Pages

1. 修改 `astro.config.mjs`：
   - 把 `site` 改成你的地址（如 `https://<用户名>.github.io`）。
   - 若是**项目页**（仓库名不为 `<用户名>.github.io`），取消 `base` 注释并改成 `/<仓库名>/`。
2. 把代码推送到 `main` 分支（`.github/workflows/deploy.yml` 会自动构建并部署）。
3. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 等待 Actions 跑完，访问给出的 Pages 地址即可。

## 技术栈

- Astro 5（静态输出）
- 原生 CSS + CSS 变量（无 UI 框架依赖）
- 内容集合（Content Collections）驱动文章/项目
