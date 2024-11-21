import eslint from '../rules/eslint.js'
import ignores from '../rules/ignores.js'
import importPlugin from '../rules/import.js'
import perfectionist from '../rules/perfectionist.js'
import sortDestructureKeys from '../rules/sort-destructure-keys.js'
import stylistic from '../rules/stylistic.js'

export default [
  eslint,
  importPlugin,
  stylistic,
  sortDestructureKeys,
  perfectionist.base,
  ignores
]
