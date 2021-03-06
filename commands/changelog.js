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
            let config = JSON.parse(body)

            for (i = 0; i < config.length; i++) {
                let field = [{
                    name: `**Description**`,
                    value: `**${config[i].body}**`,
                    inline: false
                }]

                message.channel.send({
                    embed: {
                        title: `**[${config[i].tag_name}] ${config[i].name}**`,
                        color: 0x1D82B6,
                        fields: field
                    }
                })
                if (i == 2) break;
            }


            // {
            //     name: `**Version**`,
            //         value: `**${client.ver}**`,
            //             inline: false
            // },
            // {
            //     name: `**Developer**`,
            //         value: `**<@274209471968837634>**`,
            //             inline: false
            // }

        });

    }
}
