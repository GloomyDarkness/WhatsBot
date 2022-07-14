const { MessageMedia } = require('whatsapp-web.js');

module.exports = {
    config: {
        name: 'alice'
    },
    run: async (client, message) => {

        const media = await MessageMedia.fromUrl('https://i.ytimg.com/vi/WeEW3CSCxo0/maxresdefault.jpg');
        client.sendMessage(message.from, media);


    }
}