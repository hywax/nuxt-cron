# Custom time

At 04:00 on every day-of-month from 8 through 14.

```ts
// server/cron/job.ts
import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler(() => '0 4 8-14 * *', () => {
  // do action
})
```
