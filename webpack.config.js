const path = require('path')
const webpackMerge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = (env, argv) => {
    const mode = argv.mode
    return webpackMerge(
        {
            mode,
            entry: './src/index.js',
            devServer: {
                hot: true,
                open: true,
            },
            output: {
                publicPath: '/',
                path: path.resolve(__dirname, 'build'),
                filename: 'bundled.js',
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
                        use: ['style-loader', 'css-loader', 'sass-loader'],
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
