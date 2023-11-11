import { fileURLToPath } from 'url'
import { defineNuxtModule, createResolver, addTemplate, addServerPlugin } from '@nuxt/kit'
import fg from 'fast-glob'
import type { CronJob, CronOptions, CronTick, CronTime } from './types'

export interface ModuleOptions extends CronOptions {
  jobsDir: string
}

export function defineCronHandler(time: CronTime, callback: CronTick, options?: CronOptions): CronJob {
  return { time, callback, options }
}

async function scanHandlers(path: string): Promise<string[]> {
  const files: string[] = []

  const updatedFiles = await fg('**/*.{ts,js,mjs}', {
    cwd: path,
    absolute: true,
    onlyFiles: true
  })

  files.push(...new Set(updatedFiles))

  return files
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-cron',
    configKey: 'cron'
  },
  defaults: {
    jobsDir: 'cron'
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
          import { createCronHandler } from '${resolve(runtimeDir, 'server')}'
          ${files.map((file, index) => `import cronJob${index} from '${file.replace('.ts', '')}'`).join('\n')}

          export default defineNitroPlugin(() => {
            createCronHandler({
              ${files.map((_, index) => `cronJob${index}`).join(',\n')}
            }, ${JSON.stringify(options)})
          })
        `
      }
    })

    addServerPlugin(resolve(nuxt.options.buildDir, 'cron-handler.ts'))
  }
})
