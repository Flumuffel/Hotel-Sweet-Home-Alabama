module.exports = (guild, member) => {
    console.log(`${member.user.username} joined!`);
    guild.channels.cache.find('739287222980968478').send("<@409394223352119296>")
}