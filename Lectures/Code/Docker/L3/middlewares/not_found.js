'use strict'

/**
 * Generates not found error if no route matched
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {CallableFunction} next 
 */
const notFoundMiddleware = function (req, res, next) {
  const error = new Error('Not found')
  error.status = 404
  next(error)
}

module.exports = notFoundMiddleware
