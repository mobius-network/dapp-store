const { resolve } = require('path');

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:react/recommended",
    "airbnb-base"
  ],
  "plugins": [
    "babel",
  ],
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": resolve(__dirname, 'webpack.development.config.js')
      }
    },
    "react": {
      "version": "16.3"
    },
  },
  "rules": {
    "class-methods-use-this": 0,
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "import/no-extraneous-dependencies": [2, {
      "devDependencies": true
    }],
    "import/prefer-default-export": 0,
    "max-len": [1, 120, 2, {
      "ignoreComments": true,
      "ignoreUrls": true
    }],
    "no-constant-condition": 0,
    "no-return-assign": [2, "except-parens"],
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "prefer-destructuring": ["error", {
      "AssignmentExpression": {
        "array": false
      }
    }],
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
    }],
    "react/sort-prop-types": [2, {
      "sortShapeProp": true
    }],
    "react/jsx-sort-props": [2, {
      "reservedFirst": true
    }],
  }
}

