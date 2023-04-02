//详细配置教程请参考：http://eslint.cn/docs/user-guide/configuring
module.exports = {
  "plugins": [
    "html",
  ],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
  },
  "globals": {
    "uni": "writable",
    "plus": "readonly",
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
    "allowImportExportEverywhere": false,
  },
  "extends": "eslint:recommended",
  "rules": {
    "array-callback-return": 1,
    "no-floating-decimal": 1,
    "init-declarations": 1,
    "array-bracket-spacing": 1,
    "block-spacing": 1,
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": 1,
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "arrow-parens": ["error", "as-needed"],
    "no-var": 2,
    "prefer-arrow-callback": 1,
    "no-empty": ["error", { "allowEmptyCatch": true }],
  },
};
