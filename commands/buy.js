//const settings = require('../settings.json');
const login = require('./salestatus.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  const embed14 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Sorry! :no_entry:`, `Off Sale rn!`)
  const embed15 = new Discord.RichEmbed()
    .setColor(0x00AB29D4)
    .setTimestamp()
    .addField(`Information about Paradox :wave:`, `Paradox is a LUA ROBLOX Exploit. It is currently $5. The only seller is <@266175513909919745>. Do NOT buy from anyone else, its probaly a scammer. What we accept as payment: PayPal, Steam Cards, iTunes Cards, ROBLOX Cards and 5k ROBUX`)
  const embed16 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Oops :no_entry:`, `Something went wrong!`)
  if (client.user.presence.game.name === `,buy | Off Sale!`) {
      message.author.sendEmbed(embed14);
  } else if (client.user.presence.game.name === `,buy | On Sale!`) {
      message.author.sendEmbed(embed15);
  } else {
    message.author.sendEmbed(embed16);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'buy',
  rank: 'Member', 
  description: '(MEMBER) - Information on how to buy.\n',
  usage: 'buy'
};
