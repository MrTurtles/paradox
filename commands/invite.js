const Discord = require('discord.js');
exports.run = (client, message) => {
  message.delete();
  const embed2 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Give to your friends!', 'https://discord.gg/FwzDcKS')
    //.addField('Without Permissions', 'https://discordapp.com/oauth2/authorize?client_id=304258486466904064&scope=bot');
  message.channel.sendEmbed(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['inv', 'botinvite'],
  permLevel: 1
};

exports.help = {
  name: 'invite',
  rank: 'Member',
  description: '(MEMBER) - Creates link to invite this bot to your server.',
  usage: 'invite'
};
