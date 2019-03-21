'use strict'

const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.method)
  console.log(request.url)
})
server.listen(8080)
