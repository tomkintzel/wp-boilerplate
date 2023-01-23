const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/js/index.js',
        admin: './src/js/admin.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '',
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/[name].css'
        })
    ]
}
