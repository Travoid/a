
module.exports = (client, member) => {
const settings = client.settings.get(member.guild.id)
console.log("a")
client.on('guildMemberAdd', (client, member) => {
    member.addRole("UnVerified")
});
}