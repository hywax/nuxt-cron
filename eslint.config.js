import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  ignores: [
    '.output',
    'dist',
    'node_modules',
  ],
  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
  rules: {
    'style/brace-style': ['error', '1tbs'],
    'style/arrow-parens': ['error', 'always'],
    'no-console': 'off',
    'curly': ['error', 'all'],
    'antfu/consistent-list-newline': 'off',
  },
})
