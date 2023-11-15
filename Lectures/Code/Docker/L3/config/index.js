'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const env = process.env

module.exports = {
  host: env.HOST || 'localhost',
  port: env.PORT || 8080,
  db: {
    schema: env.DBSCHEMA,
    port: env.DBPORT,
    user: env.DBUSER,
    pwd: env.DBPWD,
    host: env.DBHOST,
    name: env.DBNAME,  
  },
  jwt: {
    key: env.JWT_TOKEN_KEY,
    issuer: env.JWT_TOKEN_ISSUER,
    expiration: env.JWT_TOKEN_EXPIRATION,
  },
  amq: {
    host: env.RABBITMQ_HOST,
    port: env.RABBITMQ_PORT,
    user: env.RABBITMQ_USERNAME,
    pass: env.RABBITMQ_PASSWORD,
    queues: {
      authEvents: 'authEvents', 
    }
  }
}
