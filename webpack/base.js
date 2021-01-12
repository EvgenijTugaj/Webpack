const PATHS = require('./paths')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = {
  entry: {
    main: PATHS.src
  },
  output: {
    filename: '[name].js',
    path: PATHS.dist
  },
  plugins: [
    // new CleanWebpackPlugin()
    // new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}