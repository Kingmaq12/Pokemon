const { ModuleFederationPlugin } = require('webpack').container;
const DefinePlugin = require('webpack').DefinePlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const envConfig = require('./config').envConfig;

module.exports = {
    entry: './src/Main',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3006,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'Pokemon',
            filename: 'remoteEntry.js',
            exposes: {
                './Main': './src/Main',
                './routes': './src/navigation/routes',
            },
            shared: {
                'react-dom': {
                    singleton: true,
                },
                react: {
                    singleton: true,
                },
                'react-router-dom': {
                    singleton: true,
                },
            },
        }),
        new ESLintPlugin(),
        new DefinePlugin({
            'process.env': JSON.stringify(envConfig.parsed),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].min.css',
        }),
    ],
};
