"use strict";
const { VueLoaderPlugin: e } = require("vue-loader");
module.exports = (s, u) => ({
  name: "docusaurus-plugin-usevue",
  configureWebpack: (s, u, r) => ({
    module: {
      rules: [
        { test: /\.vue$/, use: ["vue-loader"] },
        {
          test: /\.scss$/,
          use: ["vue-style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [new e()],
  }),
});
