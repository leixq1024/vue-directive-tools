import { defineConfig } from "vitepress";

export default defineConfig({
  title: "vue-directive-tools",
  description: "持续收集vue指令",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指令列表", link: "/markdown-examples" }
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/leixq1024/vue-directive-tools" }]
  }
});
