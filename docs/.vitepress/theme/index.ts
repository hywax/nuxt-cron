import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Sandbox from '../components/sandbox.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Sandbox', Sandbox)
  },
} satisfies Theme
