import importX from '../rules/import-x.js'
import perfectionist from '../rules/perfectionist.js'
import react from '../rules/react.js'
import browser from './browser.js'

export default [
  ...browser,
  react,
  importX.react,
  perfectionist.react
]
