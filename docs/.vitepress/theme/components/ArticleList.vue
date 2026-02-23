<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="article-list">
    <a 
      v-for="post in posts" 
      :key="post.url" 
      :href="post.url" 
      class="article-card"
    >
      <div class="card-image-wrapper">
        <img :src="post.cover" :alt="post.title" class="card-image" />
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ post.title }}</h3>
        <p class="card-desc">{{ post.description }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.article-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none !important;
  color: var(--vp-c-text-1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(100, 108, 255, 0.15);
  border-color: var(--vp-c-brand-1);
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--vp-c-default-soft);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.article-card:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  transition: color 0.3s ease;
}

.article-card:hover .card-title {
  color: var(--vp-c-brand-1);
}

.card-desc {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>