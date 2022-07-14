const { MessageMedia } = require('whatsapp-web.js');
const YTclient = require('youtube-finder-sync')
const Client = new YTclient({ key: process.env.KEY })

module.exports = {
    config: {
        name: 'procurar',
        aliases: ['search', 'find', 'music', 'musica']
    },
    run: async (client, message, args) => {

        if (!args.join(' ')) return message.reply("Olá, insira algum título de vídeo para pesquisar!")

        var params = {
            part: 'snippet',
            q: args.join(' '),
            maxResults: 5
        }

        const data = await Client.search(params)

        const media = await MessageMedia.fromUrl(data.items[0].snippet.thumbnails.high.url)
        message.reply(media, null, { caption: `✅ Resultado encontrado!\n\n*Título:* ${data.items[0].snippet.title}\n\n*Descrição:* ${data.items[0].snippet.description}\n\n*Link:* https://www.youtube.com/watch?v=${data.items[0].id.videoId} \n\n*Canal:* ${data.items[0].snippet.channelTitle} ` })

        console.log(data.items[0].snippet)

    }
}

