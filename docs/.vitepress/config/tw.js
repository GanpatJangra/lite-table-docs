import { defineConfig } from "vitepress";

export const twConfig = defineConfig({
  title: "Vue 3 表格 Lite",
  description: "輕量、高速",

  themeConfig: {
    logo: "/assets/logo.svg",
    nav: [
      { text: "首頁", link: "/tw/getting-started" },
      { text: "範例", link: "/tw/advance-examples" },
    ],

    sidebar: [
      // 側邊欄帶下拉
      {
        collapsed: false,
        text: "快速入門",
        items: [{ text: "開始", link: "/tw/getting-started" }],
      },
      {
        collapsed: false,
        text: "使用方式",
        items: [
          { text: "預設模式", link: "/tw/usage/default-mode" },
          { text: "V-Slot 模式", link: "/tw/usage/v-slot-mode" },
          { text: "靜態模式", link: "/tw/usage/static-mode" },
        ],
      },
      {
        collapsed: false,
        text: "API 參考",
        items: [
          { text: "屬性", link: "/tw/api-reference/props" },
          { text: "事件", link: "/tw/api-reference/events" },
          { text: "插槽", link: "/tw/api-reference/slots" },
        ],
      },
      {
        collapsed: false,
        text: "範例",
        items: [
          { text: "簡單範例", link: "/tw/simple-examples" },
          { text: "高級範例", link: "/tw/advance-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/linmasahiro/vue3-table-lite",
      },
    ],
  },
});
