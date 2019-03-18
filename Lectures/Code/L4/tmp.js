const content = 'Some Content'
const myHeaders = new Headers()
myHeaders.append('Content-Type', 'text/plain')
myHeaders.append('Content-Length', content.length.toString())
myHeaders.set('X-Custom-Header', 'Custom Value')
myHeaders.get('X-Custom-Header', 'Custom Value')
myHeaders.has('X-Custom-Header')
myHeaders.delete('X-Custom-Header')

const request = new Request(
  'https://api.example.com',
  {
    method: 'POST',
    body: '{"foo": "bar"}'
  }
)

const URL = request.url
const method = request.method

const response = new Response()
