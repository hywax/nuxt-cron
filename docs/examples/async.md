# Async

`defineCronHandler` supports async functions.

```ts
// server/cron/job.ts
import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler('hourly', async () => {
  const data = $fetch('https://jsonplaceholder.typicode.com/todos/1')

  console.log(data)
})
```

A list of all prepared times can be found in [Presets](../api/presets)
