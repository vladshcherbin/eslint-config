import { includeIgnoreFile } from '@eslint/compat'
import { join } from 'node:path'
import { cwd } from 'node:process'

export default includeIgnoreFile(join(cwd(), '.gitignore'))
