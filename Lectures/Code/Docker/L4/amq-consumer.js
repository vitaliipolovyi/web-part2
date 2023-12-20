const authQueueName = require('./config').amq.queues.authEvents
const { getChannel } = require('./amq-channel')

module.exports = {
    async consume() {
        const channel = await getChannel()
        channel.assertQueue(authQueueName, { durable: false })
        channel.consume("authEvents", msg => {
            const parsedMessage = JSON.parse(msg.content)
            
            console.log(parsedMessage)
            
            channel.ack(msg)
        })
    }
}