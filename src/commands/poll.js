const Discord = require('discord.js');
exports.run = async (client, message, args, ops) => {
    let icon = client.user.avatarURL();
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: !poll <question>');
    
    // Create Embed
    const embed = new Discord.MessageEmbed()
        .setThumbnail(icon)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);
        
    let msg = await client.channels.get(`506963446340911107`).send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Travoid HR"
}

exports.help = {
  name: 'poll',
  description: 'Sends an Poll??',
  usage: 'poll <TEXT>',
  category: "System"
};