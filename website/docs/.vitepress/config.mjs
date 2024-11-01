import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Encore Tweaks",
  description: "Encore Tweaks is a free and open source performance Magisk module designed to boost device performance while playing games but keeping battery life on normal usage",

  sitemap: {
    hostname: 'https://encore.rem01gaming.dev'
  },
  
  head: [
    ['link', { rel: "icon", type: "image/png", href: "favicon.png", size: "64x64"}],
    ['link', { rel: "icon", type: "image/png", href: "android-crhome.png", size: "192x192"}],
    ['link', { rel: "apple-touch-icon", type: "image/png", href: "apple-touch-icon.png", size: "180x180"}],
    ['link', { rel: "canonical", href: "https://encore.rem01gaming.dev"}],
    ['meta', { name: "hostname", content: "encore.rem01gaming.dev"}],
    ['meta', { name: "expected-hostname", content: "encore.rem01gaming.dev"}],
    ['meta', { name: "author", content: "Rem01Gaming"}],
    ['meta', { name: "keywords", content: "Encore Tweaks, performance module, Magisk, Android, Module magisk, gaming performance, Rem01Gaming, open source" }],
    ['meta', { property: "og:type", content: "website"}],
    ['meta', { property: "og:title", content: "Encore Tweaks: Special performance module for your device"}],
    ['meta', { property: "og:locale", content: "en_US"}],
    ['meta', { property: "og:url", content: "https://encore.rem01gaming.dev"}],
    ['meta', { property: "og:image", content: "/ogp.png"}],
    ['meta', { property: "og:site_name", content: "Encore Tweaks"}],
    ['meta', { property: "og:description", content: "Encore Tweaks is a free and open source performance Magisk module designed to boost device performance while playing games but keeping battery life on normal usage"}],
    ['meta', { property: "twitter:card", content: "summary_large_image"}],
    ['meta', { property: "twitter:image", content: "/ogp.png"}],
    ['meta', { property: "twitter:title", content: "Encore Tweaks: Special performance module for your device"}],
    ['meta', { property: "twitter:description", content: "Encore Tweaks is a free and open source performance Magisk module designed to boost device performance while playing games but keeping battery life on normal usage"}]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/what-is-encore-tweaks' },
      {
        text: 'Support my projects',
        items: [
          { text: 'Saweria', link: 'https://saweria.co/Rem01Gaming' },
          { text: 'Buymeacoffee', link: 'https://www.buymeacoffee.com/Rem01Gaming' }
        ]
      },
      {
        text: 'Download',
        items: [
          { text: 'Changelog', link: '/download' },
          { text: 'Contribute', link: 'https://github.com/Rem01Gaming/encore' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'What is Encore Tweaks?', link: '/guide/what-is-encore-tweaks' },
          { text: 'Module WebUI and Configuration', link: '/guide/webui-and-configuration' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Download',
        items: [
          { text: 'Changelog', link: '/download' },
          { text: 'Contribute', link: 'https://github.com/Rem01Gaming/encore' }
        ]
      },
      {
        text: 'Support my project',
        items: [
          { text: 'Saweria', link: 'https://saweria.co/Rem01Gaming' },
          { text: 'Buymeacoffee', link: 'https://www.buymeacoffee.com/Rem01Gaming' }
        ]
      }
    ],
    
    footer: {
      message: 'Released under the GPL3 License.',
      copyright: 'Copyright © 2024-present Rem01Gaming'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rem01Gaming', ariaLabel: 'GitHub' },
      { icon: 'youtube', link: 'https://youtube.com/@rem01gaming', ariaLabel: 'Youtube Channel' }
    ]
  }
})
