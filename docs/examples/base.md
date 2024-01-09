# Base

Run a task hourly.

```ts
// server/cron/job.ts
import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler('hourly', () => {
  // do action
})
```

A list of all prepared times can be found in [Presets](../api/presets)
