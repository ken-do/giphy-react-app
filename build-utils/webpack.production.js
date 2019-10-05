const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = () => ({
  devtool: 'nosource-source-map',
  output: {
    filename: 'production.js',
    chunkFilename: 'chunk-[name].[contenthash].js',
    publicPath: path.join(path.resolve(__dirname, '..', 'build'), '/')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps for css
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
})
