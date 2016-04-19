var webpack = require('webpack');

var entry = './src/scripts/main.js',
    output = {
        path: __dirname,
        filename: 'main.js'
    };

module.exports.development = {
    debug: true,
    devtool: 'eval',
    entry: entry,
    output: output,
    plugins: [
        new webpack.optimize.DedupePlugin()
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};

module.exports.production = {
    debug: false,
    entry: entry,
    output: output,
    plugins: [
        new webpack.optimize.DedupePlugin()
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
