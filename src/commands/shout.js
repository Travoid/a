const rbx = require('roblox-js')
const Discord = require('discord.js')

exports.run = async (client, message, [...ShoutMessage], level) => {
    const msg = message;
    var Moderator = msg.author;
    ShoutMessage = ShoutMessage.join(" ");
    rbx.login(process.env.BOT_USER, process.env.BOT_PASSWORD);
    await rbx.login(process.env.BOT_USER, process.env.BOT_PASSWORD);
    if (ShoutMessage) {
      rbx.shout({group: process.env.GROUP_ID, message: ShoutMessage}).then(promise => { 
      MessageEmbed(Moderator, 0X42F47A, 'Sucessfully shouted to the Group!\n\nMessage: `' + ShoutMessage + '`');
      }).catch(e => {
        MessageEmbed(Moderator, 0XFF5151, 'There was an error in shouting the message.');
      });
    } else {
      MessageEmbed(Moderator, 0XFF5151, 'Please provide a shout message.\n\nUsage: `shout <message>`');
    };
  


function MessageEmbed(Mod1, Color, Description) {
    var embed = new Discord.MessageEmbed()
        .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
        .setColor(Color)
        .setDescription(Description);
    msg.channel.send({ embed });

var embed2 = new Discord.MessageEmbed()
.setAuthor(Mod1.tag, Mod1.displayAvatarURL())
.setColor("GREEN")
.setTitle("New Shout!")
.setDescription(Description)
.setFooter("Shout done by " + message.author.username)
client.channels.get(`508727234052358152`).send(embed2)
}
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sgroupwall'],
    permLevel: "Travoid HR"
};

exports.help = {
    name: "shout",
    category: "Roblox",
    description: "Shouts a specific message to the group!",
    usage: "shout <message>"
};