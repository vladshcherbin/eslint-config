import base from './base.js'
import eslintTypescript from '../rules/eslint-typescript.js'

export default [
  ...base,
  eslintTypescript,
  {
    rules: {
      'import/extensions': ['error', 'always', { ts: 'never' }]
    },
    settings: {
      'import/extensions': ['.js', '.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
      'import/resolver': { typescript: true }
    }
  }
]
