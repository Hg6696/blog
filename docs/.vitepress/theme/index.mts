import DefaultTheme from "vitepress/theme";
import ArticleList from "./components/ArticleList.vue";
// 使用本地字体包，避免依赖 Google Fonts CDN（国内加载慢）
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component("ArticleList", ArticleList);
  },
};
