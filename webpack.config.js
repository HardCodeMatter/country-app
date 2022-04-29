const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules',
                resolve: {
                    extensions: ['', '.js', '.jsx'],
                    alias: {
                        '@containers': path.resolve('src/containers'),
                        '@components': path.resolve('src/components'),
                    }
                },
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                resolve: {
                    extensions: ['', '.css', '.scss']
                },
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
