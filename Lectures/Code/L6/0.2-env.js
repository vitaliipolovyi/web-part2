'use strict'

const express = require('express')
const app = express()

const { host, port } = require('./config')

console.log(process.env)

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
