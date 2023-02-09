'use strict'

const fs = require('fs')

fs.readFile('log1.json', function (error, data) {
  if (error) {
    console.error(error)
    // throw error
    return
  }

  console.log('Buffer', data)
  console.log('Parsed', JSON.parse(data))
})

console.log('This is after the read call')
