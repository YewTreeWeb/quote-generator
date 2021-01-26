module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    jquery: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    indent: 2,
    'no-console': 'off',
    'space-before-function-paren': 0,
    'new-cap': 0,
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        usePrettierrc: true,
      },
    ],
  },
}
