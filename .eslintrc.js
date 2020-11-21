module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'func-names': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['off','windows'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    "@typescript-eslint/no-var-requires": 'off',
    'vue/custom-event-name-casing': 'off'
  }
}
