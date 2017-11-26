const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  if (message.content.endsWith('on')) {
    let login = `,buy | On Sale!`;
    client.user.setGame(login, 'https://www.twitch.tv/roblox');
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x0013CF0E)
      .addField(`Sale Status :tada:`, 'Sale status set to ON!\nDo ,buy to see information!')
      .setThumbnail(client.user.avatarURL)).then(function(message){
        message.react('🎉');
      });
  } else if (message.content.endsWith('off')) {
    let login = `,buy | Off Sale!`;
    client.user.setGame(login, 'https://www.twitch.tv/roblox');
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00E90B0B)
      .addField(`Sale Status :cry:`, 'Sale status set to OFF!')
      .setThumbnail(client.user.avatarURL)).then(function(message){
        message.react('😢');
      });
  } else {
    message.reply(`Please use 'on' or 'off'!`).then(m => m.delete(7000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'salestatus',
  rank: 'Owner',
  description: '(OWNER) - Sale status command. Turns playing game to onsale!\n',
  usage: 'salestatus [on/off]'
};
