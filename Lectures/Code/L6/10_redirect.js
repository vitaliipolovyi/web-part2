'use strict'

const express = require('express')

const app = express()
const { host, port } = require('./config')

app.get('/user/login', function (req, res) {
  res.send('User Login')
})

app.get('/admin', function (req, res) {
  res.redirect('/user/login')
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
