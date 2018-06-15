const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('lodash');
const HoneybadgerSourceMapPlugin = require('@honeybadger-io/webpack');

const { baseConfig, webAppPluginConfig, copyPluginPatterns } = require('./config/webpack.base.config');
const env = require('./config/prod.env');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].js.map',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunksSortMode (a, b) {
        const order = ['vendors', 'plugins', 'bundle'];
        return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
      },
    }),
    new WebappWebpackPlugin(webAppPluginConfig),
    new CopyWebpackPlugin(copyPluginPatterns),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new HoneybadgerSourceMapPlugin({
      apiKey: JSON.parse(env.HONEYBADGER_API_TOKEN),
      assetsUrl: 'https://store.mobius.network',
      revision: JSON.parse(env.COMMITHASH),
    }),
  ],
});
