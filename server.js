/* simple https + http express */
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const IS_DEV = process.env.ENV === 'dev';  // From npm script


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

const httpServer = () => {
  const httpApp = express();
  if (!IS_DEV) {
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
}

const httpsServer = () => {
  const HTTP_CREDETIENS = {
    cert: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/privkey.pem')
  };
  
  const httpsApp = express();
  _constructServer(httpsApp);
  https.createServer(HTTP_CREDETIENS, httpsApp).listen(443, () => {console.log('HTTPS listening port 443...')});
}

httpServer();
if (!IS_DEV) httpsServer();
