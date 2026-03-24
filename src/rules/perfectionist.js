import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  extends: [
    perfectionist.configs['recommended-natural']
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',
    'import-x/order': 'off',
    'perfectionist/sort-imports': ['error', { newlinesBetween: 0 }],
    'perfectionist/sort-jsx-props': 'off',
    'perfectionist/sort-modules': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off'
  }
})
