module.exports = (guild, member) => {
    console.log(`${member.user.username} joined!`);
    const channel = guild.channels.cache.find(channel => channel.name === "☜💍freischaltung💍☞")
    channel.send("<@409394223352119296>")
}