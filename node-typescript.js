module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    './shared'
  ],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never']
  }
}
