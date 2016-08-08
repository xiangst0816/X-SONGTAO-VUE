var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var webpack = require("webpack")
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            "jquery": path.resolve(__dirname, '../node_modules/jquery/dist/jquery.slim.min.js'),
            //插件位置
            "bootstrap": path.resolve(__dirname, '../src/plugin/bootstrap'),
            "bootstrap-datetimepicker": path.resolve(__dirname, '../src/plugin/bootstrap-datetimepicker'),
            "bootstrap-multiselect": path.resolve(__dirname, '../src/plugin/bootstrap-multiselect'),
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        // preLoaders: [
        //   {
        //     test: /\.vue$/,
        //     loader: 'eslint',
        //     include: projectRoot,
        //     exclude: /node_modules/
        //   },
        //   {
        //     test: /\.js$/,
        //     loader: 'eslint',
        //     include: projectRoot,
        //     exclude: /node_modules/
        //   }
        // ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        loaders: utils.cssLoaders()
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
        })
    ]
}
