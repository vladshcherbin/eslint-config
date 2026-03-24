import { defineConfig } from 'eslint/config'
import eslint from './rules/eslint.js'
import ignores from './rules/ignores.js'
import perfectionist from './rules/perfectionist.js'
import stylistic from './rules/stylistic.js'
import typescript from './rules/typescript.js'

export default defineConfig([
  ignores,
  {
    extends: [
      eslint,
      typescript,
      stylistic,
      perfectionist
    ]
  }
])
