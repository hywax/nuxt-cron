import { CronJob } from 'cron'
import type { CronJobs, CronOptions, CronTime } from '../types'

const cronTimeHumanFormat: Record<CronTime, string> = {
  everySecond: '* * * * * *',
  everyMinute: '* * * * *',
  everyTwoMinutes: '*/2 * * * *',
  everyThreeMinutes: '*/3 * * * *',
  everyFourMinutes: '*/4 * * * *',
  everyFiveMinutes: '*/5 * * * *',
  everyTenMinutes: '*/10 * * * *',
  everyFifteenMinutes: '*/15 * * * *',
  everyThirtyMinutes: '*/30 * * * *',
  hourly: '0 * * * *',
  everyOddHour: '0 */2 * * *',
  everyTwoHours: '0 */2 * * *',
  everyThreeHours: '0 */3 * * *',
  everyFourHours: '0 */4 * * *',
  everySixHours: '0 */6 * * *',
  daily: '0 0 * * *',
  weekly: '0 0 * * 0',
  quarterly: '0 0 1 */3 *',
  yearly: '0 0 1 1 *'
}

function prepareCronTime(time: CronTime): string {
  if (Object.hasOwn(cronTimeHumanFormat, time)) {
    return cronTimeHumanFormat[time]
  }

  return time
}

export function createCronHandler(jobs: CronJobs, options?: CronOptions) {
  Object.keys(jobs).forEach((fn) => {
    options = {
      ...options,
      ...jobs[fn].options
    }

    CronJob.from({
      cronTime: prepareCronTime(jobs[fn].time),
      onTick: jobs[fn].callback,
      start: true,
      timeZone: options?.timeZone,
      runOnInit: options?.runOnInit
    })
  })
}
