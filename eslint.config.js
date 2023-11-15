import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({}, ...compat.config({
  rules: {
    'curly': 'off',
    'no-console': 'off',
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
}))
