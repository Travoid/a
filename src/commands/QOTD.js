const Discord = require('discord.js');
exports.run = async (client, message, args, ops) => {
    let icon = client.user.avatarURL();
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: !QOTD <question>');
    
    // Create Embed
    const embed = new Discord.MessageEmbed()
        .setThumbnail(icon)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`QOTD Created By ${message.author.username}`);
        
    let msg = await client.channels.get(`508732779643535378`).send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);


var Mod1 = message.author
    var embed2 = new Discord.MessageEmbed()
        .setAuthor(Mod1.tag, Mod1.displayAvatarURL())
        .setTitle("QOTD Log")
        .setColor("GREEN")
        .setDescription("QOTD by " + message.author.username + "\n Roblox User: " + message.member.nickname +"\n")
        .addField("QOTD: ", args.join(' '))
        .setFooter("QOTD Log")
        .setTimestamp()
client.channels.get(`508732940449218581`).send(embed2)

        });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Travoid HR"
}

exports.help = {
  name: 'QOTD',
  description: 'Sends an QOTD??',
  usage: 'QOTD <TEXT>',
  category: "QOTD"
};