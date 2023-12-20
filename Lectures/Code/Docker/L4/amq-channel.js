const amqConnector = require('./amq-connection')

let amqConn = null

async function connector() {
    if (amqConn === null) {
        amqConn = await amqConnector()
    }

    return amqConn
}

module.exports = {
    async getChannel() {
        const amqConnector = await connector()
    
        return amqConnector.createChannel()    
    }
}
