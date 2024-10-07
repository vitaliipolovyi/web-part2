const http = require('http');

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on('error', (err) => {
        console.error(err);
      })
      .on('data', (chunk) => {
        console.log('Chunk received', chunk);
        console.log(Buffer.concat([chunk]).byteLength);
        body.push(chunk);
        throw new Error('aaa');
      })
      .on('end', () => {
        console.log('All data received');
        body = Buffer.concat(body).toString();

        response.on('error', (err) => {
          console.error(err);
        });

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');

        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
      });
  })
  .listen(8080);
