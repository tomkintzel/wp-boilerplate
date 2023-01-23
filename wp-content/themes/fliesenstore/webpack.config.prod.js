const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    {
                      loader: "css-loader",
                      options: {
                          importLoaders: 3,
                          url: false,
                      }
                  },
                    {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: () => [
                              require('autoprefixer')
                            ]
                          }
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin()
        ],
      },
})
