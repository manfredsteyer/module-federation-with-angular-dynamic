
var merge = require('webpack-merge');
var webpack = require('webpack');
var config = require('./webpack.config');
 
exports.default = {
    config: function(cfg) {
        const strategy = merge.strategy();
 
        const result = strategy (cfg, config);
        delete result.optimization;
        return result;
    }
}