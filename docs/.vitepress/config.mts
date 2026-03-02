import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";

// 共享侧边栏配置，避免重复维护
const sharedSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "AI 前沿动态",
    collapsed: false,
    items: [
      {
        text: "AI Agent：从对话到自主决策的范式革命",
        link: "/ai/news/ai-agent-revolution",
      },
      {
        text: "多模态 AI：跨越文字与感官的综合智能",
        link: "/ai/news/multimodal-ai",
      },
      { text: "2025 AI 发展趋势预测", link: "/ai/news/trends-2025" },
      { text: "什么是通用人工智能(AGI)?", link: "/ai/news/what-is-agi" },
    ],
  },
  {
    text: "AI 大模型解析",
    collapsed: false,
    items: [
      {
        text: "2026 前沿大模型全景：Claude 4 与 AI 军备竞赛",
        link: "/ai/models/frontier-models-2026",
      },
      { text: "开源与闭源模型的终极对决", link: "/ai/models/open-vs-closed" },
      { text: "大语言模型(LLM)的原理解密", link: "/ai/models/llm-explained" },
    ],
  },
  {
    text: "技术开发心得",
    items: [
      {
        text: "Vue 3 与 Vite 的最佳实践",
        link: "/tech/vue3-vite-best-practices",
      },
      { text: "前端工程化基石", link: "/tech/frontend-engineering" },
      {
        text: "如何利用AI辅助编程提高10倍效率",
        link: "/tech/ai-assisted-coding",
      },
    ],
  },
];

const SITE_URL = "https://hgblog.tech";
const SITE_OG_IMAGE = `${SITE_URL}/og-default.png`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HgBlog",
  description: "探索AI前沿信息、解构AI大模型、分享前沿技术开发心得",
  lastUpdated: true,
  cleanUrls: true,

  // 生成 sitemap.xml
  sitemap: {
    hostname: SITE_URL,
  },

  head: [
    ["link", { rel: "icon", href: "/hgblog.png" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    // 默认 Open Graph（文章页会被 transformPageData 覆盖）
    ["meta", { property: "og:site_name", content: "HgBlog" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image", content: SITE_OG_IMAGE }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: SITE_OG_IMAGE }],
  ],

  // 为每篇文章动态注入 SEO 元数据
  transformPageData(pageData) {
    const canonicalPath = pageData.relativePath
      .replace(/index\.md$/, "")
      .replace(/\.md$/, "");
    const canonicalUrl = `${SITE_URL}/${canonicalPath}`;
    const ogImage = pageData.frontmatter.cover ?? SITE_OG_IMAGE;
    const title = pageData.frontmatter.title
      ? `${pageData.frontmatter.title} | HgBlog`
      : "HgBlog";
    const description =
      pageData.frontmatter.description ??
      "探索AI前沿信息、解构AI大模型、分享前沿技术开发心得";

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      ["link", { rel: "canonical", href: canonicalUrl }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { property: "og:url", content: canonicalUrl }],
      ["meta", { property: "og:image", content: ogImage }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: description }],
    );
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",

    nav: [
      { text: "首页", link: "/" },
      { text: "AI 前沿动态", link: "/ai/news/", activeMatch: "/ai/news/" },
      { text: "AI 大模型", link: "/ai/models/", activeMatch: "/ai/models/" },
      { text: "技术开发心得", link: "/tech/", activeMatch: "/tech/" },
      { text: "关于我", link: "/about" },
    ],

    sidebar: {
      "/ai/": sharedSidebar,
      "/tech/": sharedSidebar,
    },

    socialLinks: [{ icon: "github", link: "https://github.com" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present HgBlog",
    },

    search: {
      provider: "local",
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
