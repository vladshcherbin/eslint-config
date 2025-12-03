import { includeIgnoreFile } from '@eslint/compat'
import { findUp } from 'find-up-simple'

export default includeIgnoreFile(await findUp('.gitignore'))
