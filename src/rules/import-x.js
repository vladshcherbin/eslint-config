import { createOxcImportResolver } from 'eslint-import-resolver-oxc'
import importX from 'eslint-plugin-import-x'

const base = {
  plugins: {
    'import-x': importX
  },
  rules: {
    'import-x/consistent-type-specifier-style': 'off',
    'import-x/default': 'error',
    'import-x/dynamic-import-chunkname': 'off',
    'import-x/export': 'error',
    'import-x/exports-last': 'off',
    'import-x/extensions': ['error', 'ignorePackages'],
    'import-x/first': ['error', 'absolute-first'],
    'import-x/group-exports': 'off',
    'import-x/max-dependencies': 'off',
    'import-x/named': 'error',
    'import-x/namespace': 'error',
    'import-x/newline-after-import': 'error',
    'import-x/no-absolute-path': 'error',
    'import-x/no-amd': 'error',
    'import-x/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowCallExpression: true,
      allowLiteral: true,
      allowNew: true,
      allowObject: true
    }],
    'import-x/no-commonjs': 'error',
    // Too slow
    'import-x/no-cycle': 'off',
    'import-x/no-default-export': 'off',
    'import-x/no-deprecated': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-dynamic-require': 'error',
    'import-x/no-empty-named-blocks': 'error',
    // Turn off until alias configuration is supported
    'import-x/no-extraneous-dependencies': 'off',
    'import-x/no-import-module-exports': 'error',
    'import-x/no-internal-modules': 'off',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-as-default': 'error',
    'import-x/no-named-as-default-member': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-named-export': 'off',
    'import-x/no-namespace': 'error',
    'import-x/no-nodejs-modules': 'off',
    'import-x/no-relative-packages': 'error',
    'import-x/no-relative-parent-imports': 'off',
    // Too many false positives
    'import-x/no-rename-default': 'off',
    'import-x/no-restricted-paths': 'off',
    'import-x/no-self-import': 'error',
    'import-x/no-unassigned-import': 'off',
    'import-x/no-unresolved': 'error',
    'import-x/no-unused-modules': 'off',
    'import-x/no-useless-path-segments': 'error',
    'import-x/no-webpack-loader-syntax': 'off',
    'import-x/order': ['error', { 'newlines-between': 'never' }],
    'import-x/prefer-default-export': 'off',
    'import-x/unambiguous': 'off',
    'no-duplicate-imports': 'off'
  },
  settings: {
    'import-x/resolver-next': [createOxcImportResolver()]
  }
}

const browser = {
  rules: {
    'import-x/no-nodejs-modules': 'error'
  }
}

const react = {
  settings: {
    'import-x/extensions': ['.js', '.jsx']
  }
}

const next = {
  files: ['**/*.js', '**/*.jsx'],
  rules: {
    'import-x/extensions': [
      'error',
      'ignorePackages',
      { pattern: { js: 'never', jsx: 'never' } }
    ]
  }
}

const typescript = {
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    'import-x/extensions': [
      'error',
      'ignorePackages',
      { checkTypeImports: true }
    ],
    'import-x/named': 'off',
    'import-x/no-duplicates': ['error', { 'prefer-inline': true }]
  },
  settings: {
    'import-x/extensions': ['.js', '.ts'],
    'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import-x/parsers': { '@typescript-eslint/parser': ['.ts'] }
  }
}

const reactTypescript = {
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    'import-x/extensions': [
      'error',
      'ignorePackages',
      { checkTypeImports: true, pattern: { ts: 'never', tsx: 'never' } }
    ]
  },
  settings: {
    'import-x/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import-x/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] }
  }
}

const nextTypescript = {
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  rules: {
    'import-x/extensions': [
      'error',
      'ignorePackages',
      { checkTypeImports: true, pattern: { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' } }
    ]
  },
  settings: {
    'import-x/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import-x/parsers': { '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'] }
  }
}

export default {
  base,
  browser,
  next,
  nextTypescript,
  react,
  reactTypescript,
  typescript
}
