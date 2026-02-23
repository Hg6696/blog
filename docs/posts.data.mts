import { createContentLoader } from 'vitepress'

export default createContentLoader('**/*.md', {
  transform(raw) {
    return raw
      // 过滤掉首页以及各个栏目的分类索引页，只保留真实的文章
      .filter(page => page.url !== '/' && page.url !== '/about.html' && !page.url.endsWith('/index.html') && page.frontmatter.title)
      .map(page => ({
        title: page.frontmatter.title,
        url: page.url,
        cover: page.frontmatter.cover || 'https://picsum.photos/600/400',
        description: page.frontmatter.description || '',
        date: page.frontmatter.date || '2024-01-01',
        category: page.url.split('/')[1] + (page.url.split('/')[2] && page.url.split('/')[2] !== 'index.html' ? '/' + page.url.split('/')[2] : '')
      }))
      // 按日期降序排序（最新在前）
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})