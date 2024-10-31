import globals from 'globals'
import baseTypescript from './base-typescript.js'

export default {
  ...baseTypescript,
  languageOptions: {
    ...baseTypescript.languageOptions,
    globals: globals.nodeBuiltin
  }
}
