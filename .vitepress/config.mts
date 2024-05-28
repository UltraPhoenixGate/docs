import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UltraPhoenix",
  description: "UltraPhoenix - 下一代工业网关系统",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs' },
      { 
        text: "API 参考",
        link: "/api-reference"
      }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/docs/getting-started.md' },
          { text: 'Api 参考', link: '/api-reference/index.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
