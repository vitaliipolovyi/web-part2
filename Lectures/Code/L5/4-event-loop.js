const events = require('events')

const eventEmitter = new events.EventEmitter()

const connectHandler = function connected () {
  console.log('connection succesful.')

  // Fire the data_received event
  eventEmitter.emit('data_received')
}
eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received', function () {
  console.log('data received succesfully.')
})

eventEmitter.emit('connection')
