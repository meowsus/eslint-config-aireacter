module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier"],

  plugins: ["prettier"],

  rules: {
    "prettier/prettier": "error",
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  ignorePatterns: ["node_modules/*"],
};
