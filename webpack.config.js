const WebpackShellPlugin = require('webpack-shell-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = function(env) {
    return {
        entry: {
            module: ['./src/main/one'],
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.ts']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader'
                }
            ]
        },
        target:'web'
    }
};


