module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'tailwindcss',
    'simple-import-sort',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    //#region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //#endregion  //*======== Unused Import ===========
    //#region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // {s}css files
            '^.+\\.s?css$',
            // ext library & side effect imports
            '^@?\\w',
            '^\\u0000',
            // Lib and hooks
            '^@/lib',
            '^@/hooks',
            // static data
            '^\\/data',
            // components
            '^\\/components',
            '^\\/container',
            // zustand store
            '^\\/store',
            // Other imports
            '^\\/',
            // relative paths up until 3 levels deep
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
            // types
            '^\\/types',
            // other that did not fit in
            '^',
          ],
        ],
      },
    ],
    //#endregion  //*======== Import Sort ===========

    //#region  //*=========== TailwindCSS ===========
    'tailwindcss/no-custom-classname': 'warn',
    //#endregion  //*======== TailwindCSS ===========
  },
}
