/**
 * A simple express server.
 * - http and https
 * - vue app and vuepress
 */

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const IS_PROD = process.env.ENV !== 'dev';  // From npm script
const HTTPS_DIR = '/etc/letsencrypt/live/liyangguang.com';
const HTTPS_CERT_PATH = `${HTTPS_DIR}/fullchain.pem`;
const HTTPS_KEY_PATH = `${HTTPS_DIR}/privkey.pem`;

const _constructServer = (app) => {
  const VUE_APP_PATH = 'dist';
  const BLOG_PATH = '/blog';
  const VUE_PRESS_PATH = `${BLOG_PATH}/.vuepress/dist`;

  app.use(BLOG_PATH, express.static(__dirname + VUE_PRESS_PATH));
  app.use(express.static(VUE_APP_PATH));
  app.use((req, res) => {
    if (req.path.startsWith(BLOG_PATH)) {
      res.sendFile(`/${VUE_PRESS_PATH}/404.html`, {root: __dirname});
    } else {
      res.sendFile(`/${VUE_APP_PATH}/404.html`, {root: __dirname});
    }
  });
};

const startHttpServer = () => {
  const httpApp = express();
  if (IS_PROD) {
    // redirect to https app
    httpApp.get('*', (req, res, next) => {
      res.redirect('https://' + req.get('host') + req.originalUrl);
      next()
    });
  }
  else {
    _constructServer(httpApp);
  }
  const port = process.env.PORT || 80;
  http.createServer(httpApp).listen(port, () => {console.log(`HTTP listening port ${port}...`)});
};

const startHttpsServer = () => {
  const HTTP_CREDETIENS = {
    cert: fs.readFileSync(HTTPS_CERT_PATH),
    key: fs.readFileSync(HTTPS_KEY_PATH),
  };
  
  const httpsApp = express();
  _constructServer(httpsApp);
  https.createServer(HTTP_CREDETIENS, httpsApp).listen(443, () => {console.log('HTTPS listening port 443...')});
};

const start = () => {
  startHttpServer();
  if (IS_PROD) startHttpsServer();
};

start();
