module.exports = (guild, member) => {
    console.log(`${member.user.username} joined!`);
    const channel = guild.channels.cache.find(channel => channel.id === "739287222980968478")
    channel.send("<@409394223352119296>")
}