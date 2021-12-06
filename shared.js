module.exports = {
  plugins: [
    'sort-destructure-keys'
  ],
  rules: {
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'], alphabetize: { order: 'asc' } }],
    'sort-destructure-keys/sort-destructure-keys': 'error'
  }
}
