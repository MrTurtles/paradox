const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  const embed614 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error! :no_entry:`, `Missing description of the problem!`)
  let problem = args.join(' ');
  if (!problem) return message.channel.sendEmbed(embed614).then(m => m.delete(10000));
  const embed66 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error! :no_entry:`, `This command does not work in Direct Messages!`)
  const embed612 = new Discord.RichEmbed()
    .setColor(0x00F1950B)
    .setTimestamp()
    .addField(`Reported! :mailbox:`, `Ill be in-touch soon!`)
  const embed613 = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField(`Someone needs help! :no_good: `, `${message.author}`)
    .addField(`User#1234: `, `${message.author.username}#${message.author.discriminator}`)
    .addField(`Channel Name: `, `${message.channel.name}`)
    .addField(`Problem/Discription: `, `${problem}`)
    .setThumbnail(client.user.avatarURL);
  if (message.channel.type == 'dm') return message.channel.sendEmbed(embed66).then(m => m.delete(10000));
  if (message.channel.type == 'group') return message.channel.sendEmbed(embed66).then(m => m.delete(10000));
  message.author.sendEmbed(embed612);
  client.guilds.get('339835470135558156').channels.get('343357816003756033').sendEmbed(embed613);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'helpme',
  rank: 'Member',
  description: '(MEMBER) - Helpme is a command for Paradox, this is so we can have better overview of the problems.\n**If you do this make sure you include a good explaination WITH a screenshot!**\n',
  usage: 'helpme'
};
