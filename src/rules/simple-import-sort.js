import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default {
  plugins: {
    'simple-import-sort': simpleImportSort
  },
  rules: {
    'import/order': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': ['error', {
      groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']]
    }],
    'sort-imports': 'off'
  }
}
