module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    cy: 'readonly',
    it: 'readonly',
    describe: 'readonly',
    Cypress: 'readonly',
    context: 'readonly',
    before: 'readonly',
    expect:'readonly',
    beforeEach:'readonly',
    afterAll:'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0
  }
};
