import eslintTypescript from '../rules/eslint-typescript.js'
import importX from '../rules/import-x.js'
import perfectionist from '../rules/perfectionist.js'
import stylistic from '../rules/stylistic.js'
import base from './base.js'

export default [
  ...base,
  eslintTypescript,
  importX.typescript,
  stylistic.typescript,
  perfectionist.typescript
]
