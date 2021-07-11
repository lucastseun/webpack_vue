const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css|less)$/i,
                use: [
                  // compiles Less to CSS
                  'vue-style-loader',
                  'style-loader',
                  'css-loader',
                  'less-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            template: path.resolve(__dirname, '../public/index.html'),
            hash: true
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
};
