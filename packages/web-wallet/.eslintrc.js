const { baseConfig } = require('./config/webpack.base.config');

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:react/recommended",
    "airbnb-base"
  ],
  "plugins": ["babel"],
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": baseConfig
      }
    },
    "react": {
      "version": "16.3.2"
    }
  },
  "rules": {
    "new-cap": 0,
    "func-names": 0,
    "no-plusplus": 0,
    "no-sequences": 0,
    "arrow-parens": 0,
    "global-require": 0,
    "no-return-assign": 0,
    "no-confusing-arrow": 0,
    "no-mixed-operators": 0,
    "max-len": ["error", {
      "code": 100,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],
    "no-constant-condition": 0,
    "class-methods-use-this": 0,
    "space-before-function-paren": 0,
    "quotes": ["error", "single"],
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "no-param-reassign": ["error", {
      "props": false
    }],
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [2, { "peerDependencies": true }],
    "import/no-unresolved": 2,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/sort-comp": [2, {
      "order": [
        "static-methods",
        "lifecycle",
        "everything-else",
        "/^on.+$/",
        "/^handle.+$/",
        "rendering"
      ],
      "groups": {
        "rendering": [
          "/^render.+$/",
          "render"
        ]
      }
    }]
  }
}

