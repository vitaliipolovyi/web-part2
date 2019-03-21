'use strict'

const http = require('http')

const host = 'localhost' // 127.0.0.1
const port = 8080

const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain')
  response.end('Hello World\n')
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
