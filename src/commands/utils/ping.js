module.exports = {
    config: {
        name: 'ping',
        aliases: ['p'],
        description: 'testando'

    },
    run: async (client, message) => {
        message.reply('testando!')
    }
}