const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, use: "awesome-typescript-loader" },

            // All files with a '.js' or '.jsx' extention will be handled by 'babel-loader'
            { test: /\.jsx?$/, loader: "babel-loader", query: { presets: ['es2017', 'react', 'stage-2'] } },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, use: "source-map-loader" },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
};