import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里扩展Vue应用，注册全局组件等
  }
}
