import perfectionist from 'eslint-plugin-perfectionist'

const base = {
  plugins: {
    perfectionist
  },
  rules: {
    'import-x/order': 'off',
    'perfectionist/sort-array-includes': 'error',
    'perfectionist/sort-classes': 'error',
    'perfectionist/sort-decorators': 'off',
    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-exports': 'error',
    'perfectionist/sort-heritage-clauses': 'error',
    'perfectionist/sort-imports': ['error', {
      groups: [
        ['type', 'builtin', 'external'],
        ['internal-type', 'internal'],
        ['parent-type', 'sibling-type', 'index-type', 'parent', 'sibling', 'index'],
        'object',
        'unknown'
      ],
      newlinesBetween: 'never'
    }],
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-intersection-types': 'off',
    'perfectionist/sort-jsx-props': 'off',
    'perfectionist/sort-maps': 'error',
    'perfectionist/sort-modules': 'off',
    'perfectionist/sort-named-exports': 'error',
    'perfectionist/sort-named-imports': 'error',
    'perfectionist/sort-object-types': 'off',
    'perfectionist/sort-objects': 'error',
    'perfectionist/sort-sets': 'error',
    'perfectionist/sort-switch-case': 'error',
    'perfectionist/sort-union-types': 'off',
    'perfectionist/sort-variable-declarations': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off'
  },
  settings: {
    perfectionist: {
      type: 'natural'
    }
  }
}

const react = {
  rules: {
    '@stylistic/jsx-sort-props': 'off',
    'perfectionist/sort-imports': ['error', {
      customGroups: {
        type: {
          react: ['^react$', '^react-.+$']
        },
        value: {
          react: ['^react$', '^react-.+$']
        }
      },
      groups: [
        'react',
        ['type', 'builtin', 'external'],
        ['internal-type', 'internal'],
        ['parent-type', 'sibling-type', 'index-type', 'parent', 'sibling', 'index'],
        'object',
        'unknown'
      ],
      newlinesBetween: 'never'
    }],
    'perfectionist/sort-jsx-props': ['error', {
      customGroups: {
        action: '^action$',
        alt: '^alt$',
        ariaAttributes: '^aria-.+$',
        callback: '^on.+$',
        checked: '^checked$',
        className: '^className$',
        dataAttributes: '^data-.+$',
        defaultChecked: '^defaultChecked$',
        defaultValue: '^defaultValue$',
        height: '^height$',
        href: '^href$',
        htmlFor: '^htmlFor$',
        id: '^id$',
        key: '^key$',
        method: '^method$',
        multiple: '^multiple$',
        name: '^name$',
        placeholder: '^placeholder$',
        ref: '^ref$',
        rel: '^rel$',
        size: '^size$',
        src: '^src$',
        style: '^style$',
        target: '^target$',
        title: '^title$',
        type: '^type$',
        value: '^value$',
        viewBox: '^viewBox$',
        width: '^width$',
        xmlns: '^xmlns$'
      },
      groups: [
        'key',
        'ref',
        'src',
        'alt',
        'rel',
        'href',
        'target',
        'action',
        'method',
        'type',
        'name',
        'htmlFor',
        'id',
        'className',
        'style',
        'value',
        'checked',
        'defaultValue',
        'defaultChecked',
        'placeholder',
        'xmlns',
        'width',
        'height',
        'size',
        'viewBox',
        'multiple',
        'title',
        'unknown',
        'dataAttributes',
        'ariaAttributes',
        'callback'
      ]
    }],
    'react/jsx-sort-props': 'off'
  }
}

const typescript = {
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',
    'perfectionist/sort-decorators': 'error',
    'perfectionist/sort-enums': 'error',
    'perfectionist/sort-interfaces': ['error', {
      customGroups: {
        createdTimestamp: '^createdAt$',
        eventTimestamp: '^(?!(?:created|removed|updated)).*At$',
        id: '^id$',
        relatedId: 'Id$',
        removedTimestamp: '^removedAt$',
        updatedTimestamp: '^updatedAt$'
      },
      groups: [
        'id',
        'relatedId',
        ['unknown', 'method', 'multiline'],
        'eventTimestamp',
        ['createdTimestamp', 'updatedTimestamp'],
        'removedTimestamp'
      ]
    }],
    'perfectionist/sort-intersection-types': 'error',
    'perfectionist/sort-object-types': ['error', {
      customGroups: {
        createdTimestamp: '^createdAt$',
        eventTimestamp: '^(?!(?:created|removed|updated)).*At$',
        id: '^id$',
        relatedId: 'Id$',
        removedTimestamp: '^removedAt$',
        updatedTimestamp: '^updatedAt$'
      },
      groups: [
        'id',
        'relatedId',
        ['unknown', 'method', 'multiline'],
        'eventTimestamp',
        ['createdTimestamp', 'updatedTimestamp'],
        'removedTimestamp'
      ]
    }],
    'perfectionist/sort-union-types': ['error', {
      groups: ['unknown', 'nullish']
    }]
  }
}

export default {
  base,
  react,
  typescript
}
