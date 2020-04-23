const CONFIG = require('./config');

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: CONFIG.PORT,
    host: CONFIG.HOST,
    proxy: CONFIG.proxyTable,
  },
};
