import importX from '../rules/import-x.js'
import perfectionist from '../rules/perfectionist.js'
import reactHooks from '../rules/react-hooks.js'
import react from '../rules/react.js'
import browser from './browser.js'

export default [
  ...browser,
  react,
  reactHooks,
  importX.react,
  perfectionist.react
]
