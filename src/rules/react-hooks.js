import reactHooks from 'eslint-plugin-react-hooks'

export default {
  plugins: {
    'react-hooks': reactHooks
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error'
  }
}
