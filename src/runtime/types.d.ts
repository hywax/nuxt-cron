export type CronTime =
  | string
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

export type CronTick = () => void

export interface CronOptions {
  runOnInit?: boolean
  timeZone?: string | null
}

export interface CronJob {
  time: CronTime
  callback: CronTick
  options?: CronOptions
}

export type CronJobs = Record<string, CronJob>
