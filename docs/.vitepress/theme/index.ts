import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { yandexMetrika } from '@hywax/vitepress-yandex-metrika'
import Sandbox from '../components/sandbox.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Sandbox', Sandbox)

    yandexMetrika(ctx, {
      enabled: import.meta.env.MODE === 'production',
      counter: {
        id: 96079193,
        initParams: {
          trustedDomains: ['nuxt-cron.hywax.space'],
        },
      },
    })
  },
} satisfies Theme
