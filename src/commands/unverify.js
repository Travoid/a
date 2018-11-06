const Discord = require("discord.js")
const rbx = require("roblox-js")
exports.run = (Client, message, args) => {
  let unverifiedRole = message.guild.roles.find(r => r.name === "UnVerified")
  if(message.member.roles.has(unverifiedRole.id)) return message.channel.send("You are not Verified.")
  function makeid() {
    
  }
  const filter = m => m.author.id === message.author.id
  const collector = message.channel.createMessageCollector(filter, { max: "1", time: "200000" })
  const robloxEmbed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(message.author.username, message.author.avatarURL())
.setTitle("Unverify Prompt")
.setDescription("You have Succesfully been deleted from the verify database. \n If you wish to relink run `!verify` again")
.setFooter("This prompt will cancel after 200 seconds. say ***Yes*** to confirm!")
.setTimestamp()
  message.channel.send(robloxEmbed)
  
 collector.on("collect", m => {
   if(m.content === 'yes' || m.content === 'Yes') {
     message.channel.send('**Unlinked**')
     return
   }

              let rolew = message.guild.roles.find(r => r.name === "Verified")
              message.member.roles.remove(rolew)
              message.member.setNickname(null)
 })  
};
exports.conf = {
  guildOnly: false,
  enabled: true,
  aliases: [],
  permLevel: "User"
};


exports.help = {
name: "unverify",
category: "Verification",
description: "unVerifys Discord user with ROBLOX user.",
usage: "unverify <username | id>"
};