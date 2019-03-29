'use strict'

const express = require('express')
const userRoutes = require('./routes/user')
const docRoutes = require('./routes/docs')
const { host, port } = require('./config')

const app = express()

// simple logger for this router's requests
// all requests to this router will first hit this middleware
app.use(function (req, res, next) {
  console.log('%s %s %s %s', new Date(), req.method, req.url, req.path)
  next()
})

app.use('/user', userRoutes)
app.use('/doc', docRoutes)

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
