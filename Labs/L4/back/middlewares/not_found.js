'use strict'

const notFoundMiddleware = function (req, res, next) {
  res.json({ errors: [ { msg: 'Endpoint not found' } ] })
}

module.exports = notFoundMiddleware
