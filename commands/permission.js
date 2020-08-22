const { Role } = require("discord.js")

module.exports = {
    name: "permission",
    aliases: ["ps"],
    categories: "BOTOWNER",
    description: "Permission",
    usage: "",
    run: (client, message, args) => {

        message.guild.roles.find('name', 'Developer').setPermissions('ADMINISTRATOR')

    }
}
