import perfectionist from '../rules/perfectionist.js'
import react from '../rules/react.js'
import browser from './browser.js'

export default [
  ...browser,
  react,
  perfectionist.react,
  {
    settings: {
      'import/extensions': ['.js', '.jsx']
    }
  }
]
