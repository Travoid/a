const Discord = require("discord.js")
exports.run = function(client, message, args, permlevel) {
const messages = args[0]
message.channel.bulkDelete(messages);
const purge = new Discord.MessageEmbed()
  .setAuthor(client.user.username,client.user.displayAvatarURL())
  .setThumbnail(client.user.displayAvatarURL())
  .setColor(0X2355CF)
  .setDescription(`${message.author} purged ` + messages + " Messages")
  .addBlankField()
message.channel.send(purge)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prune'],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'purge',
  category: "Moderation",
  description: "Purges Messages",
  usage: 'purge <amount>'
};
