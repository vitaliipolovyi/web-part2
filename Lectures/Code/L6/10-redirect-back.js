'use strict'

const express = require('express')

const app = express()
const { host, port } = require('./config')

app.get('/', function (req, res) {
  res.send('Home')
})

app.get('/user/login', function (req, res) {
  res.send('User Login')
})

// A path value of “back” has a special meaning, it refers to the URL specified in the Referer header of the request.
// If the Referer header was not specified, it refers to “/”.
app.get('/goingbackwards', function (req, res) {
  res.redirect('back')
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
