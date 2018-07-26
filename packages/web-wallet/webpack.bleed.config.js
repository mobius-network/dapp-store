const devConfig = require('./webpack.development.config');

const jsRule = devConfig.module.rules.find(rule => rule.loader === 'babel-loader');

// Ignore .babelrc and transform only features unsupported by the latest Chrome
jsRule.options = {
  babelrc: false,
  presets: [
    ['env', {
      targets: {
        chrome: 67,
      },
      modules: false,
      useBuiltIns: true,
    }],
    'react',
  ],
  plugins: [
    'react-hot-loader/babel',
    'transform-object-rest-spread',
    'transform-class-properties',
    'styled-components',
    'lodash',
  ],
};

module.exports = devConfig;
