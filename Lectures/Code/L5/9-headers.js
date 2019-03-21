'use strict'

const http = require('http')

const server = http.createServer((request, response) => {
  const headers = request.headers
  console.log(headers)
  console.log(request.rawHeaders)
  console.log(headers['user-agent'])
  response.end('End')
})
server.listen(8080)
