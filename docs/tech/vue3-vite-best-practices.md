---
title: Vue 3 与 Vite 的最佳实践
description: 总结在现代前端开发中，使用Vue 3 Composition API与Vite构建的高效开发方式。
cover: https://picsum.photos/seed/vue/600/400
date: 2025-03-15
---

在现代前端开发中，Vue 3 的 Composition API 和 Vite 的极速构建已经成为了天作之合。

## 1. script setup 语法糖
通过 `<script setup>`，你可以用更少的样板代码编写组件。响应式变量和函数无需 `return` 即可在模板中使用。

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <button @click="increment">点击了 {{ count }} 次</button>
</template>
```

## 2. 状态管理 Pinia
放弃 Vuex，拥抱 Pinia。Pinia 提供了更直观的 API、完美的 TypeScript 支持以及更加轻量级的体积。

## 3. Vite 配置优化
- 使用 `vite-plugin-components` 实现组件按需自动引入。
- 提取第三方依赖到单独的 vendor chunk，优化首屏加载。