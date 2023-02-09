'use strict'

const path = require('path')
const express = require('express')

const app = express()
const { host, port } = require('./config')

app.use(express.static(path.join(__dirname, 'public')))

// The name of route parameters must be made up of “word characters” ([A-Za-z0-9_])
app.all('/secret', function (req, res, next) {
  console.log(req.route)
  console.log(req.query.id)
  res.send(req.query)
  next()
})

app.all('/secret/:key/:value', function (req, res, next) {
  res.send(req.params)
  next()
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
