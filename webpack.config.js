const path = require('path');

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    mode: mode,

    // entry: "./src/index.js",

    // output: {
    //     filename: "bundle.js",
    //     path: path.resolve(__dirname, 'public')
    // },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings, this will reference .bablerc
                    loader: "babel-loader"
                }
            }
        ]
    },

    devtool: "source-map",

    // reqired when using webpack-dev-server
    devServer: {
        // contentBase: "./public", for entry and output 
        contentBase: "./dist"

    }
}