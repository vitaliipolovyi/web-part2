'use strict'

const express = require('express')

const app = express()
const { host, port } = require('./config')

app.param(['id', 'page'], function (req, res, next, value) {
  console.log('In param', value)
  next()
})

app.get('/user/:id/:page', function (req, res, next) {
  console.log('call 1')
  next()
})

app.get('/user/:id/:page', function (req, res) {
  console.log('call 2')
  res.end()
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
