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
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'off',
    'import/no-unresolved': 'off', //
    'vue/no-multiple-template-root': 'off',
    'comma-dangle': ['error', 'never'],
    'import/named': 'off',
    'func-names': 'off',
    semi: ['error', 'never']
  }
}