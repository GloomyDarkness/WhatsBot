module.exports = async (client, message) => {

    const prefix = '!';
    if (message.fromMe || !message.body.startsWith(prefix)) return;

    

    const args = message.body.slice(prefix.length).trim().split(/ +/g)
    const cmdName = args.shift()?.toLowerCase();

    const cmdInfo = client.commands.get(cmdName) || client.commands.get(client.aliases.get(cmdName))

    if (cmdInfo) {
        cmdInfo.run(client, message, args)
    }

}