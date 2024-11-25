import importX from '../rules/import-x.js'
import perfectionist from '../rules/perfectionist.js'
import reactHooks from '../rules/react-hooks.js'
import react from '../rules/react.js'
import stylistic from '../rules/stylistic.js'
import browser from './browser.js'

export default [
  ...browser,
  react,
  reactHooks,
  stylistic.jsx,
  importX.react,
  perfectionist.react
]
