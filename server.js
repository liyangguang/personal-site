/* simple https + http express */
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const IS_DEV = process.env.ENV === 'dev';

httpServer = () => {
  const httpApp = express();
  if (!IS_DEV) {
    // redirect to https app
    httpApp.get('*', (req, res, next) => {
      res.redirect('https://' + req.get('host') + req.originalUrl);
      next()
    });
  }
  else {
    httpApp.use(express.static('dist'));
  }
  const port = process.env.PORT || 80;
  http.createServer(httpApp).listen(port, () => {console.log(`HTTP listening port ${port}...`)});
}

httpsServer = () => {
  const HTTP_CREDETIENS = {
    cert: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/privkey.pem')
  };
  
  const httpsApp = express();
  httpsApp.use(express.static('dist'));
  https.createServer(HTTP_CREDETIENS, httpsApp).listen(443, () => {console.log('HTTPS listening port 443...')});
}

httpServer();
if (!IS_DEV) httpsServer();
