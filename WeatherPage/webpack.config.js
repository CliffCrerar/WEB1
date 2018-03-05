const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const $ = require('jquery');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //css loader
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, // filer loader
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }, //font loader
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                }, ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: true
                    }
                }],
            },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
        ]
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default'],
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};