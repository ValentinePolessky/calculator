const webpack = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  config.plugins = (config.plugins || []).concat([
    // plugin is used to hide internal warnings for jison library
    new webpack.ContextReplacementPlugin(
      /(.+)?jison(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]);
  return config;
};
