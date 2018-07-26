const { resolve } = require('path');

const root = resolve(__dirname, '..');

const baseConfig = {
  context: resolve(root, 'src'),
  entry: {
    bundle: './index.js',
    plugins: './plugins.js',
  },
  output: {
    filename: '[name].js',
    path: resolve(root, 'dist'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.js'],
    modules: [resolve(root, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          resolve(root, 'src'),
          resolve(root, 'node_modules', 'js-xdr'),
          resolve(root, '../core/src'),
          resolve(root, '../components/src'),
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
  node: {
    fs: 'empty',
  },
};

const webAppPluginConfig = {
  logo: './favicons/master-favicon.png',
  prefix: 'images/favicons/',
  inject: true,
  favicons: {
    appDescription: 'Mobius DApp Store',
    appName: 'DApp Store',
    developerURL: null,
    orientation: 'portrait',
    start_url: 'https://store.mobius.network',
    theme_color: '#3894E6',
    icons: {
      appleIcon: {
        offset: 8.8,
      },
      appleStartup: false,
      coast: false,
      firefox: false,
      yandex: false,
    },
  },
};

const copyPluginPatterns = [
  {
    from: './favicons/safari-pinned-tab.svg',
    to: 'images/safari-pinned-tab',
    toType: 'file',
  },
];

module.exports = {
  baseConfig,
  copyPluginPatterns,
  webAppPluginConfig,
};
