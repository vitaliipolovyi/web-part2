'use strict'

const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

const appLocalsStringsMiddleware = require('./middlewares/app_locals')
const notFoundMiddleware = require('./middlewares/not_found')
const errorMiddleware = require('./middlewares/error')

const indexRoutes = require('./routes')
const productRoutes = require('./routes/product')
const locationRoutes = require('./routes/location')
const locationTypeRoutes = require('./routes/location_type')

const { host, port, securedCookies } = require('./config')

const app = express()
console.log('SC:', securedCookies)
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: securedCookies }
}))
app.use(flash())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(__dirname))

app.use(appLocalsStringsMiddleware)

app.use('/', indexRoutes)
app.use('/product', productRoutes)
app.use('/location', locationRoutes)
app.use('/location-type', locationTypeRoutes)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
