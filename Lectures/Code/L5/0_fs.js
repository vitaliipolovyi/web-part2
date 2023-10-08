const fs = require('fs')
const events = require('events')

// console.log(fs.readFile('log.json', function (error, data) {
//   if (error) { throw error }
//   console.log('Parsed', JSON.parse(data))
// }))

// console.log('After...')

const eventEmitter = new events.EventEmitter()

const connectHandler = function connected () {
  console.log('connection succesful.')
  eventEmitter.emit('data_received')
}
eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received', function () {
  console.log('data received succesfully.')
})

eventEmitter.emit('connection')