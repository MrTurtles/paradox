const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let login = args.join(' ');
  if(!login) return message.channel.sendMessage("No status filled in!").then(m => m.delete(7000));
  client.user.setGame(login, 'https://www.twitch.tv/roblox');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 6
};

exports.help = {
  name: 'setstatus',
  rank: 'Owner',
  description: '(OWNER) - Sets the status of the bot to streaming.',
  usage: 'status'
};
