const CONFIG = require('./config');

module.exports = {
  devServer: {
    proxy: CONFIG.proxyTable,
  },
};
