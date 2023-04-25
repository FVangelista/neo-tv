const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const isDev = process.env.NODE_ENV === "production";

module.exports = {
  mode: isDev ? "development" : "production",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  devtool: "eval-source-map",
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["css-loader"] },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
    hot: true,
    open: "/",
    compress: true,
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: "src/pages/home/index.html",
        search: "src/pages/search/search.html",
      },
      js: {
        inline: true,
      },
      css: {
        inline: true,
      },
    }),
    new Dotenv(),
  ],

  performance: { hints: false },
};
