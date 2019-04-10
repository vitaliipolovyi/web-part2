'use strict'

const errorMiddleware = function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)

  res.render('pages/error')
}

module.exports = errorMiddleware
