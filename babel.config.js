module.exports = {
  presets: [
    [
      '@babel/env',
      {
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
    [
      '@babel/transform-runtime',
      {
        regenerator: true
      }
    ],
    'styled-components',
    'lodash'
  ]
};
