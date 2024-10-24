import globals from 'globals'
import eslint from './rules/eslint.js'
import stylistic from './rules/stylistic.js'
import miscellaneous from './rules/miscellaneous.js'
import confusingBrowserGlobals from 'confusing-browser-globals'

const base = {
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

export default {
  browser: {
    ...base,
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      ...base.rules,
      'no-restricted-globals': ['error', 'isFinite', 'isNaN', ...confusingBrowserGlobals]
    }
  }
}
