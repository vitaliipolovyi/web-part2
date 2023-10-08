'use strict'

const http = require('http')

const host = null
const port = 8080

const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain')
  response.end('Hello World\n')
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host || '0.0.0.0'}:${port}/`)
})
