module.exports = {
    config: {
        name: 'eu'
    },
    run: (client, message) => {
        client.sendMessage(message.from, 'te amo')
    }
}