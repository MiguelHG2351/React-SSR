
module.exports = function (api) {
  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = [];

  if(api.env("development")) {
    // react refresh
    plugins.push("react-refresh/babel");
  }
  return {
    presets,
    plugins,
  };
};
