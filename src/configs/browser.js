import confusingBrowserGlobals from 'confusing-browser-globals'
import globals from 'globals'
import base from './base.js'

export default [
  ...base,
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'import/no-nodejs-modules': 'error',
      'no-restricted-globals': ['error', 'isFinite', 'isNaN', ...confusingBrowserGlobals]
    }
  }
]
