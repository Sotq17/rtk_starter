const webpack = require('webpack')
const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')

module.exports = (env, options) => ({
  devtool: options.mode === 'development' ? 'source-map' : false,
  devServer: {
    contentBase: options.mode === 'development' ? './dist' : './build',
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: 'index.html' }],
    },
    disableHostCheck: true,
    hot: true,
  },

  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    `${path.join(__dirname, 'src')}/tsx/index.tsx`,
  ],
  output: {
    path: `${__dirname}/${options.mode === 'development' ? 'dist' : 'build'}/`,
    filename: 'js/[name].js',
    publicPath: '/',
  },
  target: options.mode === 'development' ? 'web' : ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.ts[x]?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: true,
            // babelrc: false,
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: options.mode === 'production' ? { pretty: true } : {},
        },
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    modules: [`${__dirname}/src`, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackplugin({
      template: './src/pug/index.pug',
      favicon: './src/img/common/favicon.png',
    }),
  ],
})
