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
    'func-names': 'off', // 不允许匿名函数
    semi: ['error', 'never'],  // 分号
    'comma-dangle': ['error', 'never'], // obj 结尾逗号
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['off','windows'],  // windows macos 换行问题
    '@typescript-eslint/member-delimiter-style': ['off'],  // ts 定义接口 不需要加 ;
    'import/no-unresolved': 'off',  // 引入的一个bug 没有解决方案 先关着
    '@typescript-eslint/no-explicit-any': ['off'],  // ts 不允许使用any
    "@typescript-eslint/no-var-requires": 'off', // ts 不允许使用require
    'vue/custom-event-name-casing': 'off',    // vue emit 不允许使用驼峰命名
    '@typescript-eslint/no-non-null-assertion': 'off'  // ts 禁止非空断言
  }
}
 