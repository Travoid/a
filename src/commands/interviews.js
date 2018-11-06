const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  var interviews = new Discord.MessageEmbed()
.setTitle(" <:Travoid:506147508075102248> Interviews")
.setColor("0X42F47A+")
.setDescription("Apologises about the Delay. Interviews are now commencing. Head along to the Interview Center for a chance to get a Job!")
.addField("Host", message.author, true)
.addField('Link', '[Interview Center](https://twitter.com/Travoid_)', true)
.setImage("https://t7.rbxcdn.com/4df7a06329c5fe82a7d006f16b8d514b")
.setFooter("Posted by  " + message.author.tag + "  | travoid.xyz")
.setTimestamp()
client.channels.get(`508729723057340436`).send(interviews)



var Mod1 = message.author
    var embed2 = new Discord.MessageEmbed()
        .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
        .setTitle("Interview Log")
        .setColor("GREEN")
        .setDescription("Interview Being hosted by " + message.author.username + "\n Roblox User: " + message.member.nickname +"\n")
        .setFooter("Interview Log")
client.channels.get(`508727510721232915`).send(embed2)

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Travoid HR"
};

exports.help = {
  name: "interviews",
  description: "Interviews at the Interview Centrr!",
  usage: "interview",
  category: "Game Commands"
};