import react from '../rules/react.js'
import browser from './browser.js'

export default [
  ...browser,
  react,
  {
    settings: {
      'import/extensions': ['.js', '.jsx']
    }
  }
]
