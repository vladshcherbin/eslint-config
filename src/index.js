import globals from 'globals'
import eslint from './rules/eslint.js'
import stylistic from './rules/stylistic.js'
import miscellaneous from './rules/miscellaneous.js'

const base = [eslint, stylistic, miscellaneous]

export default {
  browser: base.map((config) => ({
    ...config,
    languageOptions: {
      globals: globals.browser
    }
  }))
}
