'use strict'

const viewStrings = require('./../view-strings')

const appLocalsMiddleware = function (req, res, next) {
  res.locals = viewStrings
  next()
}

module.exports = appLocalsMiddleware
