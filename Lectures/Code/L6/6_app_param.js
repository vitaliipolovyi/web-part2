'use strict'

const express = require('express')

const app = express()
const { host, port } = require('./config')

app.param('id', function (req, res, next, id) {
  console.log('path', req.url)
  console.log('In param', id)
  next()
})

app.get('/user/:id', function (req, res, next) {
  console.log('call user 1')
  next()
})

app.get('/user/:id', function (req, res) {
  console.log('call user 2')
  res.end()
})

app.get('/post/:id', function (req, res) {
  console.log('call post 2')
  res.end()
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
