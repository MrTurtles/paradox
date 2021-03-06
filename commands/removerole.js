const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  let role2 = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('I cannot find a log channel named: logs').then(m => m.delete(5000));
  if (message.mentions.users.size < 1) return message.reply('You must mention someone.').then(m => m.delete(5000)).catch(console.error);
  if (role2.length < 1) return message.reply('You must supply a role!').then(m => m.delete(5000));
  let role = message.guild.roles.find('name', role2);
  if (!role) return message.reply(`I cannot find a role named: ${role2} (Case Sensitive)`).then(m => m.delete(5000)).catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Give Role')
    .addField('User:', `${user.username}#${user.discriminator}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Role:', role);
  
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').then(m => m.delete(5000)).catch(console.error);

  if (!message.guild.member(user).roles.has(role.id)) {
    message.reply(`This user doesn't have the role **${role2}**`).then(m => m.delete(5000)); 
  } else {
    message.guild.member(user).removeRole(role).then(() => {
      message.reply(`:white_check_mark:`).then(m => m.delete(5000));
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    }); 
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'removerole',
  rank: 'Owner',
  description: '(OWNER) - Removes role to mentioned person.',
  usage: 'removerole [mention] [role]'
};
