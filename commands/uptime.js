module.exports = {
    name: "uptime",
    aliases: [],
    categories: "Info",
    description: "Get the uptime of the bot.",
    usage: "",
    run: (client, message, args) => {

        let ms = client.uptime
        let sec = Math.floor((ms / 1000) % 60).toString()
        let min = Math.floor((ms / (1000 * 60)) % 60).toString()
        let hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        let days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()

        return message.channel.send({
            embed: {
                title: "Uptime",
                color: 0x1D82B6,
                description: `**Days: \`${days}\`** | **Hours: \`${hrs}\`** | **Minutes: \`${min}\`** | **Seconds: \`${sec}\`**`,
            }
        })

    }
}