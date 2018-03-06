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
            //{ test: /\.css$/, use: ['style-loader', 'css-loader'] }, //css loader
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, // filer loader
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }, //font loader
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }

        ]
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "FCC Weather",

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