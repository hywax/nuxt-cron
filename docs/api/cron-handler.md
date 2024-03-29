# Cron Handler

## Usage

This function creates a new cron job. Example usage:

```ts
// server/cron/example.ts
import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler('everySecond', () => {
  // do action
})
```

## Params

| **Key**    | **Type**                  | **Require** | **Description**                                                               |
|------------|---------------------------|-------------|-------------------------------------------------------------------------------|
| `time`     | `CronPresets \| CronTime` | true        | The time to fire off your job. [Presets](./presets) or custom cron expression |
| `callback` | `() => void`              | true        | Function to execute at the specified time                                     |
| `options`  | `CronOptions`             | false       | Options for Cron                                                              |

## Type

```ts
function defineCronHandler(
  time: CronPresets | CronTime,
  callback: CronTick,
  options?: CronOptions
): CronJob

export type CronTime =
  | 'everySecond'
  | 'everyMinute'
  | 'everyTwoMinutes'
  | 'everyThreeMinutes'
  | 'everyFourMinutes'
  | 'everyFiveMinutes'
  | 'everyTenMinutes'
  | 'everyFifteenMinutes'
  | 'everyThirtyMinutes'
  | 'hourly'
  | 'everyOddHour'
  | 'everyTwoHours'
  | 'everyThreeHours'
  | 'everyFourHours'
  | 'everySixHours'
  | 'daily'
  | 'weekly'
  | 'quarterly'
  | 'yearly'

export type CronTime = () => string

export type CronTick = () => void | Promise<void>

export interface CronOptions {
  runOnInit?: boolean
  timeZone?: string | null
}

export interface CronJob {
  time: CronTime
  callback: CronTick
  options?: CronOptions
}
```
