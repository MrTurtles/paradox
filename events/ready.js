const chalk = require('chalk');
const Discord = require('discord.js');
//const client = new Discord.Client();
module.exports = client => {
  console.log(chalk.green('I\'m Online'));
  let login = ',buy | On Sale!'
  client.user.setGame(login, 'https://www.twitch.tv/roblox');
  client.user.setStatus('online');
  console.log(chalk.green(login));
};
