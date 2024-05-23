const Discord = require('discord.js');
const config = require('../config/config');
const bot = require('./bot/bot');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.login(config.token);