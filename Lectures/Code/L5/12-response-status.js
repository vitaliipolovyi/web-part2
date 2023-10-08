'use strict'

const http = require('http')

const server = http.createServer((request, response) => {
  //response.statusCode = 200
  //response.statusCode = 404
  response.statusCode = 302
  response.setHeader('Location', 'https://google.com')
  response.end()
})
server.listen(8080)
