const PATHS = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  context: PATHS.src,
  entry: './index',
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.(s[ca]ss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ]
      },
      { 
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/, 
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ], 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.src + '/tempate.html',
      favicon: PATHS.src + '/assets/icons/favicon.png',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    contentBase: PATHS.src,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  }
}