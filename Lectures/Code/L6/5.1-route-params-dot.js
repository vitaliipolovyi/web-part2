'use strict';

const express = require('express');
const app = express();
const { host, port } = require('./config');

// http://localhost:8080/entity/ref.ships
app.get('/entity/:type.:id', function (req, res) {
  console.log(req.params);
  res.send(req.params);
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
