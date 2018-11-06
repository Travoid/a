exports.help = (bot, message, args, level) => {
  if(!args[0]) return message.channel.send("Please provide an assetID.")

  bot.waitmsg(message).then(function(msg) {
    
bot.bloxy.buyAsset(args[0]).then(() => {
    const embed = new bot.embed()
    .setTitle("Bought asset.")
    .setDescription("Asset bought")
    .setColor("GREEN")
    
  });
    
  

  });
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["buyAsset"],
  permLevel: "Bot Owner"
};

exports.help = {
  name: 'buyAsset',
  category: 'Roblox',
  description: 'Buys the mentioned asset.',
  usage: 'buyAsset [ID]'
};
//:(