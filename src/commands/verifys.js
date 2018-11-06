const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  var embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username,client.user.displayAvatarURL())
  .setThumbnail(client.user.displayAvatarURL())
  .setColor(0X2355CF)
.setTitle("HOW TO VERIFY")
  .setDescription('Just run `!verify` and follow the steps.');
  await message.channel.send({ embed }) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "verifys",
  description: "Shuts down the bot, then starts again.",
  usage: "reboot",
  category: "Bot Developers"
};