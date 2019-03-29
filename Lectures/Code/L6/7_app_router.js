'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const { host, port } = require('./config')

app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
// app.use(bodyParser.json()) // for parsing application/x-www-form-urlencoded

app.route('/user')
  .all(function (req, res, next) {
    console.log('Logged request')
    // res.send(`Logged request`)
    next()
  })
  .get(function (req, res) {
    res.send(`Get a user ${req.query.id}`)
  })
  .post(function (req, res) {
    res.send(`Add user ${req.body.id}`)
  })
  .put(function (req, res) {
    res.send(`Update the user ${req.body.id}`)
  })
  .delete(function (req, res) {
    res.send(`Delete the user ${req.body.id}`)
  })

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
