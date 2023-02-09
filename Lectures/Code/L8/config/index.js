'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

console.log(process.env)

module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  securedCookies: Boolean(process.env.SECURED_COOKIES)
}
