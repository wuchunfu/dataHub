const path = require("path");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
module.exports = {
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        postcssLoaderOptions.postcssOptions.plugins = [
          ...postcssLoaderOptions.postcssOptions.plugins,
          [
            "autoprefixer",
            {
              overrideBrowserslist: [
                "last 2 version",
                ">1%",
                "Android >= 4.0",
                "iOS >= 7",
              ],
            },
          ],
          [
            "postcss-pxtorem",
            {
              rootValue:42,
              unitPrecision: 2, //只转换到两位小数
              propList: ["*"],
            },
          ],
        ];
        return postcssLoaderOptions;
      },
    },
  },
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@router": path.resolve(__dirname, "src/router"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
};
