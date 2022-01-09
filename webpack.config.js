const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./index.js",
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: { name: "pageLoader", type: "umd" },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
