const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  var interviews = new Discord.MessageEmbed()
.setTitle(" <:Travoid:506147508075102248> Trainings")
.setColor("0X42F47A+")
.setDescription("Apologises about the Delay. A Training session is now commencing. Head along to the Training Center for a chance to get a promotion!")
.addField("Host", message.author, true)
.addField('Link', '[Training Center](https://twitter.com/Travoid_)', true)
.setImage("https://t7.rbxcdn.com/4df7a06329c5fe82a7d006f16b8d514b")
.setFooter("Posted by  " + message.author.tag + "  | travoid.xyz")
.setTimestamp()
message.channel.send("Training announced!")
client.channels.get(`508729924128079872`).send()

var Mod1 = message.author
    var embed2 = new Discord.MessageEmbed()
        .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
        .setTitle("Training Log")
        .setColor("GREEN")
        .setDescription("Training Being hosted by " + message.author.username + "\n Roblox User: " + message.member.nickname +"\n")
        .setFooter("Training Log")
client.channels.get(`508727510721232915`).send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Travoid HR"
};

exports.help = {
  name: "training",
  description: "Announces a training at the Training center!",
  usage: "training",
  category: "Game Commands"
};