import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "http://adsb.dextercai.com",

  author: {
    name: "dextercai",
    url: "https://blog.dextercai.com",
  },

  iconAssets: "fontawesome",

  logo: "/logo.svg",

  repo: "dextercai/adsb-book",

  docsDir: "docs",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: '<a href="http://beian.miit.gov.cn" target="_blank">沪ICP备19007420号-3</a> | Powered by DexterCai',
  copyright: "在复现本站所述技术方法前，请确保您已获得当地监管部门的许可。",
  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    
    blog: {
      autoExcerpt: true,
    },
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "dextercai/adsb-book",
      repoId: "R_kgDOHzXrvQ",
      category: "General",
      categoryId: "DIC_kwDOHzXrvc4CQw2s",
      mapping:"og:title"
    },

    mdEnhance: {
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
