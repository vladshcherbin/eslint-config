import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  extends: [
    perfectionist.configs['recommended-natural']
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',
    'import-x/order': 'off',
    'perfectionist/sort-array-includes': 'error',
    'perfectionist/sort-classes': 'error',
    'perfectionist/sort-decorators': 'error',
    'perfectionist/sort-enums': 'error',
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
    'perfectionist/sort-interfaces': ['error', {
      customGroups: [
        {
          elementNamePattern: '^createdAt$',
          groupName: 'createdTimestamp'
        },
        {
          elementNamePattern: '^(?!(?:created|removed|updated)).*At$',
          groupName: 'eventTimestamp'
        },
        {
          elementNamePattern: '^id$',
          groupName: 'id'
        },
        {
          elementNamePattern: 'Id$',
          groupName: 'relatedId'
        },
        {
          elementNamePattern: '^removedAt$',
          groupName: 'removedTimestamp'
        },
        {
          elementNamePattern: '^updatedAt$',
          groupName: 'updatedTimestamp'
        }
      ],
      groups: [
        'id',
        'relatedId',
        'unknown',
        'eventTimestamp',
        'createdTimestamp',
        'updatedTimestamp',
        'removedTimestamp'
      ]
    }],
    'perfectionist/sort-intersection-types': 'error',
    'perfectionist/sort-jsx-props': 'off',
    'perfectionist/sort-maps': 'error',
    'perfectionist/sort-modules': 'off',
    'perfectionist/sort-named-exports': 'error',
    'perfectionist/sort-named-imports': 'error',
    'perfectionist/sort-object-types': ['error', {
      customGroups: [
        {
          elementNamePattern: '^createdAt$',
          groupName: 'createdTimestamp'
        },
        {
          elementNamePattern: '^(?!(?:created|removed|updated)).*At$',
          groupName: 'eventTimestamp'
        },
        {
          elementNamePattern: '^id$',
          groupName: 'id'
        },
        {
          elementNamePattern: 'Id$',
          groupName: 'relatedId'
        },
        {
          elementNamePattern: '^removedAt$',
          groupName: 'removedTimestamp'
        },
        {
          elementNamePattern: '^updatedAt$',
          groupName: 'updatedTimestamp'
        }
      ],
      groups: [
        'id',
        'relatedId',
        'unknown',
        'eventTimestamp',
        'createdTimestamp',
        'updatedTimestamp',
        'removedTimestamp'
      ]
    }],
    'perfectionist/sort-objects': 'error',
    'perfectionist/sort-sets': 'error',
    'perfectionist/sort-switch-case': 'error',
    'perfectionist/sort-union-types': ['error', {
      groups: ['unknown', 'nullish']
    }],
    'perfectionist/sort-variable-declarations': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off'
  }
})
