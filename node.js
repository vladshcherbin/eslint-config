module.exports = {
  extends: [
    'airbnb-base',
    './shared'
  ],
  plugins: ['@babel'],
  rules: {
    'new-cap': 'off',
    'no-invalid-this': 'off',
    'no-unused-expressions': 'off',
    'object-curly-spacing': 'off',
    semi: 'off',
    '@babel/new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
    }],
    '@babel/no-invalid-this': 'off',
    '@babel/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false
    }],
    '@babel/object-curly-spacing': ['error', 'always'],
    '@babel/semi': ['error', 'never'],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        '@babel/plugin-syntax-class-properties'
      ]
    }
  }
}
