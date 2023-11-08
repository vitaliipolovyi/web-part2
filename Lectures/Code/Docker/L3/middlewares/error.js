'use strict'

/**
 * 
 * @param {Error} err 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {CallableFunction} next 
 */
const errorMiddleware = function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  const errorStatus = err.status || 500

  res.status(errorStatus).json({
    status: errorStatus,
    message: err.message,
    trace: req.app.get('env') === 'development' ? err : {}
  })
}

module.exports = errorMiddleware
