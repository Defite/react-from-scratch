const webpack = require('webpack');
const path = require('path');

const HtmlWebpack = require('html-webpack-plugin');
const _ExtractTextPlugin = require('extract-text-webpack-plugin');


const DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    // 'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    'NODE_ENV': JSON.stringify('development')
  }
});

const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: true
    }
});

const HtmlWebpackPlugin = new HtmlWebpack({
    template: path.join(__dirname, '../public/index.html'),
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = new _ExtractTextPlugin('bundle.css');

const NamedModulesPlugin = new webpack.NamedModulesPlugin();
const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  DefinePlugin: DefinePlugin,
  UglifyJsPlugin: UglifyJsPlugin,
  HtmlWebpackPlugin: HtmlWebpackPlugin,
  ExtractTextPlugin: ExtractTextPlugin,
  NamedModulesPlugin: NamedModulesPlugin,
  HotModuleReplacementPlugin: HotModuleReplacementPlugin
}
