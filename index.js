require('dotenv').config()
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


 ['commands', 'aliases'].forEach(f => client[f] = new Map());
 ['Command', 'Event'].forEach(f => require(`./src/handlers/${f}`)(client));

client.initialize();