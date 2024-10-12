import globals from 'globals'
import eslint from './rules/eslint.js'
import stylistic from './rules/stylistic.js'

const base = [eslint, stylistic]

export default {
  browser: base.map((config) => ({
    ...config,
    languageOptions: {
      globals: globals.browser
    }
  }))
}
