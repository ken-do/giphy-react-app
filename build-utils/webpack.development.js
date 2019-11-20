const webpack = require('webpack')

module.exports = () => ({
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
