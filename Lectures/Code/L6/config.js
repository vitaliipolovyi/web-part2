'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT
}
