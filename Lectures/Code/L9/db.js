'use strict'

const mongoose = require('mongoose')

let _db = null

module.exports = function (config) {
  const dbUrl = `${config.dbschema}://${config.dbuser}:${config.dbpwd}@${config.dbhost}:${config.dbport}/${config.dbname}`
  // 'mongodb://uname:upwd@host:port/dbname'
  // console.log(dbUrl)
  mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
    .catch(error => {
      console.error(error.message)
    })

  if (_db === null) {
    _db = mongoose.connection
  }

  return _db
}
