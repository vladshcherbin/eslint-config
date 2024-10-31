import globals from 'globals'
import baseTypescript from './base-typescript.js'

export default [
  ...baseTypescript,
  {
    languageOptions: {
      globals: globals.nodeBuiltin
    }
  }
]
