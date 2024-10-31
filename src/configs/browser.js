import globals from 'globals'
import confusingBrowserGlobals from 'confusing-browser-globals'
import base from './base.js'

export default [
  ...base,
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'no-restricted-globals': ['error', 'isFinite', 'isNaN', ...confusingBrowserGlobals]
    }
  }
]
