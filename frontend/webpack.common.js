const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'initial',
    //         cacheGroups: {
    //             vendor: {
    //                 test: /node_modules/,
    //                 name: 'vendor',
    //             },
    //             ownModules: {
    //                 test: /src[\\/]js[\\/]modules/,
    //                 name: 'own-modules',
    //                 minSize: 0,
    //                 minChunks: 2,
    //             },
    //         },
    //     },
    // },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env"],
                            [
                                "@babel/preset-react", {
                                    "runtime": "automatic"
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                generator: {
                    filename: `./image/[name].[contenthash][ext]`,
                },
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            chunks: ['index'],
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash].css',
        }),
    ],
};