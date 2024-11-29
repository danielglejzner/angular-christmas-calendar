const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      '@typescript-eslint/no-unused-vars': [
          'error',
          {
            'vars': 'all',
            'args': 'after-used',
            'argsIgnorePattern': '^_'
          }
        ]
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'xmas',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'xmas',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/method-signature-style': 'error',
      '@angular-eslint/component-class-suffix': ['error'],
      '@angular-eslint/directive-class-suffix': ['error'],
      '@angular-eslint/contextual-decorator': ['error'],
      '@angular-eslint/contextual-lifecycle': ['error'],
      '@angular-eslint/no-conflicting-lifecycle': ['error'],
      '@angular-eslint/no-output-on-prefix': ['error'],
      '@angular-eslint/prefer-on-push-component-change-detection': ['error'],
      '@angular-eslint/use-lifecycle-interface': ['error'],
      '@angular-eslint/use-pipe-transform-interface': ['error'],
      '@angular-eslint/no-host-metadata-property': ['off'],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {
      '@angular-eslint/template/alt-text': ['error'],
      '@angular-eslint/template/label-has-associated-control': ['error'],
      '@angular-eslint/template/role-has-required-aria': ['error'],
      '@angular-eslint/template/table-scope': ['error'],
      '@angular-eslint/template/button-has-type': ['error'],
      '@angular-eslint/template/click-events-have-key-events': ['error'],
      '@angular-eslint/template/eqeqeq': ['error'],
      '@angular-eslint/template/mouse-events-have-key-events': ['error'],
      '@angular-eslint/template/no-autofocus': ['error'],
      '@angular-eslint/template/no-negated-async': ['error'],
      '@angular-eslint/template/use-track-by-function': ['error'],
      '@angular-eslint/template/prefer-control-flow': ['error']
    },
  },
];
