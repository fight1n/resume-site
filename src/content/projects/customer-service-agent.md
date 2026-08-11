---
title: 智能客服 Agent
---


## 背景

客服场景里人工被大量的、重复的问题长期占用。用一个 Agent 承接这些重复性高的询问，如退款进度、订单状态、优惠券用法，只有复杂问题才转人工，从而降低平均响应时长、提升满意度。

## 核心能力

- **多轮对话**：槽位填充 + 反问机制，能顺着「我要退款 → 订单号？→ 商品损坏」逐步补全信息。
- **三级路由**：意图识别 → 技能分发 → 工具调用，分层解耦，便于扩展新业务。
- **RAG + Function Call**：先用检索补全知识，再按需调用业务接口（查订单、算退款）。
- **熔断重试**：模型/接口异常时自动重试与降级，保证服务可用。
- **反问降级**：LLM 不可用时自动降级为模板反问。

## 技术亮点

- **模型抽象层**：DeepSeek 为主、GLM 做故障切换，切换模型不改业务代码。
- **Prompt 版本管理**：提示词以 YAML 文件 + 命名版本（`name_vN.yaml`）管理，可回滚、可 A/B。
- **可观测**：提供 `/health` 暴露熔断器状态，`/session/reset` 重置会话，便于联调。

## 怎么跑

```bash
pip install -r requirements.txt
export DEEPSEEK_API_KEY=your_key_here
python -m uvicorn src.app:app --host 0.0.0.0 --port 8000
```

接口示例：

```bash
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "我要退款", "session_id": "user001"}'
```

> 完整设计说明见仓库 README。
