import eslintTypescript from '../rules/eslint-typescript.js'
import eslint from '../rules/eslint.js'
import ignores from '../rules/ignores.js'
import importPlugin from '../rules/import.js'
import perfectionist from '../rules/perfectionist.js'
import sortDestructureKeys from '../rules/sort-destructure-keys.js'
import stylistic from '../rules/stylistic.js'

export default [
  eslint,
  eslintTypescript,
  importPlugin,
  stylistic,
  sortDestructureKeys,
  perfectionist.base,
  ignores,
  {
    rules: {
      'import/extensions': ['error', 'ignorePackages', { ts: 'never' }]
    },
    settings: {
      'import/extensions': ['.js', '.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
      'import/resolver': { typescript: true }
    }
  }
]
