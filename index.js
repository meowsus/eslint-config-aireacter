module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier"],

  plugins: ["prettier"],

  rules: {
    "prettier/prettier": "error",
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
