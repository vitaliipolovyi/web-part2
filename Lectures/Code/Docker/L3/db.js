'use strict'

const mongoose = require('mongoose')

module.exports = async function (config) {
  try {
    const dbUrl = `${config.schema}://${config.user}:${config.pwd}@${config.host}:${config.port}/${config.name}`

    await mongoose.connect(dbUrl, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  
    return mongoose.connection
  } catch(error) {
    console.error(error.message)
  }
}
