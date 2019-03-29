'use strict'

const express = require('express')
const userRoutes = require('./routes/user')
const docRoutes = require('./routes/docs')
const { host, port } = require('./config')

const app = express()

const loggerRouter = express.Router()
loggerRouter.use(function (req, res, next) {
  console.log('Logged request')
  next()
})
app.use(loggerRouter)
app.use('/user', userRoutes)
app.use('/doc', docRoutes)

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
