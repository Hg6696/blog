import DefaultTheme from 'vitepress/theme'
import ArticleList from './components/ArticleList.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('ArticleList', ArticleList)
  }
}
