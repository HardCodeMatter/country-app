const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name][hash].js'
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
                        '@routes': path.resolve('src/routes'),
                        '@utils': path.resolve('src/utils'),
                        '@constants': path.resolve('src/constants'),
                    }
                },
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                resolve: {
                    extensions: ['', '.css', '.scss'],
                    alias: {
                        '@styles': path.resolve('src/styles'), 
                    }
                },
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg)/,
                resolve: {
                    extensions: ['.jpg', '.png', '.svg'],
                    alias: {
                        '@assets': path.resolve('src/assets'),
                        '@images': path.resolve('src/assets/images')
                    }
                },
                use: 'file-loader'
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
