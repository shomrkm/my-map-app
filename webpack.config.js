const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    open: true,
    port: 3000
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200,
    poll: 1000,
  },
};