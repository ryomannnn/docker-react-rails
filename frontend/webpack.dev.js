const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    },
    devServer: {
        hot: true,
        open: true,
        port: 3000,
        host: '0.0.0.0',
    },
});