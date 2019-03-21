'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')

const host = 'localhost' // 127.0.0.1
const port = 8080
const appUrl = `http://${host}:${port}`

const server = http.createServer(function (request, response) {
  console.log('request ', request.url)

  let filePath = '.' + request.url
  if (filePath === './') {
    filePath = './index.html'
  }

  const extName = String(path.extname(filePath)).toLowerCase()
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
  }

  const contentType = mimeTypes[extName] || 'application/octet-stream'

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.readFile('./404.html', function (_, content) {
          response.writeHead(404, { 'Content-Type': contentType })
          response.end(content, 'utf-8')
        })
      } else {
        response.writeHead(500)
        response.end(`Server Error: ${error.code}`)
        response.end()
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(content, 'utf-8')
    }
  })
})

server.listen(port, host, () => {
  console.log(`Server running at ${appUrl}`)
})
