const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode } = { mode: 'production' }) => {
  return webpackMerge(
    {
      mode,
      entry: './src/index.js',
      devServer: {
        hot: true,
        open: true
      },
      output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundled.js'
      },
      module: {
        rules: [
          {
            test: /\.jpe?g|png$/,
            exclude: /node_modules/,
            loader: ['url-loader', 'file-loader']
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      plugins: [
        new Dotenv(),
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
      ]
    },
    modeConfiguration(mode)
  )
}
