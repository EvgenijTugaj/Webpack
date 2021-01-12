const webpackBase = require('./base')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackProduct = merge(webpackBase, {
  mode: 'production',
  module: {
    rules: [
        {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 2,
                    sourceMap: false,
                  }
                },
                {
                  loader: 'clean-css-loader',
                  options: { level: 2 }
                },
                'sass-loader'
            ]
        }
    ]
  },
  plugins: [
      new CleanWebpackPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(webpackProduct)
})