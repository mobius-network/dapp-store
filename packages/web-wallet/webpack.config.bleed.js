const { resolve } = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { webAppPluginConfig, copyPluginPatterns } = require('./config/webpack.base.config');

const config = {
  stats: 'minimal',
  devtool: 'eval',
  mode: 'development',

  context: resolve(__dirname, 'src'),

  entry: {
    bundle: resolve(__dirname, 'src', 'index.js'),
    plugins: resolve(__dirname, 'src', 'plugins.js'),
  },

  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },

  devServer: {
    stats: 'minimal',
    hotOnly: true,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
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
        },
        include: [
          resolve(__dirname, 'src'),
          resolve(__dirname, 'node_modules', 'js-xdr'),
          resolve(__dirname, '../core/src'),
          resolve(__dirname, '../components/src'),
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/png',
            name: 'images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'application/font-woff',
            name: 'fonts/[name].[ext]',
          },
        }],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'application/octet-stream',
            name: 'fonts/[name].[ext]',
          },
        }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            mimetype: 'image/svg+xml',
            name: 'images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('./config/dev.env'),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunksSortMode (a, b) {
        const order = ['plugins', 'bundle'];
        return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
      },
    }),
    new WebappWebpackPlugin(webAppPluginConfig),
    new CopyWebpackPlugin(copyPluginPatterns),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  node: {
    fs: 'empty',
  },

  watchOptions: {
    ignored: [
      /node_modules([\\]+|\/)+(?!mobius-network)/,
    ],
  },
};

module.exports = config;
