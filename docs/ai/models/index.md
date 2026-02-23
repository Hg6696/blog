---
title: AI 大模型
description: 深入解析主流大语言模型的底层架构与实战对比。
---
# AI 大模型

深入解析主流大语言模型的底层架构与实战对比。

<script setup>
import { data } from '../../posts.data.mts'
import { computed } from 'vue'

const posts = computed(() => data.filter(p => p.url.includes('/ai/models/') && !p.url.endsWith('index.html')))
</script>

<ArticleList :posts="posts" />
