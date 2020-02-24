const webpack = require('webpack')

module.exports = () => ({
    devtool: 'cheap-module-eval-source-map',
    optimization: {
        usedExports: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
})
