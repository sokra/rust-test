const path = require("path");
module.exports = {
    output: {
        publicPath: "dist/"
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ]
    },
    module: {
        rules: [
            {
                test: /\.rs$/,
                loader: "rust-native-wasm-loader",
                options: {
                    wasmBindgen: {
                        typescript: true
                    }
                }
            }
        ]
    }
}