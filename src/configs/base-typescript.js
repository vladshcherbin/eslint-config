import eslintTypescript from '../rules/eslint-typescript.js'
import eslint from '../rules/eslint.js'
import ignores from '../rules/ignores.js'
import importX from '../rules/import-x.js'
import perfectionist from '../rules/perfectionist.js'
import sortDestructureKeys from '../rules/sort-destructure-keys.js'
import stylistic from '../rules/stylistic.js'

export default [
  eslint,
  eslintTypescript,
  importX.base,
  importX.typescript,
  stylistic,
  sortDestructureKeys,
  perfectionist.base,
  ignores
]
