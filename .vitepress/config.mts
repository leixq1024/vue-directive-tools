import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "vue自定义指令合集",
  description: "",
  themeConfig: {
    nav: [],
    logo: 'https://vitepress.dev/vitepress-logo-mini.svg',
    sidebar: [
      {
        text: '指令列表',
        items: [
          { text: '列表滚动', link: '/docs/列表滚动.md' },
          { text: '横向拖拽滚动', link: '/docs/横向拖拽滚动' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
