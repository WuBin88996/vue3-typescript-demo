module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    '@vue/typescript'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'off',
    'func-names': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'vue/no-multiple-template-root': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off'
    // 'no-undef': 'off'
  }
}
