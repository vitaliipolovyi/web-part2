'use strict'

const http = require('http')
const WebSocket = require('ws')
const crypto = require('crypto')

const host = 'localhost' // 127.0.0.1
const port = 3030

function setupWs() {
  const WS_PORT = 7071
  const wss = new WebSocket.Server({ port: WS_PORT })
  const clients = new Map()
  wss.on('connection', (ws) => {
    console.log(`Connection established on port ${WS_PORT}`)
    const id = crypto.randomUUID()
    const color = Math.floor(Math.random() * 360)
    const metadata = { id, color }
    clients.set(ws, metadata)

    ws.on('message', (messageAsString) => {
      console.log(`WS: Received message ${messageAsString}`)
      const message = JSON.parse(messageAsString)
      const metadata = clients.get(ws)

      message.sender = metadata.id
      message.color = metadata.color

      const outbound = JSON.stringify(message);

      [...clients.keys()].forEach(client => {
        client.send(outbound);
      })
    })

    ws.on('close', () => {
      clients.delete(ws)
    })
  })
}

function countdown(res, count) {
    res.write("data: " + count + "\n\n")
    if (count) {
      setTimeout(() => countdown(res, count - 1), 1000)
    } else {
      res.end()
    }
}

setupWs()

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/event-stream')
    response.setHeader('Access-Control-Allow-Origin', '*')
    // response.end('Hello World\n')
    countdown(response, 10);
})
  
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})
  