'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const env = process.env

module.exports = {
  host: env.HOST || 'localhost',
  port: env.PORT || 8080,
  dbschema: env.DBSCHEMA,
  dbport: env.DBPORT,
  dbuser: env.DBUSER,
  dbpwd: env.DBPWD,
  dbhost: env.DBHOST,
  dbname: env.DBNAME
}
