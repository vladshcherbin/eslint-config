import { defineConfig } from 'eslint/config'
import config from './src/index.js'

export default defineConfig({
  extends: [
    config
  ],
  languageOptions: {
    parserOptions: {
      projectService: true
    }
  }
})
