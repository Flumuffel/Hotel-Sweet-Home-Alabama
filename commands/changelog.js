const fetch = require('node-fetch');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    aliases: [],
    categories: "Info",
    description: "Send you the changelog of the bot",
    usage: "",
    run: (client, message, args) => {

        let response = fetch('https://api.github.com/repos/Flumuffel/Hotel-Sweet-Home-Alabama/releases');
        console.log(response);

    }
}
