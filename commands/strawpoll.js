const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ball', '8'],
  permLevel: 1
};

exports.help = {
  name: 'strawpoll',
  rank: 'Moderator',
  description: '(Moderator) - Returns messages like Yes, No, etc.',
  usage: 'strawpoll [text]'
};

