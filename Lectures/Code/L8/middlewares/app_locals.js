'use strict'

const viewStrings = require('./../view-strings')
const viewFns = require('./../view-func')

const appLocalsMiddleware = function (req, res, next) {
  res.locals.$strings = viewStrings
  res.locals.$fn = viewFns
  res.locals.$messages = req.flash()

  next()
}

module.exports = appLocalsMiddleware
