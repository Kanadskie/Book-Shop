const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path")

module.exports = {

  mode: "production",

  entry: './src/js/index.js',

  output: {

    filename: 'main.js',

    path: path.resolve(__dirname, "dist"),

    assetModuleFilename: path.join('images', '[name]'),

  },

  devServer: {

    watchFiles: path.join(__dirname, "./src"),

    static: {

      directory: path.join(__dirname, "./dist"),

    },

    port: 9000

  },

  optimization: {

    splitChunks: {

      cacheGroups: {

        libs: {

          name: "libs",
          test: /node_modules/,
          chunks: "all",
          enforce: true

        }

      }

    }

  },

  module: {

    rules: [

      { 

        test: /\.css$/,
        use: [
                MiniCssExtractPlugin.loader, 
                
                'css-loader',

                "postcss-loader"
              
              ]

      },

      {

        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: path.join('images', '[name][ext]'),
        },

      },

      {

        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('images/icons', '[name][ext]'),
        },

      },
      
    ]

  },

  optimization: {

    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ]

  },

  plugins:  [new MiniCssExtractPlugin(), 

              new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'template.html'),
                filename: 'index.html',
              }), 
              
              new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
              }),
            
            ]

}