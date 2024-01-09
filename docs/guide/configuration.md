# Configuration

Configure Nuxt Cron with the `cron` property.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  cron: {
    runOnInit: true,
    timeZone: 'Africa/Abidjan',
    jobsDir: 'cron'
  }
})
```

| **Key**     | **Type**  | **Default** | **Description**                                                                                                                                             |
|-------------|-----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `runOnInit` | `boolean` | false       | Instantly triggers the `callback` function post initialization.                                                                                             |
| `timeZone`  | `string`  | local time  | Sets the execution time zone. Check valid formats in the [Luxon documentation](https://github.com/moment/luxon/blob/master/docs/zones.md#specifying-a-zone) |
| `jobsDir`   | `string`  | cron        | The jobs directory located in `server` for auto-import                                                                                                      |
