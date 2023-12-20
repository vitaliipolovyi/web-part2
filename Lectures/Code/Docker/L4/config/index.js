'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const env = process.env

module.exports = {
  host: env.HOST || 'localhost',
  port: env.PORT || 8080,
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
