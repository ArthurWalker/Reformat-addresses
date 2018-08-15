require("dotenv").config();
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "eval",
  devServer: {
    env: process.env.NODE_ENV,
    hot: true,
    quiet: true
  },
  entry: {
    client: [
      'webpack-hot-middleware/client',
      './webapp/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, "client"),
    filename: "[name].bundle.js",
    publicPath: "/js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      env: process.env.NODE_ENV
    }),
    new webpack.IgnorePlugin(/vertx/)
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot-loader/babel", "babel-loader"],
        exclude: "/node_modules",
        include: path.join(__dirname, "./webapp")
      },{
        test: /\.jsx$/,
        loaders: ["react-hot-loader/babel", "babel-loader"],
        exclude: "/node_modules",
        include: path.join(__dirname, "./webapp")
      },
      {
        test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader",
        include: path.join(__dirname, "./webapp")
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.css$/,
        loaders: "style-loader!css-loader"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
