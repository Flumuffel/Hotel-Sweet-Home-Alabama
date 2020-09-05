module.exports = {
    name: "roleinfo",
    aliases: ["rli"],
    categories: "Info",
    description: "Informationen über rollen.",
    usage: "",
    run: (client, message, args) => {

        if(!args[0]) return message.channel.send("Bitte gib ein Rollen name ein oder eine id!")

        let desc = ""
        let role;
        if (isNaN(args[0])) {
            role = message.guild.roles.cache.find(role => role.name === args[0]);
        } else {
            role = message.guild.roles.cache.find(role => role.id === args[0]);
        }

        if (role == undefined) {
            return message.channel.send({
                embed: {
                    title: "RoleInfo",
                    color: 0xa83232,
                    description: `The role ${args[0]} doesn't exist on this server.`
                }
            
            })
        }

        let membersOfRole = role.members;

        membersOfRole.forEach(user => {
            desc += `- ${user.user.username}\n`
        });

        return message.channel.send({
            embed: {
                title: `${role.name}`,
                color: 0x1D82B6,
                fields: [
                {
                    name: `**Member**`,
                    value: `${membersOfRole.size}`,
                    inline: true
                }]
            }
        })

    }
}
