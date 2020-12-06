const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production  배포용
  devtool: "eval", // hidden-source-map  //개발자 도구에서 노출이된다. hidden 꼭 써야한다.
  resolve: {
    extensions: [".jsx", ".js", ".tsx", "ts"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    historyApiFallback: true,
    port: 9000,
    publicPath: "/dist/",
    proxy: {
      "/api/": {
        target: "백엔드주소",
        changeOrigin: true,
      },
    },
  },
};
