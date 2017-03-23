var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var commonConfig = require('./webpack.common')

var config = {
  target: 'web',
  cache: false,
  context: __dirname,
  debug: false,
  devtool: false,
  entry: ['../src/client.js'],
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'client.js',
    chunkFilename: '[name].[id].js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: '../src/static',
      to: '../static'   // copy to dist/views
    }]),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: false,
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ExtendedAPIPlugin(), // for __webpack_hash__
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new ExtractTextPlugin('../static/[name].css')
  ],
  node: {
    __dirname: true,
    fs: 'empty'
  }
}
Object.assign(config, commonConfig)

module.exports = config
