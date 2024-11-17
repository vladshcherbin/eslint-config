import browser from './browser.js'
import react from '../rules/react.js'

export default [
  ...browser,
  react,
  {
    'import/extensions': ['.js', '.jsx']
  }
]
