---
title: AI 前沿动态
description: 探索人工智能领域的最新资讯与发展趋势。
---
# AI 前沿动态

分享前沿人工智能信息，紧跟通用人工智能的发展浪潮。

<script setup>
import { data } from '../../posts.data.mts'
import { computed } from 'vue'

const posts = computed(() => data.filter(p => p.url.includes('/ai/news/') && !p.url.endsWith('index.html')))
</script>

<ArticleList :posts="posts" />
