const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    mode:'development',
    entry: ["@babel/polyfill", "./src"],
    output: {
         // `filename` provides a template for naming your bundles (remember to use `[name]`)
        filename: '[name].bundle.js',
        // `chunkFilename` provides a template for naming code-split bundles (optional)
        chunkFilename: '[contenthash].bundle.js',
        // `path` is the folder where Webpack will place your bundles
        // output path is required for `clean-webpack-plugin`
        path: path.resolve(__dirname, "dist"),
        // this places all images processed in an image folder
        assetModuleFilename: "images/[hash][ext][query]",
      },

    module:{
        rules:[
            //rules to allow image types tobe compiled
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
            //rules for css/sass/scss compile 
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    // This is required for asset imports in CSS, such as url()
                    options: { publicPath: "" },
                },
                "css-loader",
                "postcss-loader",
                // according to the docs, sass-loader should be at the bottom, which
                // loads it first to avoid prefixes in your sourcemaps and other issues.
                "sass-loader",
                ],
            },
            //rules for React and es6 compiler
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                },
            }
        ]
    },

    //load plugins
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            fix:true,
            context:'./src',
        }),
    ],

    //allows webpack to reconize the .jsx extension
    resolve: {
        extensions: [".js", ".jsx"]
    },

    //rules for dev set up
    devtool:"source-map",
    devServer: {
        contentBase:"./dist",
        hot:true,
        writeToDisk:true,
        open: 'chrome'
    }
}