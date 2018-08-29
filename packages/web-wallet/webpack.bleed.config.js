const devConfig = require('./webpack.development.config');

const jsRule = devConfig.module.rules.find(
  rule => rule.loader === 'babel-loader'
);

// Ignore .babelrc and transform only features unsupported by the latest Chrome
jsRule.options = {
  babelrc: false,
  presets: [
    [
      '@babel/env',
      {
        targets: {
          chrome: 67
        },
        modules: false,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/react'
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    'styled-components',
    'lodash'
  ]
};

module.exports = devConfig;
