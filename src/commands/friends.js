const bloxy = require("bloxy");
const Discord = require("discord.js")
let array = [];
exports.run = async (client, message, args, level) => {

  const msg = await message.channel.send("Please wait...")
  
  client.bloxy.getIdByUsername(args[0]).then(function(id){
  
  client.bloxy.getFriends({
    userId: id
  }).then(function(friends) {
    
    
    let hi = friends.slice(0, 10) || "empty..."

    //let me make bot.embed real quick okbrb
    const e = new Discord.MessageEmbed() 
    .setTitle(`${args[0]}'s Friends`)
    .addField("Length", friends.length)
    .addField(`Names (${hi.length})`, hi.map(h => h.username))
    msg.edit(e)

    
    
    });
  });
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["friends"],
  permLevel: "User"
}

exports.help = {
  name: 'getFriends',
  description: 'Tells you the Friends of the mentioned user.',
  usage: 'getFriends {user}',
  category: "Roblox"
};