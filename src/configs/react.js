import browser from './browser.js'
import react from '../rules/react.js'

export default [
  ...browser,
  react,
  {
    settings: {
      'import/extensions': ['.js', '.jsx']
    }
  }
]
