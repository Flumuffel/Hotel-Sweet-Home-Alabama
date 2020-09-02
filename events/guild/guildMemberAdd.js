module.exports = (guild, member) => {
    console.log(`${member.user.username} joined! Is bot: ${member.user.bot}`);
    if (member.user.bot) return;
    const channel = guild.channels.cache.find(channel => channel.id === "739287222980968478")
    channel.send(`User <@${member.id}> joined the guild! <@&747392230280527873>`)
}
