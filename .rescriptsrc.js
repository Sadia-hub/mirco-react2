const { name } = require('./package.json');

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `chunkLoadingGlobal_${name}`;
    config.output.globalObject = 'window';
    return config;
  },

  devServer: (config) => {
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.static = false;
    config.liveReload = false;

    return config;
  },
};