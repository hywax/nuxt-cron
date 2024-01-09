# Getting started

A Nuxt module for simplifying the use of Mongoose in your project.

## Installation

1. Install `nuxt-cron` to your dependencies.

::: code-group

```bash [pnpm]
pnpm add nuxt-cron -D
```

```bash [npm]
npm install nuxt-cron -D
```

```bash [yarn]
yarn add nuxt-cron -D
```

:::

2. Add `nuxt-cron` to the `modules` section of your `config` file.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-cron']
})
```

That's it! You can now use Cron in your Nuxt app ✨

## Options

You can configure the module by adding a `nuxt-cron` section to your `nuxt.config` file.
read more about [cron options](./configuration).

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  cron: {
    // Options
  }
})
```
