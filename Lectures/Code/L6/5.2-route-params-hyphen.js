'use strict'

const express = require('express')
const app = express()
const { host, port } = require('./config')

// http://localhost:8080/reports/turnover/20190101-20191031
app.get('/reports/turnover/:from-:to', function (req, res) {
  console.log(req.params)
  res.send(req.params)
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
