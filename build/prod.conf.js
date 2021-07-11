const path = require('path');
const baseConf = require('./base.conf');
console.log(baseConf)
module.exports = {
    mode: 'production',
    ...baseConf
};