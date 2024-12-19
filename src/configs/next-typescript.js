import confusingBrowserGlobals from 'confusing-browser-globals'
import globals from 'globals'
import importX from '../rules/import-x.js'
import jsxA11y from '../rules/jsx-a11y.js'
import next from '../rules/next.js'
import perfectionist from '../rules/perfectionist.js'
import reactHooks from '../rules/react-hooks.js'
import react from '../rules/react.js'
import stylistic from '../rules/stylistic.js'
import baseTypescript from './base-typescript.js'

export default [
  ...baseTypescript,
  react,
  reactHooks,
  jsxA11y,
  stylistic.jsx,
  importX.nextTypescript,
  perfectionist.react,
  next,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin
      }
    },
    rules: {
      'no-restricted-globals': ['error', 'isFinite', 'isNaN', ...confusingBrowserGlobals]
    }
  }
]
