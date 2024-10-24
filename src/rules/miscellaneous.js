import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys'

export default {
  plugins: {
    'sort-destructure-keys': sortDestructureKeys
  },
  rules: {
    'sort-destructure-keys/sort-destructure-keys': 'error'
  }
}
