'use strict';

const path = require('path');
const express = require('express');

const app = express();
const { host, port } = require('./config');

app.use(express.static(path.join(__dirname, 'public')));

// The name of route parameters must be made up of “word characters” ([A-Za-z0-9_])

app.all('/secret', function (req, res, next) {
  console.log('1');
  // console.log(req.query.filter);
  res.send(req.query);
  next();
});

app.get('/secret', function (req, res, next) {
  console.log('GET');
  next();
});

app.all('/secret/:key', function (req, res, next) {
  res.send(req.params);
  next();
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
