const { resolve } = require('path');

const root = resolve(__dirname, '..');

module.exports = {
  context: resolve(root, 'src'),
  entry: [resolve(root, 'src', 'index.js')],
  output: {
    filename: 'bundle.js',
    path: resolve(root, 'dist'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.js'],
    modules: [resolve(root, 'src'), 'node_modules'],
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: [
        resolve(root, 'src'),
        resolve(root, 'node_modules', 'js-xdr'),
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
      include: /flexboxgrid/,
    },
    ],
  },
  node: {
    fs: 'empty',
  },
};
