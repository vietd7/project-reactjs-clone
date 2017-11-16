"use strict";

const Path = require("path");
const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const WebpackConfig = require("./webpack.config");

const DEV_SERVER_PORT = process.env.PORT;

new WebpackDevServer(Webpack(WebpackConfig), {
    publicPath: WebpackConfig.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: "./assets",
    stats: {
        colors: true,
        chunks: false
    },
    disableHostCheck: true
}).listen(DEV_SERVER_PORT, "0.0.0.0", function(err, result) {
    if (err) {
        return console.log(err);
    }
    console.log("Listening at http://0.0.0.0:" + DEV_SERVER_PORT + "/");
});
