import eslint from '../rules/eslint.js'
import ignores from '../rules/ignores.js'
import importX from '../rules/import-x.js'
import perfectionist from '../rules/perfectionist.js'
import sortDestructureKeys from '../rules/sort-destructure-keys.js'
import stylistic from '../rules/stylistic.js'

export default [
  eslint,
  importX.base,
  stylistic.base,
  sortDestructureKeys,
  perfectionist.base,
  ignores
]
