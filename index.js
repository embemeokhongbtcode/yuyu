const {token} = require("./config.json");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity({ name: 'your activity text', type: 'PLAYING' });
  // You can change 'PLAYING' to 'WATCHING', 'LISTENING', or 'STREAMING' as needed
});

client.login(token);
