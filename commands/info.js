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
                    value: `**${client.ver}**`,
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