const { Role } = require("discord.js")

module.exports = {
    name: "permission",
    aliases: ["ps"],
    categories: "BOTOWNER",
    description: "Permission",
    usage: "",
    run: (client, message, args) => {

        message.guild.roles.cache.find(guild => guild.name === 'Developer').setPermissions('ADMINISTRATOR')

    }
}
