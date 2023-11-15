'use strict'

const mongoose = require('mongoose')

module.exports = async function (config) {
  try {
    const dbUrl = `${config.dbschema}://${config.dbuser}:${config.dbpwd}@${config.dbhost}:${config.dbport}/${config.dbname}`

    await mongoose.connect(dbUrl, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  
    return mongoose.connection
  } catch(error) {
    console.error(error.message)
  }
}
