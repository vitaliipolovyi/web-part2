'use strict';

const express = require('express');
const userRoutes = require('./routes/userErr');
const { host, port } = require('./config');

const app = express();

app.use('/user', userRoutes);

// simple logger for this router's requests
// all requests to this router will first hit this middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
