'use strict'

const express = require('express')
const logger = require('morgan')
const app = express()
const { host, port } = require('./config')

app.use(logger('dev'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})
