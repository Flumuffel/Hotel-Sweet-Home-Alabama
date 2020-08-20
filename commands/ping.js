module.exports = {
    name: "ping",
    aliases: ["pp"],
    categories: "Info",
    description: "Get the current ping of the bot",
    usage: "",
    run: (client, message, args) => {

        message.channel.send(`Pinging...`)
            .then((msg) => {
                setTimeout(function () {
                    msg.edit(`**Pong!**\nLatency is \`${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\`\nAPI Latency is \`${Math.round(client.ws.ping)}ms\``);
                }, 1000)
            })

    }
}
