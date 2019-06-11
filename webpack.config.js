const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path'),
    srcPath = path.join(__dirname, './src'),
    outputPath = path.join(__dirname, '../SmartFood/main/static/');

console.log(outputPath);

module.exports = {
    optimization: {
        minimize: false
    },
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    entry: {
        test: [path.join(srcPath, '/index.js')]
    },
    watch: true,
    context: srcPath,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};