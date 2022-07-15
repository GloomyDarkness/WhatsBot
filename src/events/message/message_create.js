module.exports = async (client, message) => {

    const prefix = '!';
    if (message.isForwarded) return
    if (message.fromMe || !message.body.startsWith(prefix)) return
    if (!message.isGroup) return client.sendMessage(message.from, "Olá, minhas funções funcionam apenas em grupo!")

    const args = message.body.slice(prefix.length).trim().split(/ +/g)
    const cmdName = args.shift()?.toLowerCase();

    const cmdInfo = client.commands.get(cmdName) || client.commands.get(client.aliases.get(cmdName))

    if (cmdInfo) {
        cmdInfo.run(client, message, args)
    }

}