import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler(
  'everyMinute',
  () => {
    console.log('[Nuxt Cron] Run every minute and on init 🚀')
  },
  { runOnInit: true }
)
