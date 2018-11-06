const rbx = require('roblox-js')
const Discord = require('discord.js')

exports.run = async (client, message, [Username, ...Rank], level) => {
    const msg = message;
    var Moderator = msg.author;
    Rank = Rank.join(" ");
    rbx.login({username: process.env.BOT_USER, password: process.env.BOT_PASSWORD});
    await rbx.login({username: process.env.BOT_USER, password: process.env.BOT_PASSWORD});


    if (Username) {
      const userid = await rbx.getIdFromUsername(Username);
        if (Rank) {
            rbx.getIdFromUsername(Username.toLowerCase()).then(id => {
                if (userid) {
                    rbx.getRankNameInGroup(process.env.GROUP_ID, id).then(rankBefore1 => {
                      const rankBefore = rankBefore1;
                    });
                    rbx.setRank({ group: process.env.GROUP_ID, target: id, name: 'Hotel Guest' }).then(() => {
                        rbx.follow({userId: id}).catch(e=> {msg.reply(e)}); 
                        rbx.message({ recipient: id, subject: 'Nova Hotels', body: 'You have been ranked in Nova Hotels by ' + msg.member.displayName + ' to ' + Rank + '.\nIf you believe this is an error, feel free to contact an SHR about this.' }).then(() => {
                        rbx.getRankNameInGroup(process.env.GROUP_ID, id).then(rankBefore1 => {
                            var rankBefore = rankBefore1;
                        });
                        var embed = new Discord.RichEmbed()
                        .setDescription('User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To: `' + Rank + '`\nAccount ranked with: `Grummyv2' + '`')
                        .setTitle(Moderator.tag)
                        msg.channel.send({ embed });
                        }).catch(e => {
                            var embed = new Discord.RichEmbed()
                            .setColor('RANDOM')
        .setDescription(`Successfully fired ${Username}`)
        .setTimestamp()
        .setFooter(`Roblox ID: ${userid}`)
        .setTitle(Moderator.tag)
        msg.channel.send({ embed });
                        });
                    }).catch(e => {
                        message.channel.send(`Please make sure the user is able to change the mentioned users rank, that the user is in the group, or the rank is spelled exactly!`)
                    });
                } else {
                    var embed = new Discord.RichEmbed()
        .setDescription('Invalid Arguments Provided.\n\nUsage: `fire <ROBLOX user/id> <reason>`')
        .setTitle('Moderator')
        msg.channel.send({ embed });
                };
            }).catch(e => message.channel.send(`Error grabbing user id ${e}`));
        } else {
            var embed = new Discord.RichEmbed()
            .setDescription('Invalid Arguments Provided.\n\nUsage: `fire <ROBLOX user/id> <reason>`')
            .setTitle(Moderator.tag)
            msg.channel.send({ embed });
            return;
        }
    } else {
        var embed = new Discord.RichEmbed()
        .setDescription('Invalid Arguments Provided.\n\nUsage: `fire <ROBLOX user/id> <reason>`')
        .setTitle(Moderator.tag)
        msg.channel.send({ embed });
        return;
    };
    let logs = message.guild.channels.find('name', 'ranking-logs');
    var Mod1 = message.author;
        var embed = new Discord.RichEmbed()
            .setAuthor(Mod1.tag)
            .setColor('RANDOM')
            .setDescription('User has been ranked through Discord.\n\nModerator: `' + Moderator.tag + '`\nROBLOX User: `' + Username + '`\nRanked To:`' + 'Hotel Guest' + '`\nReason:`' + Rank + '`')
        logs.send({ embed });

    
};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "HR"
};

exports.help = {
    name: "fire",
    description: "Sets the rank of the specified ROBLOX user to Hotel Guest.",
    usage: "fire <ROBLOX user/id> <reason",
  category: "roblox"
};