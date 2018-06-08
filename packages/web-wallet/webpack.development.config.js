const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('lodash');

const baseConfig = require('./config/webpack.base.config');

module.exports = merge(baseConfig, {
  stats: 'minimal',
  devtool: 'eval',
  mode: 'development',
  devServer: {
    stats: 'minimal',
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('./config/dev.env'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  watchOptions: {
    ignored: [
      /node_modules([\\]+|\/)+(?!mobius-network)/,
    ],
  },
});
