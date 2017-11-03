const path = require('path');
const webpack = require('webpack');
const plugins = require('./webpack/plugins');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  devServer: {
    contentBase: './public/',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: plugins.ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    importLoaders: 1,
                    camelCase: 'dashes',
                    localIdentName: '[local]--[hash:base64:6]' //'[hash:base64:6]'
                  }
              },
              'postcss-loader'
            ]
        })
      }
    ]
  },
  plugins: [
    plugins.DefinePlugin,
    plugins.HtmlWebpackPlugin,
    plugins.ExtractTextPlugin,
    plugins.NamedModulesPlugin,
    plugins.HotModuleReplacementPlugin
  ]
};
