'use strict'

const http = require('http')

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('X-Powered-By', 'node')

  response.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'node'
  })
})
server.listen(8080)
