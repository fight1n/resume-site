---
title: 实时数据可视化看板
summary: 面向运营团队的 Web 看板，把千万级流水实时聚合成可交互图表，首屏可交互时间 < 1.2s。
date: 2026-04-10
role: 前端负责人
tech: ["TypeScript", "React", "ECharts", "WebSocket", "Web Worker"]
links:
  demo: "https://example.com/demo"
  repo: "https://github.com/your-name/data-viz-dashboard"
featured: true
---

一个把实时业务数据变成「一眼看懂」的看板。

## 背景

运营同学每天要在多个后台之间来回切换，才能拼出全局视图。我们希望把核心指标收敛到一个页面。

## 我做了什么

- 用 **WebSocket + Web Worker** 把实时计算挪出主线程，保证滚动与交互始终 60fps。
- 图表用 **ECharts** 按需注册，首屏 JS 体积下降约 40%。
- 设计了可配置的图表卡片布局，运营可以拖拽组合自己的视图。

## 结果

- 首屏可交互时间从 2.8s 降到 **1.2s** 以内。
- 成为团队每日晨会的默认投屏。
