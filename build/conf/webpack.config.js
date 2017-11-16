var CopyWebpackPlugin = require('copy-webpack-plugin');
let Path = require("path")

module.exports = {
    entry: ['./src/index.jsx'],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.s?css$/,
                loaders: ["style-loader", "css-loader", 'sass-loader']
            }, {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: "url-loader?name=images/[name].[ext]&limit=10000"
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=/fonts/[name].[ext]&limit=10000'
            }

        ]

    },

    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.png'
        ]
    },
    output: {
        path: Path.resolve("build/dist"),
        filename: "bundle.js",
        publicPath: "/cashout-cplus/"
    },
    devServer: {
        // contentBase: './assets/',
        port: 7777,
        // hot: true
        publicPath: "/cashout-cplus/",
        hot: true,
        contentBase: "./assets",

        // historyApiFallback: true,
        //     stats: {
        //     colors: true,
        //     chunks: false
        // },
        // disableHostCheck: true,
        // inline: true,
    },
    plugins: [new CopyWebpackPlugin([
            {
                from: "./assets/",
                to: "./"
            }
        ]
        // , {
        //     ignore: [// Doesn't copy any files with a txt extension
        //         '*.txt'],
        //
        //     // By default, we only copy modified files during
        //     // a watch or webpack-dev-server build. Setting this
        //     // to `true` copies all files.
        //     copyUnmodified: true
        // }
        )],
    devtool: 'inline-source-map'

}
