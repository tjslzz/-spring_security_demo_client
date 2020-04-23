const CONFIG = {
  PORT:8080,
  HOST:'client.server.com',
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