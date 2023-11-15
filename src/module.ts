import { fileURLToPath } from 'node:url'
import { addServerPlugin, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'
import fg from 'fast-glob'
import type { CronOptions } from './runtime/types'

export interface ModuleOptions extends CronOptions {
  jobsDir: string
}

async function scanHandlers(path: string): Promise<string[]> {
  const files: string[] = []

  const updatedFiles = await fg('**/*.{ts,js,mjs}', {
    cwd: path,
    absolute: true,
    onlyFiles: true,
  })

  files.push(...new Set(updatedFiles))

  return files
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-cron',
    configKey: 'cron',
  },
  defaults: {
    jobsDir: 'cron',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const files = await scanHandlers(resolve(nuxt.options.srcDir, `server/${options.jobsDir}`))
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.build.transpile.push(runtimeDir)

    addTemplate({
      filename: 'cron-handler.ts',
      write: true,
      getContents() {
        return `
          import { createCronHandler } from '${resolve('./runtime/server')}'
          ${files.map((file, index) => `import cronJob${index} from '${file.replace('.ts', '')}'`).join('\n')}

          export default defineNitroPlugin((nitro) => {
            // Disabling cron so it doesn't block the flow
            if (process.env.NODE_ENV === 'prerender') {
              return;
            }

            createCronHandler({
              ${files.map((_, index) => `cronJob${index}`).join(',\n')}
            }, ${JSON.stringify(options)})
          })
        `
      },
    })

    addTemplate({
      filename: 'types/nuxt-cron.d.ts',
      getContents: () =>
        [
          'declare module \'#nuxt/cron\' {',
          `  const defineCronHandler: typeof import('${resolve('./runtime/server')}').defineCronHandler`,
          '}',
        ].join('\n'),
    })

    nuxt.hook('nitro:config', (_config) => {
      _config.alias = _config.alias || {}
      _config.alias['#nuxt/cron'] = resolve('./runtime/server')

      if (_config.imports) {
        _config.imports.dirs = _config.imports.dirs || []
        _config.imports.dirs?.push(options.jobsDir)
      }
    })

    nuxt.hook('prepare:types', (options) => {
      options.references.push({ path: resolve(nuxt.options.buildDir, 'types/nuxt-cron.d.ts') })
    })

    nuxt.hooks.hook('nitro:init', (nitro) => {
      nitro.logger.info(`Nuxt Cron. Jobs: ${files.length}`)
    })

    addServerPlugin(resolve(nuxt.options.buildDir, 'cron-handler.ts'))
  },
})
