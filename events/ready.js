const chalk = require('chalk');
const Discord = require('discord.js');
//const client = new Discord.Client();
module.exports = client => {
  console.log(chalk.green('I\'m Online'));
  let login = ',buy | Off Sale!'
  client.user.setGame(login);
  client.user.setStatus('online');
  console.log(chalk.green(login));
};
