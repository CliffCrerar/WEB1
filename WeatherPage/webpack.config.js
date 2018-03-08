const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const $ = require('jquery');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    //devtool: 'inline-source-map',
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
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },

        ]
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "FCC Weather",
            favicon: './655415.png'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};