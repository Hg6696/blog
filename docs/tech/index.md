---
title: 技术开发心得
description: 分享前端工程化、架构设计以及 AI 辅助编程的技术经验。
---
# 技术开发心得

分享前端工程化、架构设计以及 AI 辅助编程的技术经验。

<script setup>
import { data } from '../posts.data.mts'
import { computed } from 'vue'

const posts = computed(() => data.filter(p => p.url.includes('/tech/') && !p.url.endsWith('index.html')))
</script>

<ArticleList :posts="posts" />
