module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser', // 解析*.vue文件
  extends: [
    'eslint-config-prettier',
    'eslint:recommended', // 使用推荐的eslint
    'plugin:vue/vue3-essential', // 使插件支持vue3
    'plugin:@typescript-eslint/recommended', // 使插件支持ts并使用推荐的ts-eslint
    'plugin:prettier/recommended' // 默认后面的插件会将前面的覆盖，解决prettier与eslint冲突
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    indent: ['error', 2], // 两个空格的缩进
    // 指定行分隔符的格式为Unix内核的LF
    // 这可以避免我们在github/服务器等clone代码时分隔符格式不一样引起的错误
    'linebreak-style': ['off', 'unix'],
    // 使用单引号
    quotes: ['error', 'single'],
    // 末尾不使用分号
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'off', // vue组件需要使用多个单词的名称
    'vue/no-mutating-props': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // ts: 不允许使用any
    '@typescript-eslint/no-non-null-assertion': 'off' // ts: 不允许使用非空断言
  }
}
