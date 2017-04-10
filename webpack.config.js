'use strict';

const path = require('path');

const APP_DIR   = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'web');
const NODE_DIR   = path.resolve(__dirname, 'node_modules');
const SRC_DIR   = path.resolve(__dirname, 'src');

module.exports = {
    entry: path.resolve(SRC_DIR, 'index.jsx'),
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.js$/,   include : [APP_DIR, SRC_DIR, NODE_DIR], loader : 'babel-loader' },
            { test: /\.jsx$/,  include : [APP_DIR, SRC_DIR, NODE_DIR], loader : 'babel-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};