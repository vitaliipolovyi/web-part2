'use strict'

const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')
const db = require('./db')(config.db)

const notFoundMiddleware = require('./middlewares/not_found')
const errorMiddleware = require('./middlewares/error')

const indexRoutes = require('./routes')
const authRoutes = require('./routes/auth')
// const locationRoutes = require('./routes/location')
const locationTypeRoutes = require('./routes/location-type')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname))

app.use('/', indexRoutes)
app.use('/auth', authRoutes)
// app.use('/product', productRoutes)
// app.use('/location', locationRoutes)
app.use('/location-type', locationTypeRoutes)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const { host, port } = config

app.listen(port, host, async() => {
  console.log(`Server running at http://${host}:${port}/`)
})
