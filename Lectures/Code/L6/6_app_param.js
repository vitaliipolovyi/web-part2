'use strict'

const express = require('express')

const app = express()
const { host, port } = require('./config')

app.param('id', function (req, res, next, id) {
  console.log('In param', id)
  next()
})

app.get('/user/:id', function (req, res, next) {
  console.log('call 1')
  next()
})

app.get('/user/:id', function (req, res) {
  console.log('call 2')
  res.end()
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
