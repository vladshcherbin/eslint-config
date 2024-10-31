import eslint from '../rules/eslint.js'
import stylistic from '../rules/stylistic.js'
import miscellaneous from '../rules/miscellaneous.js'

export default {
  plugins: {
    ...stylistic.plugins,
    ...miscellaneous.plugins
  },
  rules: {
    ...eslint.rules,
    ...stylistic.rules,
    ...miscellaneous.rules
  }
}
