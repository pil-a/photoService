"use strict";

var config = require('./config');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'inline-source-map',
  entry : config.path.entryScript,
  output: {
      filename: config.path.bundle
  },
  resolve: {
    extensions: ['', '.js'],
    moduleDirectories: ['./node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015,plugins[]=transform-es2015-classes,plugins[]=transform-react-jsx'],
        exclude: /(node_modules)/,
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
}
