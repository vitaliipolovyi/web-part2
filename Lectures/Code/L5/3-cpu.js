'use strict';

const http = require('http');
const sleep = require('system-sleep');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
  } else {
    sleep(10000);
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
