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
        category: page.url.split('/')[1] + (page.url.split('/')[2] && page.url.split('/')[2] !== 'index.html' ? '/' + page.url.split('/')[2] : '')
      }))
      // 这里可以做排序，我们暂时按照路径排序，或未来扩展时间排序
      .sort((a, b) => a.url.localeCompare(b.url))
  }
})