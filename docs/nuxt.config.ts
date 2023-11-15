export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/icon.svg',
        },
      ],
    },
  },
})
