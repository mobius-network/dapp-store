const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('lodash');

const {
  baseConfig,
  webAppPluginConfig,
  copyPluginPatterns
} = require('./config/webpack.base.config');

module.exports = merge(baseConfig, {
  stats: 'minimal',
  devtool: 'eval',
  mode: 'development',
  devServer: {
    stats: 'minimal',
    hotOnly: true,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('./config/dev.env')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunksSortMode(a, b) {
        const order = ['plugins', 'bundle'];
        return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
      }
    }),
    new WebappWebpackPlugin(webAppPluginConfig),
    new CopyWebpackPlugin(copyPluginPatterns),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  watchOptions: {
    ignored: [/node_modules([\\]+|\/)+(?!mobius-network)/]
  }
});
