'use strict'

const express = require('express')
const app = express()
const { host, port } = require('./config')

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('Got a POST request'))
app.put('/user', (req, res) => res.send('Got a PUT request at /user'))
app.patch('/user', (req, res) => res.send('Got a PATCH request at /user'))
app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'))
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
