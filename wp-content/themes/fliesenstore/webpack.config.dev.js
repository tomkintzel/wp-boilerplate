const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');


module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                  loader: "css-loader",
                  options: {
                      importLoaders: 3,
                      sourceMap: true,
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
                  },
                  sourceMap: true
                }
                },
              {
                  loader: "sass-loader",
                  options: {
                      sourceMap: true
                  }
              },
          ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
  ]

  }
})
