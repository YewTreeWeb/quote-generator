import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'

/**
 * ESLint flat config (ESLint v9+) for Vite + Tailwind project
 */
export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.vite/**', 'coverage/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      // Formatting via Prettier
      'prettier/prettier': 'error',
      // Prefer warnings for dev-only console usage
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // Import hygiene
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'off', // Vite aliases may be used
      // Remove unused imports/vars
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
]
