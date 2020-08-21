var request = require('request');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    aliases: [],
    categories: "Info",
    description: "Send you the changelog of the bot",
    usage: "",
    run: (client, message, args) => {

        var options = {
            url: 'https://api.github.com/repos/Flumuffel/Hotel-Sweet-Home-Alabama/releases',
            headers: {
                'User-Agent': 'request'
            }
        }

        request(options, function (error, response, body) {
            message.channel.send(JSON.parse(body)[0]);
        });

    }
}
