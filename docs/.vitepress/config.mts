import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HgBlog",
  description: "探索AI前沿信息、解构AI大模型、分享前沿技术开发心得",
  lastUpdated: true,
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', href: '/hgblog.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 前沿动态', link: '/ai/news/', activeMatch: '/ai/news/' },
      { text: 'AI 大模型', link: '/ai/models/', activeMatch: '/ai/models/' },
      { text: '技术开发心得', link: '/tech/', activeMatch: '/tech/' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: {
      '/ai/': [
        {
          text: 'AI 前沿动态',
          collapsed: false,
          items: [
            { text: '什么是通用人工智能(AGI)?', link: '/ai/news/what-is-agi' },
            { text: '2025 AI 发展趋势预测', link: '/ai/news/trends-2025' }
          ]
        },
        {
          text: 'AI 大模型解析',
          collapsed: false,
          items: [
            { text: '大语言模型(LLM)的原理解密', link: '/ai/models/llm-explained' },
            { text: '开源与闭源模型的终极对决', link: '/ai/models/open-vs-closed' }
          ]
        }
      ],
      '/tech/': [
        {
          text: '技术开发心得',
          items: [
            { text: 'Vue 3 与 Vite 的最佳实践', link: '/tech/vue3-vite-best-practices' },
            { text: '前端工程化基石', link: '/tech/frontend-engineering' },
            { text: '如何利用AI辅助编程提高10倍效率', link: '/tech/ai-assisted-coding' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'twitter', link: 'https://twitter.com' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present HgBlog'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})