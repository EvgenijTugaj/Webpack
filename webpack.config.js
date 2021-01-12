const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

module.exports = {
  entry: {
    main: PATHS.src
  },
  output: {
    filename: '[name].js',
    path: PATHS.dist
  },
  module: {
    rules: [{
       test:/\.(s*)css$/,
       use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
       ]
    }]
 },
 plugins: [
    new miniCss({
       filename: 'main.css',
    }),
    new CleanWebpackPlugin()
 ]
}