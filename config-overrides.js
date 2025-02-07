const WebpackObfuscator = require('webpack-obfuscator');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new WebpackObfuscator(
        {
          rotateStringArray: true,
          stringArray: true,
          stringArrayThreshold: 0.75
        },
        ['excluded_bundle_name.js'] // Exclude some files if necessary
      )
    );
  }

  return config;
};
