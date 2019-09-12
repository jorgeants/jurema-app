const proxy = require('http-proxy-middleware');

const socialProgramBaseUrl = process.env.REACT_APP_SOCIAL_PROGRAM_API_URL;

module.exports = function (app) {
  app.use('/api-de-dados', proxy({
    target: socialProgramBaseUrl,
    changeOrigin: true,
  }));
};
