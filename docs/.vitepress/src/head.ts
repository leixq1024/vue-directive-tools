import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      href: "/logo.svg"
    }
  ],
  [
    "meta",
    {
      name: "keywords",
      content: "vue, v-directives-tools"
    }
  ]
];
