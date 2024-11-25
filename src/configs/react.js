import importX from '../rules/import-x.js'
import jsxA11y from '../rules/jsx-a11y.js'
import perfectionist from '../rules/perfectionist.js'
import reactHooks from '../rules/react-hooks.js'
import react from '../rules/react.js'
import stylistic from '../rules/stylistic.js'
import browser from './browser.js'

export default [
  ...browser,
  react,
  reactHooks,
  jsxA11y,
  stylistic.jsx,
  importX.react,
  perfectionist.react
]
