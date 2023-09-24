import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
  sitemap: {
    hostname: "https://vue3-lite-table.vercel.app/",
  },
  markdown: {
    theme: {
      dark: "dracula-soft",
      light: "vitesse-light",
    },
    attrs: {
      leftDelimiter: "%{",
      rightDelimiter: "}%",
    },
  },
  ssr: {
    noExternal: ["TableLite"],
  },
  themeConfig: {
    logo: "/assets/logo.svg",
    search: {
      provider: "local",
    },
    // search: {
    //   provider: "local",
    //   placeholder: "Search...",
    //   noResults: "No results found.",
    // },
  },
});
