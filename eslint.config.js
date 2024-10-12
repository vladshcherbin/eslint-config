import configs from './src/index.js'

export default [
  ...configs.browser,
  {
    rules: {
      'no-console': 'off'
    }
  }
]
