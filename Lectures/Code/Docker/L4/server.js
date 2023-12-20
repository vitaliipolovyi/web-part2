'use strict'

const path = require('path')
const express = require('express')
const logger = require('morgan')
const config = require('./config')
const { consume } = require('./amq-consumer')

const app = express()

app.use(logger('dev'))

const { host, port } = config

app.listen(port, host, async() => {
  consume()

  console.log(`Server running at http://${host}:${port}/`)
})
