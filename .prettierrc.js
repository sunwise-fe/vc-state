module.exports = {
  // 一行最多多少个字符
  printWidth: 100,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用空格而不是制表符缩进
  useTabs: false,
  // 在语句末尾打印分号
  semi: false,
  vueIndentScriptAndStyle: true,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
  quoteProps: 'as-needed',
  // 在对象文字中的括号之间打印空格
  bracketSpacing: true,
  // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  trailingComma: 'none',
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always', // allow paren-less arrow functions 箭头函数的参数使用圆括号
  insertPragma: false,
  requirePragma: false,
  // 使用默认的折行标准 always\never\preserve
  proseWrap: 'never',
  // 指定HTML文件的全局空格敏感度 css\strict\ignore
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto'
}
