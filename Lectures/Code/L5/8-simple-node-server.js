'use strict'

const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.method)
  console.log(request.url)
  console.log(request.httpVersionMajor)
  console.log(request.statusCode)
  console.log(request.statusMessage)
})
server.listen(8080)
