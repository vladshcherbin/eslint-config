import eslint from '../rules/eslint.js'
import ignores from '../rules/ignores.js'
import miscellaneous from '../rules/miscellaneous.js'
import stylistic from '../rules/stylistic.js'

export default [
  ignores,
  eslint,
  stylistic,
  miscellaneous
]
