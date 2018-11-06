const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  var interviews = new Discord.MessageEmbed()
.setTitle(" <:Travoid:506147508075102248> Shift")
.setColor("0X42F47A+")
.setDescription("Apologises about the Delay. A shift is now commencing. Head along to the Cafe for a chance to get a promotion!")
.addField("Host", message.author, true)
.addField('Link', '[Cafe](https://twitter.com/Travoid_)', true)
.setImage("https://t7.rbxcdn.com/4df7a06329c5fe82a7d006f16b8d514b")
.setFooter("Posted by  " + message.author.tag + "  | travoid.xyz")
.setTimestamp()
client.channels.get(`508729768682979328`).send(interviews)

var Mod1 = message.author
    var embed2 = new Discord.MessageEmbed()
        .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
        .setTitle("Shift Log")
        .setColor("GREEN")
        .setDescription("Shift Being hosted by " + message.author.username + "\n Roblox User: " + message.member.nickname +"\n")
        .setFooter("Shift Log")
client.channels.get(`508729270214983700`).send(embed2)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Travoid HR"
};

exports.help = {
  name: "shift",
  description: "Announces a shift at the Cafe!",
  usage: "interview",
  category: "Game Commands"
};