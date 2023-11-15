export default defineAppConfig({
  docus: {
    title: 'Nuxt Cron',
    description: 'A Nuxt module for cron jobs in your app.',
    image: '/cover.jpg',
    socials: {
      twitter: 'hywax_',
      github: 'hywax/nuxt-cron',
    },
    github: {
      dir: 'docs/content',
      branch: 'main',
      repo: 'nuxt-cron',
      owner: 'hywax',
      edit: true,
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      credits: {
        icon: 'IconHywax',
        text: 'Powered by Hywax',
        href: 'https://hywax.space',
      },
    },
  },
})
