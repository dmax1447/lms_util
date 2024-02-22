const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "lms",
    projectName: "util",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      libraryTarget: "system",
    },
    devServer: {
      port: 8010,
    },
    externalsType: "script",
    externals: [/^@lms\/.+/],
    // modify the webpack config however you'd like to by adding to this object
  });
};
