'use strict';

const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  console.log(request.httpVersion);
  console.log(response.statusCode);
  console.log(response.statusMessage);
  response.write('Help');
  response.end();
});
server.listen(8080);
