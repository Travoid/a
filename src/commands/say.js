const Discord = require("discord.js")
exports.run = (client, message, args, level) => {
console.log("2hy")
const embedsay = args[1]
const sayembed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.displayAvatarURL())
.setDescription(embedsay)
.setFooter("Said by " + message.author.username + " in channel " + message.channel.name);
message.mentions.channels.first().send(sayembed);
console.log("e")
};

exports.conf =  {
   enabled: true,
   guildOnly: true,
  aliases: [],
  permlevel: "Travoid HR"
};

exports.help = {
name: "say",
category: " Fun",
description: "Says an embed message to the channel",
usage: "say <text>"
};