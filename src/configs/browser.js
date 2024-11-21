import confusingBrowserGlobals from 'confusing-browser-globals'
import globals from 'globals'
import importX from '../rules/import-x.js'
import base from './base.js'

export default [
  ...base,
  importX.browser,
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'no-restricted-globals': ['error', 'isFinite', 'isNaN', ...confusingBrowserGlobals]
    }
  }
]
