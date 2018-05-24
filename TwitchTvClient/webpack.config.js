const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPugin = require('html-webpack-plugin');
const $ = require('jquery');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPugin({
            title: 'FFC Twitch',

        }),
    ]
};