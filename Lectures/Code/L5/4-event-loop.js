const events = require('events')
const sleep = require('system-sleep')

const eventEmitter = new events.EventEmitter()

const connectHandler = function connected () {
  console.log('connection successful.')

  sleep(3000)

  // Fire the data_received event
  eventEmitter.emit('data_received')
}
eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received', function () {
  console.log('data received successfully.')
})

eventEmitter.emit('connection')
