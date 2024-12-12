import reactDom from 'eslint-plugin-react-dom'
import reactHooksExtra from 'eslint-plugin-react-hooks-extra'
import reactNamingConvention from 'eslint-plugin-react-naming-convention'
import reactWebApi from 'eslint-plugin-react-web-api'
import reactX from 'eslint-plugin-react-x'

export default {
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  plugins: {
    '@eslint-react': reactX,
    '@eslint-react/dom': reactDom,
    '@eslint-react/hooks-extra': reactHooksExtra,
    '@eslint-react/naming-convention': reactNamingConvention,
    '@eslint-react/web-api': reactWebApi
  },
  rules: {
    '@eslint-react/avoid-shorthand-boolean': 'off',
    '@eslint-react/avoid-shorthand-fragment': 'off',
    '@eslint-react/dom/no-children-in-void-dom-elements': 'error',
    '@eslint-react/dom/no-dangerously-set-innerhtml': 'error',
    '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',
    '@eslint-react/dom/no-find-dom-node': 'off',
    '@eslint-react/dom/no-missing-button-type': 'error',
    '@eslint-react/dom/no-missing-iframe-sandbox': 'error',
    '@eslint-react/dom/no-namespace': 'error',
    '@eslint-react/dom/no-render-return-value': 'off',
    '@eslint-react/dom/no-script-url': 'error',
    // TODO check why disabled in recommended
    '@eslint-react/dom/no-unknown-property': 'error',
    '@eslint-react/dom/no-unsafe-iframe-sandbox': 'error',
    // TODO investigate
    '@eslint-react/dom/no-unsafe-target-blank': 'error',
    '@eslint-react/ensure-forward-ref-using-ref': 'error',
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'error',
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect': 'error',
    '@eslint-react/hooks-extra/no-redundant-custom-hook': 'error',
    '@eslint-react/hooks-extra/no-unnecessary-use-callback': 'error',
    '@eslint-react/hooks-extra/no-unnecessary-use-memo': 'error',
    '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': 'error',
    '@eslint-react/jsx-no-duplicate-props': 'error',
    '@eslint-react/jsx-uses-vars': 'error',
    '@eslint-react/naming-convention/component-name': 'error',
    // TODO test
    '@eslint-react/naming-convention/filename': 'off',
    // TODO test
    '@eslint-react/naming-convention/filename-extension': 'off',
    '@eslint-react/naming-convention/use-state': 'error',
    '@eslint-react/no-access-state-in-setstate': 'off',
    '@eslint-react/no-array-index-key': 'error',
    '@eslint-react/no-children-count': 'error',
    '@eslint-react/no-children-for-each': 'error',
    '@eslint-react/no-children-map': 'error',
    '@eslint-react/no-children-only': 'error',
    '@eslint-react/no-children-prop': 'error',
    '@eslint-react/no-children-to-array': 'error',
    '@eslint-react/no-class-component': 'error',
    '@eslint-react/no-clone-element': 'error',
    '@eslint-react/no-comment-textnodes': 'error',
    '@eslint-react/no-complex-conditional-rendering': 'error',
    '@eslint-react/no-component-will-mount': 'off',
    '@eslint-react/no-component-will-receive-props': 'off',
    '@eslint-react/no-component-will-update': 'off',
    '@eslint-react/no-create-ref': 'error',
    '@eslint-react/no-default-props': 'error',
    '@eslint-react/no-direct-mutation-state': 'off',
    '@eslint-react/no-duplicate-key': 'error',
    '@eslint-react/no-implicit-key': 'error',
    // TODO test in real projects
    '@eslint-react/no-leaked-conditional-rendering': 'off',
    '@eslint-react/no-missing-component-display-name': 'error',
    '@eslint-react/no-missing-key': 'error',
    '@eslint-react/no-nested-components': 'error',
    '@eslint-react/no-prop-types': 'error',
    '@eslint-react/no-redundant-should-component-update': 'off',
    '@eslint-react/no-set-state-in-component-did-mount': 'off',
    '@eslint-react/no-set-state-in-component-did-update': 'off',
    '@eslint-react/no-set-state-in-component-will-update': 'off',
    '@eslint-react/no-string-refs': 'error',
    '@eslint-react/no-unsafe-component-will-mount': 'off',
    '@eslint-react/no-unsafe-component-will-receive-props': 'off',
    '@eslint-react/no-unsafe-component-will-update': 'off',
    '@eslint-react/no-unstable-context-value': 'error',
    '@eslint-react/no-unstable-default-props': 'error',
    '@eslint-react/no-unused-class-component-members': 'off',
    '@eslint-react/no-unused-state': 'off',
    '@eslint-react/no-useless-fragment': ['error', { allowExpressions: false }],
    '@eslint-react/prefer-destructuring-assignment': 'error',
    '@eslint-react/prefer-react-namespace-import': 'off',
    '@eslint-react/prefer-read-only-props': 'off',
    '@eslint-react/prefer-shorthand-boolean': 'error',
    '@eslint-react/prefer-shorthand-fragment': 'error',
    '@eslint-react/web-api/no-leaked-event-listener': 'error',
    '@eslint-react/web-api/no-leaked-interval': 'error',
    '@eslint-react/web-api/no-leaked-resize-observer': 'error',
    '@eslint-react/web-api/no-leaked-timeout': 'error'
  },
  settings: {
    'react-x': {
      version: 'detect'
    }
  }
}
