//详细配置教程请参考：http://eslint.cn/docs/user-guide/configuring
module.exports = {
    "plugins": [
        "html",
    ],
    "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "allowImportExportEverywhere": false,
    },
    "extends": "eslint:recommended",
    "rules": {
      "array-callback-return": 1,
      "no-floating-decimal": 1,
      "init-declarations": 1,
      "no-use-before-define": 2,
      "array-bracket-spacing": 1,
      "block-spacing": 1,
      "comma-dangle": ["error", {
          "arrays": "always",
          "objects": "always",
      }],
      "eol-last": 1,
      "indent": ["error", 2],
      "jsx-quotes": ["error", "prefer-double"],
      "arrow-parens": ["error", "as-needed"],
      "no-var": 2,
      "prefer-arrow-callback": 1,
    }
};