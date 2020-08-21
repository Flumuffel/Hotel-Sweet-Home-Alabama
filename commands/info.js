var request = require('request');
var version;

var options = {
    url: 'https://api.github.com/repos/Flumuffel/Hotel-Sweet-Home-Alabama/releases',
    headers: {
        'User-Agent': 'request'
    }
}
request(options, function (error, response, body) {
    let config = JSON.parse(body)
    version = config[0].tag_name;
});

module.exports = {
    name: "info",
    aliases: ["owner"],
    categories: "Info",
    description: "Get some informations of the bot.",
    usage: "",
    run: (client, message, args) => {

        return message.channel.send({
            embed: {
                title: "Info",
                color: 0x1D82B6,
                fields: [{
                    name: `**Version**`,
                    value: `**${version}**`,
                    inline: false
                },
                {
                    name: `**Developer**`,
                    value: `**<@274209471968837634>**`,
                    inline: false
                }]
            }
        })

    }
}