module.exports = {
    config: {
        name: 'eu'
    },
    run: async (client, message) => {
        const chat = await message.getChat();
        console.log(chat.isGroup)

        client.sendMessage(message.from, 'oi')
    }
}