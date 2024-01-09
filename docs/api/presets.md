# Presets

## Overview

This is a quick reference to cron syntax and also shows the options supported by node-cron.

```
┌───────────── minute (0–59)
│ ┌───────────── hour (0–23)
│ │ ┌───────────── day of the month (1–31)
│ │ │ ┌───────────── month (1–12)
│ │ │ │ ┌───────────── day of the week (0–6) (Sunday to Saturday;
│ │ │ │ │                                   7 is also Sunday on some systems)
│ │ │ │ │
│ │ │ │ │
* * * * *
```

## List

Set of ready-made presets for using cron

| **Key**               | **Code**       |
|-----------------------|----------------|
| `everySecond`         | `* * * * * * ` |
| `everyMinute`         | `* * * * *   ` |
| `everyTwoMinutes`     | `*/2 * * * * ` |
| `everyThreeMinutes`   | `*/3 * * * * ` |
| `everyFourMinutes`    | `*/4 * * * * ` |
| `everyFiveMinutes`    | `*/5 * * * * ` |
| `everyTenMinutes`     | `*/10 * * * *` |
| `everyFifteenMinutes` | `*/15 * * * *` |
| `everyThirtyMinutes`  | `*/30 * * * *` |
| `hourly`              | `0 * * * *   ` |
| `everyOddHour`        | `0 */2 * * * ` |
| `everyTwoHours`       | `0 */2 * * * ` |
| `everyThreeHours`     | `0 */3 * * * ` |
| `everyFourHours`      | `0 */4 * * * ` |
| `everySixHours`       | `0 */6 * * * ` |
| `daily`               | `0 0 * * *   ` |
| `weekly`              | `0 0 * * 0  `  |
| `quarterly`           | `0 0 1 */3 * ` |
| `yearly`              | `0 0 1 1 *   ` |
