module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules', 'dist'],
  rules: {
    'array-callback-return': 'error',
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'import/no-absolute-path': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'max-classes-per-file': ['error', 1],
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-multi-assign': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prettier/prettier': ['warn'],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    // The following rules are off mostly due to incompatibilities with their
    // @typescript-eslint version
    'no-duplicate-imports': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-unused-var': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['camelCase', 'PascalCase'],
            selector: 'default',
          },
          {
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            selector: 'variable',
          },
          {
            format: ['camelCase', 'UPPER_CASE'],
            selector: 'variable',
            types: ['boolean', 'string', 'number', 'array'],
          },
          {
            format: ['camelCase', 'snake_case', 'PascalCase'],
            selector: 'property',
          },
          {
            format: ['camelCase'],
            selector: 'parameterProperty',
          },
          {
            format: ['PascalCase'],
            selector: 'typeLike',
          },
          {
            format: ['PascalCase', 'UPPER_CASE'],
            selector: 'enumMember',
          },
          {
            format: ['camelCase'],
            selector: 'parameter',
          },
          {
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            modifiers: ['unused'],
            selector: 'parameter',
          },
        ],
        '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-shadow': ['error', { hoist: 'all' }],
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-duplicate-imports': 'error',
      },
    },
    {
      files: ['*.spec.ts'],
      plugins: ['jest'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
};
