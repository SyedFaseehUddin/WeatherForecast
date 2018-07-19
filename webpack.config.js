var path = require("path");

const DIST_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "client");

const config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/build",
        filename: "bundle.js",
        publicPath: "/build/",
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;