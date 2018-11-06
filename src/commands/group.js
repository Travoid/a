const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  var interviews = new Discord.MessageEmbed()
.setTitle(" <:Travoid:506147508075102248> Group.")
.setColor("GREEN")
.setDescription("Here is some Stats about the group.")
.addField("Group Owner", "<@399982462245011456>", true)
.addField('Link', '[Group Link](https://www.roblox.com/My/Groups.aspx?gid=4486304)', true)
.setImage("https://t7.rbxcdn.com/4df7a06329c5fe82a7d006f16b8d514b")
.setFooter("Webisite: http://www.travoid.xyz")
.setTimestamp()
message.channel.send(interviews)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "Group",
  description: "Shows Group Info",
  usage: "group",
  category: "Game Commands"
};