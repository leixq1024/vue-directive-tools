interface DocsConfig {
  [index: string]: unknown;
  appearance: "dark";
}

export const docsConfig: DocsConfig = {
  title: "v-directive-tools",
  description: "一个持续更新的vue指令库",
  lang: "zh-CN",
  lastUpdated: true,
  appearance: "dark",
  outline: [2, 3],
  ignoreDeadLinks: true
};
