const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: "development",
  watch:true,
  devServer: {
    contentBase: path.join(__dirname, 'bundle'),
    compress: true,
    port: 9000,
    open: true,
    hot: true
  },
  devtool: 'source-map'
  };



module.exports = merge(commonConfig, devConfig);