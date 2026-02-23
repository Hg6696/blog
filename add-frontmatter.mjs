import fs from 'fs'

const updates = {
  'docs/ai/news/what-is-agi.md': { title: '什么是通用人工智能(AGI)?', desc: '探讨AGI的定义、核心特征以及我们距离真正的AGI还有多远。', seed: 'agi' },
  'docs/ai/news/trends-2025.md': { title: '2025 AI 发展趋势预测', desc: '展望2025年人工智能领域的发展趋势，包括多模态、端侧AI和智能体。', seed: 'trend' },
  'docs/ai/models/llm-explained.md': { title: '大语言模型(LLM)的原理解密', desc: '深入解析Transformer架构与大语言模型的训练三步曲。', seed: 'llm' },
  'docs/ai/models/open-vs-closed.md': { title: '开源与闭源模型的终极对决', desc: '剖析闭源模型与开源模型各自的优势与未来混合架构的可能性。', seed: 'vs' },
  'docs/tech/vue3-vite-best-practices.md': { title: 'Vue 3 与 Vite 的最佳实践', desc: '总结在现代前端开发中，使用Vue 3 Composition API与Vite构建的高效开发方式。', seed: 'vue' },
  'docs/tech/ai-assisted-coding.md': { title: '如何利用AI辅助编程提高10倍效率', desc: '探讨如何将 Cursor、Copilot 等 AI 编程助手融入日常开发流。', seed: 'code' },
  'docs/tech/frontend-engineering.md': { title: '前端工程化基石', desc: '探讨现代前端工程化中的规范化、自动化构建与性能监控体系。', seed: 'frontend' }
}

for (const [file, meta] of Object.entries(updates)) {
  let content = fs.readFileSync(file, 'utf8')
  if (!content.startsWith('---')) {
    const fm = `---
title: ${meta.title}
description: ${meta.desc}
cover: https://picsum.photos/seed/${meta.seed}/600/400
---

`
    // 去掉原来开头的 h1 标签，因为 VitePress 会自动用 frontmatter 的 title 渲染
    content = content.replace(/^# .*\n+/, '')
    fs.writeFileSync(file, fm + content)
  }
}

console.log('Frontmatter added to all articles.')
