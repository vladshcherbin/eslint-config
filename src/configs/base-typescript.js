import eslint from '../rules/eslint.js'
import eslintTypescript from '../rules/eslint-typescript.js'
import stylistic from '../rules/stylistic.js'
import miscellaneous from './rules/miscellaneous.js'

export default {
  files: eslintTypescript.files,
  languageOptions: eslintTypescript.languageOptions,
  plugins: {
    ...stylistic.plugins,
    ...miscellaneous.plugins,
    ...eslintTypescript.plugins
  },
  rules: {
    ...eslint.rules,
    ...stylistic.rules,
    ...miscellaneous.rules,
    ...eslintTypescript.rules
  }
}
