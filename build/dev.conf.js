const baseConf = require('./base.conf');
console.log(baseConf)
module.exports = {
    mode: 'development',
    ...baseConf,
    devtool: 'inline-source-map',
    devServer: {
        overlay: true,
        hot: true,
        open: true,
        openPage: [''],
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                // pathRewrite: { '^/api': '' },
            }
        }
    }
};