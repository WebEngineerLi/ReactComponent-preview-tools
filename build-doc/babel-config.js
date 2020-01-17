// babel是代码转化器，ES2015+ -> ES5 或 JSX -> JS
// babel preset 就是 babel plugin 的集合 https://juejin.im/entry/5b15d3acf265da6e38191f80


module.exports = {
  presets: [
    "@babel/preset-typescript", // 支持ts
    [
      "@babel/preset-env", // 支持es2015+
      {
        targets: {
          browsers: "chrome >= 45"
        }
      }
    ],
    "@babel/preset-react" // 支持React
  ]
};
