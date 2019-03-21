'use strict'

const fs = require('fs')

fs.readFile('log.json', function (error, data) {
  if (error) {
    throw error
  }

  console.log('Buffer', data)
  console.log('Parsed', JSON.parse(data))
})

console.log('This is after the read call')
