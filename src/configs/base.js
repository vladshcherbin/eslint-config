import eslint from '../rules/eslint.js'
import ignores from '../rules/ignores.js'
import importRules from '../rules/import.js'
import sortDestructureKeys from '../rules/sort-destructure-keys.js'
import stylistic from '../rules/stylistic.js'

export default [
  eslint,
  importRules,
  sortDestructureKeys,
  stylistic,
  ignores
]
