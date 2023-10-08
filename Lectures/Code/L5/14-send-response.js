'use strict'

const http = require('http')

const server = http.createServer((request, response) => {
  response.write('<html>')
  response.write('<body>')
  response.write('<h1>Hello, World!</h1>')
  response.write('</body>')
  response.write('</html>')
  response.end()

  //response.end('<html><body><h1>Hello, World!</h1></body></html>')
})
server.listen(8080)
