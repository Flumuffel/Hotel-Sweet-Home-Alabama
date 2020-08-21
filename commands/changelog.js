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

        request(options , function (error, response, body) {
            if( error == "null") {
                message.channel.send(body.json());
            } else {
                console.log(error)
                return message.channel.send({
                    embed: {
                        title: "Error",
                        color: 0xfc0303,
                        fields: [{
                            name: `**Error**`,
                            value: `**${error}**`,
                            inline: false
                        },
                        {
                            name: `**statusCode**`,
                            value: `**${response && response.statusCode}**`,
                            inline: false
                        }]
                    }
                })
            }
        });

    }
}
