# Run on init

Run a task every minute. As well as automatic startup when the application is initialized.

```ts
// server/cron/job.ts
import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler('everyMinute', () => {
  // do action
}, { runOnInit: true })
```

A list of all prepared times can be found in [Presets](../api/presets)
