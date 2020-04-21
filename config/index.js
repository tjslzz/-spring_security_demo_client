const CONFIG = {
  proxyTable: {
    '/api/client': {
      target: 'http://client.server.com:8003',
      changeOrigin: true,
      pathRewrite: {
        '^/api/client': '/',
      },
    },
  },
};

module.exports = CONFIG;