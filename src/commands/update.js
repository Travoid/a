const Discord = require("discord.js")
const rbx = require("roblox-js")
exports.run = (Client, message, args) => {
let unverifiedRole = message.guild.roles.find(r => r.name === "UnVerified")
  if(message.member.roles.has(unverifiedRole.id)) return message.channel.send("You are not Verified")

  console.log(message.member.nickname)
  rbx.getIdFromUsername(message.member.nickname).then(foundId => {
    rbx.getRankInGroup(process.env.GROUP_ID, foundId).then(foundRank => {
      console.log(foundRank)
      rbx.getRankNameInGroup(process.env.GROUP_ID, foundId).then(rankName => {
        console.log(rankName)
let rankName2 = message.guild.roles.find(r => r.name === rankName)
 message.member.roles.add(rankName2)
  const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${foundId}&width=420&height=420&format=png`)
.setTitle("Update Roles")
.setDescription("Your roles are up to date!")
.addField("Username:", message.member.nickname)
.addField("User ID:", foundId)
.addField("Group Rank:", rankName)
.setFooter("Updated")
.setTimestamp()
  message.channel.send(embed)
  })
  })
  })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};


exports.help = {
name: "update",
category: "Verification",
description: "updates Discord user with ROBLOX user.",
usage: "update"
};