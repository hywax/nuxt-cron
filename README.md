[![nuxt-cron](https://raw.githubusercontent.com/hywax/nuxt-cron/main/docs/public/cover.jpg)](https://nuxt-cron.hywax.space)

# Nuxt Cron

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

A Nuxt module for cron jobs in your app.

- [📖 Documentation](https://nuxt-cron.hywax.space)
- [🏀 Playground](https://nuxt-cron.hywax.space/playground)
- [✨ Releases](https://github.com/hywax/nuxt-cron/releases)

## Features

- 👌&nbsp; 19 time presets
- 🕔️&nbsp; Time zone support
- 🪄️&nbsp; TypeScript support
- ✨&nbsp; Auto imports enabled
- ⚡&nbsp; Zero configuration to start
- 🤝&nbsp; Nuxt 3/4 support
- 📦&nbsp; Extendable by [Nuxt modules](https://nuxt.com/modules)

## Installation

```bash
# Using pnpm
pnpm add nuxt-cron -D

# Using yarn
yarn add nuxt-cron -D

# Using npm
npm install nuxt-cron -D
```

## Usage

### Setup

Add `nuxt-cron` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['nuxt-cron']
})
```

### Configuration

You can configure the module by adding a `nuxt-cron` section to your nuxt.config file.

```js
export default defineNuxtConfig({
  cron: {
    runOnInit: true,
    timeZone: 'Africa/Abidjan',
    jobsDir: 'cron'
  }
})
```

by default, `nuxt-cron` will auto-import your cron from the models directory from server directory. You can change this behavior by setting the `jobsDir` option.

## API

### defineCronHandler

This function creates a new cron job. Example usage:

```ts
// server/cron/job.ts
import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler('everySecond', () => {
  console.log('I run every seconds')
})
```

or use with params:

```ts
// server/cron/job.ts
import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler('everySecond', () => {
  console.log('I run every seconds')
}, { runOnInit: true })
```

More examples can be found [here](https://nuxt-cron.hywax.space/examples/base.html).

## Credits

A huge thank you to everyone who is helping to improve `nuxt-cron`. Thanks to you, the project can evolve!

### Contributors

To become a contributor, please follow our [contributing guide](https://nuxt-cron.hywax.space/community/contributing.html).

<img src="https://contrib.rocks/image?repo=hywax/nuxt-cron" alt="nuxt-cron" />

## License

This app is open-sourced software licensed under the [MIT license](https://github.com/hywax/nuxt-cron/blob/main/LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-cron/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-cron
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-cron.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-cron
[license-src]: https://img.shields.io/npm/l/nuxt-cron.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-cron
