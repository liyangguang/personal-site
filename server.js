// simple https + http express
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// set static folder
app.use(express.static('static'))

// set up https
const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/liyangguang.com/privkey.pem')
};

app.listen(80);
https.createServer(options, app).listen(443);
