const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
    if(message.author.id !== settings.ownerid) return;
    const code = args.join(" ");
    try {
      const evaled = client.clean(await eval(code));
      if(message.flags.includes("d")) message.delete();
      if(message.flags.includes("s")) return;
      message.channel.send(`\`\`\`xl\n${evaled}\n\`\`\``
      );
    }
    catch(err) {
      if(message.flags[0] && message.flags[0] === 's')
        return message.delete();
      message.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
   }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 6
};

exports.help = {
  name: 'eval',
  rank: 'Creator',
  description: '(Creator) - Just not ur business',
  usage: 'eval [...code]'
};
