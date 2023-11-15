import { CronJob as Cron } from 'cron'
import type { CronJob, CronJobs, CronOptions, CronPresets, CronTick, CronTime } from './types'

const cronTimeHumanFormat: Record<CronPresets, string> = {
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
  yearly: '0 0 1 1 *',
}

export function createCronHandler(jobs: CronJobs, options?: CronOptions): Cron[] {
  const cronStack: Cron[] = []

  Object.keys(jobs).forEach((fn) => {
    options = {
      ...options,
      ...jobs[fn].options,
    }

    const cron: Cron = Cron.from({
      cronTime: jobs[fn].time,
      onTick: jobs[fn].callback,
      start: true,
      timeZone: options?.timeZone,
      runOnInit: options?.runOnInit,
    })

    cronStack.push(cron)
  })

  return cronStack
}

export function defineCronHandler(time: CronPresets | CronTime, callback: CronTick, options?: CronOptions): CronJob {
  let timeValue = ''

  if (typeof time === 'function') {
    timeValue = time()
  } else {
    timeValue = cronTimeHumanFormat[time]
  }

  return {
    time: timeValue,
    callback,
    options,
  }
}
