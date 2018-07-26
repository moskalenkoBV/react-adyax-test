const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const NodeSassGlobImporter = require('node-sass-glob-importer');

const HtmlWebPackPluginObject = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const autoprefixerObject = new autoprefixer({
  'browsers': [
    '>2%',
    'last 2 versions',
    'not ie < 9'
  ],
  flexbox: 'no-2009'
});

const ExtractTextWebpackPluginObject = new ExtractTextWebpackPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: process.env.PORT || 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextWebpackPlugin.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixerObject
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              importer: NodeSassGlobImporter()
            }
        }])
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/images/[name].[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [HtmlWebPackPluginObject, ExtractTextWebpackPluginObject]
};