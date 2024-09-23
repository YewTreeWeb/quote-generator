/* eslint-env node */
import '@rushstack/eslint-patch/modern-module-resolution'

module.exports = {
  ignores: ['node_modules', 'public', 'tailwind.config.js', '.eslintrc.cjs'],
  root: true,
  files: ['**/*.{js,cjs,mjs}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'off'
  }
}
