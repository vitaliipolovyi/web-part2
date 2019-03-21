'use strict'

const http = require('http')
const url = require('url')

const host = 'localhost' // 127.0.0.1
const port = 8080
const appUrl = `http://${host}:${port}`

const products = [
  { name: 'apples', price: 10 },
  { name: 'bananas', price: 15 }
]

const routes = {
  '/': () => '<h1>Shop</h1>',
  '/products/all': () => products,
  '/products/get': (req, res, p) => {
    const id = Number(p.get('id'))
    return products[id - 1] || {}
  }
}

const server = http.createServer((request, response) => {
  const parsedUrl = new url.URL(appUrl + request.url)
  const route = routes[parsedUrl.pathname]
  let result = ''
  if (route) {
    const params = parsedUrl.searchParams
    console.log(parsedUrl.searchParams)
    result = route(request, response, params)
  } else {
    response.statusCode = 404
    result = { msg: 'Page Not Found' }
  }

  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(result))
})

server.listen(port, host, () => {
  console.log(`Server running at ${appUrl}`)
})
