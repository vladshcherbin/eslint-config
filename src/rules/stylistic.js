import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  extends: [
    // eslint-disable-next-line import-x/no-named-as-default-member
    stylistic.configs.customize({
      commaDangle: 'never',
      jsx: false
    })
  ],
  rules: {
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': 'error',
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/arrow-parens': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/comma-dangle': 'error',
    '@stylistic/comma-spacing': 'error',
    '@stylistic/comma-style': 'error',
    '@stylistic/computed-property-spacing': 'error',
    '@stylistic/curly-newline': ['error', 'always'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': 'error',
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/generator-star-spacing': ['error', 'after'],
    '@stylistic/implicit-arrow-linebreak': 'error',
    '@stylistic/indent': ['error', 2],
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/line-comment-position': 'error',
    '@stylistic/linebreak-style': 'error',
    '@stylistic/lines-around-comment': 'off',
    '@stylistic/lines-between-class-members': 'error',
    '@stylistic/max-len': ['error', 120, 2, {
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true
    }],
    '@stylistic/max-statements-per-line': 'error',
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }],
    '@stylistic/multiline-comment-style': 'off',
    '@stylistic/multiline-ternary': ['error', 'always-multiline', { ignoreJSX: true }],
    '@stylistic/new-parens': 'error',
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-parens': ['error', 'functions'],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'off',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': 'error',
    '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],
    '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' }
    ],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/semi': ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    '@stylistic/semi-spacing': 'error',
    '@stylistic/semi-style': 'error',
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
      'error',
      { anonymous: 'always', asyncArrow: 'always', named: 'never' }
    ],
    '@stylistic/space-in-parens': 'error',
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/spaced-comment': ['error', 'always', { block: { balanced: true } }],
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/template-tag-spacing': 'error',
    '@stylistic/type-annotation-spacing': 'off',
    '@stylistic/type-generic-spacing': 'off',
    '@stylistic/type-named-tuple-spacing': 'off',
    '@stylistic/wrap-iife': ['error', 'inside'],
    '@stylistic/wrap-regex': 'off',
    '@stylistic/yield-star-spacing': 'error'
  }
})
