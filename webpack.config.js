var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: './index.js',
    output:{
        path: path.join(__dirname, "./dist/"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js)$/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode:'development',

    plugins:[
            new HtmlWebpackPlugin({
                template:'./src/index.html'
            })
        ]
}