'use strict'

const http = require('http')

const server = http.createServer((request, response) => {
  let body = []
  request
    .on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', () => {
      body = Buffer.concat(body).toString()
    })
    .on('error', (err) => {
      console.error(err.stack)
    })
})
server.listen(8080)
