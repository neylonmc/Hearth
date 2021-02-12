const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    function () {
      
    
    createProxyMiddleware.target('http://localhost:3001');
    createProxyMiddleware.changeOrigin(true);
    }
    );
};