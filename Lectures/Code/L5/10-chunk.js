'use strict';

const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  request
    .on('data', (chunk) => {
      // console.log(chunk)
      console.log(Buffer.from(chunk).length);
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      // console.log(body);
    });
});
server.listen(8080);
