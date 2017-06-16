/*
* @Author: Administrator
* @Date:   2017-06-16 14:55:19
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-16 16:39:46
*/

'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
    entry: {
    	'common'    : ['./src/page/common/index.js'],
    	'index' 	: ['./src/page/index/index.js'],
    	'user-login': ['./src/page/user-login/index.js'],
    },
    output: {
        path: './dist',
        publicPath : '/dist',
        filename: "js/[name].js"
    },
    externals : {
    	'jquery' : 'window.jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader","css-loader") }
        ]
    },
    plugins : [
    	new webpack.optimize.CommonsChunkPlugin({
  		name : "common",
  		filename : "js/base.js",
	}),
    	new ExtractTextPlugin("css/[name].css"),
    ]
    
};
module.exports = config;