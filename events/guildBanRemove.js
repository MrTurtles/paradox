const Discord = require('discord.js');

module.exports = (guild, user) => {

  guild.defaultChannel.sendEmbed(new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField(`Unban`, `${user.username} was just unbanned!`));
  /*const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Unban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    //.addField('Moderator:', `${guild.client.unbanAuth.username}#${guild.client.unbanAuth.discriminator}`)
    .addField('Reason', guild.client.unbanReason);
  return guild.channels.get(guild.channels.find('name', 'mod-log').id).sendEmbed(embed);*/

};