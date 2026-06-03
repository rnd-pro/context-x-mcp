export default [
  {
    ignores: [
      'node_modules/**',
      'docs/**',
      'assets/**',
      'coverage/**',
      'tmp/**',
      'dist/**',
      'build/**',
    ],
  },
  {
    files: ['src/**/*.js', 'test/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
      },
    },
    rules: {},
  },
];
