'use strict'

const express = require('express')
const path = require('path')

const app = express()
const { host, port } = require('./config')

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'static')))

app.get('/users/:userId/books/:bookId', function (req, res) {
  console.log(req.params)
  res.send(req.params)
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
