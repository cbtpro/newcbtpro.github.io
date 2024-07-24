const { VueLoaderPlugin } = require("vue-loader");

module.exports = (content, options) => {
  console.log("content：", content)
  console.log("options：", options)
  return {
    name: "docusaurus-plugin-usevue",
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.ts$/,
              loader: "ts-loader",
              exclude: /node_modules/,
              options: {
                appendTsSuffixTo: [/\.vue$/]
              },
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader',
            },
            // 普通的 `.scss` 文件和 `*.vue` 文件中的
            // `<style lang="scss">` 块都应用它
            {
              test: /\.scss$/,
              use: [
                "vue-style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
          ],
        },
        plugins: [new VueLoaderPlugin()],
      };
    },
  };
};
