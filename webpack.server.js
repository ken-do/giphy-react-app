const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpackMerge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env)
const mode = process.env.NODE_ENV || 'development'

module.exports = () => {
    return webpackMerge(
        {
            entry: './server/index.js',
            target: 'node',
            externals: [nodeExternals()],
            output: {
                path: path.resolve('server-build'),
                filename: 'index.js',
            },
            module: {
                rules: [
                    {
                        test: /\.jpe?g|png|gif$/,
                        exclude: /node_modules/,
                        loader: ['url-loader', 'file-loader'],
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                        },
                    },
                    {
                        test: /\.sa?css$/,
                        use: ['css-loader', 'sass-loader'],
                    },
                ],
            },
            plugins: [
                new Dotenv(),
                new CleanWebpackPlugin(),
                new HtmlWebPackPlugin({
                    template: './src/index.html',
                    filename: './index.html',
                }),
            ],
        },
        modeConfiguration(mode),
    )
}
