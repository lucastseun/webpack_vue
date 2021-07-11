const path = require('path');
const baseConf = require('./base.conf');
console.log(baseConf)
module.exports = {
    mode: 'development',
    ...baseConf,
    devtool: 'inline-source-map',
    devServer: {
        
    }
};