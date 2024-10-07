'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const { host, port } = require('./config')

// app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json
app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Got a POST request')
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
