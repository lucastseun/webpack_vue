const path = require('path');
const baseConf = require('./base.conf');
module.exports = {
    mode: 'development',
    ...baseConf,
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: [
            path.join(__dirname, '../src/mock')
        ],
        overlay: true,
        hot: true,
        open: true,
        openPage: [''],
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                //pathRewrite: { '^/api': '' },
            }
        }
    }
};