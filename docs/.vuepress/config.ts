import { defineUserConfig } from "vuepress";
import theme from "./theme";
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
  lang: "zh-CN",
  title: "ADSB搭建导引",
  description: "a manual for adsb amateur",
  
  base: "/",
  
  theme,
  plugins: [
    
    searchPlugin({
      // 配置项
    }),
  ],
});
