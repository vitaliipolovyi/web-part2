const events = require('events');
const eventEmitter = new events.EventEmitter();

const listner1 = function listner1() {
  console.log('listner1 executed.');
};

const listner2 = function listner2() {
  console.log('listner2 executed.');
};

eventEmitter.addListener('connection', listner1);

eventEmitter.on('connection', listner2);

let eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' Listener(s) listening to connection event');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listner1);

eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' Listener(s) listening to connection event');
console.log(eventEmitter.listeners('connection'));
console.log('Program Ended.');
