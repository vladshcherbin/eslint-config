import importPlugin from 'eslint-plugin-import'

export default {
  plugins: {
    import: importPlugin
  },
  rules: {
    'import/consistent-type-specifier-style': 'off',
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': ['error', 'ignorePackages'],
    'import/first': ['error', 'absolute-first'],
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': ['error', { exactCount: true }],
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'off',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.js'],
        includeInternal: true,
        includeTypes: true,
        optionalDependencies: false
      }
    ],
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': ['error', { 'newlines-between': 'never' }],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off'
  }
}
