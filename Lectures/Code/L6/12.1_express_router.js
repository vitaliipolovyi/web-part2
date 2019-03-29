'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const docRoutes = require('./routes/docs')
const { host, port } = require('./config')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', userRoutes)
app.use('/doc', docRoutes)

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
