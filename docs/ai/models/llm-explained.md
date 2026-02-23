---
title: 大语言模型(LLM)的原理解密
description: 深入解析Transformer架构与大语言模型的训练三步曲。
cover: https://picsum.photos/seed/llm/600/400
---

大语言模型（LLM, Large Language Model）是当前 AI 热潮的核心引擎。本文带你拆解其背后的黑盒。

## Transformer 架构

自 2017 年 Google 提出《Attention Is All You Need》以来，Transformer 已成为 NLP 的绝对霸主。

- **自注意力机制 (Self-Attention)**：让模型在处理每一个词时，都能“看”到上下文中的其他词，从而理解语境。
- **多头注意力 (Multi-Head Attention)**：允许模型同时关注句子的不同方面（如语法、情感、指代等）。

## 训练三步曲

1. **预训练 (Pre-training)**：使用海量互联网数据，让模型学会“预测下一个词”（Next Token Prediction）。
2. **监督微调 (SFT)**：使用高质量的问答对进行训练，让模型学会遵循指令。
3. **人类反馈强化学习 (RLHF)**：通过奖励模型（Reward Model）让 AI 的回答更符合人类价值观，避免有害内容输出。