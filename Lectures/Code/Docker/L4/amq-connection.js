const amqplib = require('amqplib')
const amqConfig = require('./config').amq

module.exports = async() => {
    return amqplib.connect(`amqp://${amqConfig.user}:${amqConfig.pass}@${amqConfig.host}`) // :${amqConfig.port}
}