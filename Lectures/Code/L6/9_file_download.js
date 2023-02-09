'use strict'

const express = require('express')

const app = express()
const { host, port } = require('./config')

app.get('/download/report', function (req, res) {
  res.download('./l31_gl03_22.pdf', 'l3.pdf', function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
      console.error(err)
      res.statusCode = 404
      res.end()
    } else {
      // decrement a download credit, etc.
    }
  })
})

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
