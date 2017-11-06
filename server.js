/* simple https + http express */

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

httpServer = () => {
  const httpApp = express();
  // redirect to https app
  httpApp.get('*', (req, res, next) => {
    res.redirect('https://' + req.get('host') + req.originalUrl);
    next()
  });
  http.createServer(httpApp).listen(80, () => {console.log('HTTP listening port 80...')});
}

httpsServer = () => {
  const httpsApp = express();
  
  // set static folder
  httpsApp.use(express.static('static'))

  // https config
  const credentials = {
    cert: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/privkey.pem')
  };

  https.createServer(credentials, httpsApp).listen(443, () => {console.log('HTTPS listening port 443...')});
}

httpServer();
httpsServer();
