import { defineConfig } from 'vitepress'
import { getVersion } from './utils'

export default defineConfig({
  title: 'Nuxt Cron',
  description: 'A Nuxt module for intuitive, fast connection of cron jobs in your app.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },

    logo: {
      src: '/logotype.svg',
      innerWidth: 50,
      height: 50,
    },

    editLink: {
      pattern: 'https://github.com/hywax/nuxt-cron/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hywax/nuxt-cron' },
    ],

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Playground', link: '/playground' },
      { text: 'Examples', link: '/examples/base' },
      {
        text: getVersion(),
        items: [
          { text: 'Changelog', link: '/other/changelog' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        base: '/guide',
        items: [
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Configuration', link: '/configuration' },
        ],
      },
      {
        text: 'API',
        base: '/api',
        items: [
          { text: 'Cron Handler', link: '/cron-handler' },
          { text: 'Presets', link: '/presets' },
        ],
      },
      {
        text: 'Examples',
        base: '/examples',
        items: [
          { text: 'Base', link: '/base' },
          { text: 'Run on init', link: '/with-params' },
          { text: 'Custom time', link: '/custom-time' },
          { text: 'Async', link: '/async' },
        ],
      },
      {
        text: 'Community',
        base: '/community',
        collapsed: true,
        items: [
          { text: 'Contributing', link: '/contributing' },
          { text: 'Code of Conduct', link: '/code-of-conduct' },
        ],
      },
      {
        text: 'Other',
        base: '/other',
        collapsed: true,
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'License', link: '/license' },
        ],
      },
    ],
  },

  ignoreDeadLinks: [
    (url) => {
      return !url.toLowerCase().includes('.github')
    },
  ],
})
