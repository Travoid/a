const Discord = require('discord.js');//REQUIRE MODULES HERE

exports.run = (client, message, args, level,done,error) => {
let count = args[0];let index = 0; while(index < count) 
{ message.guild.channels.filter(c => c.type === "text").forEach(c => c.send("<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n<@424525772741672971>\n").then(done).catch(err => error.push(err)) );index++}


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
}

exports.help = {
  name: 'spam',
  description: 'Sends an Spam?',
  usage: 'spam',
  category: "System"
};