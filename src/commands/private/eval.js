module.exports = {
    config: {
        name: 'eval',
        aliases: ['e']
    },
    run: (client, message, args) => {

        args = message.body.slice('!').trim().split(/ +/g); args.shift()
        const argss = args.join(' ');
        const { inspect } = require("util");

        if (message.body.split(" ").length !== 0) {
            try {
                result = inspect(eval(argss), { depth: 0 })
            } catch (e) {
                result = "Ocorreu um erro ao avaliar " + e
            }

            message.reply(result)
        }
    }
}