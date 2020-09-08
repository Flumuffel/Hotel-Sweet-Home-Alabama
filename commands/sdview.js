module.exports = {
    name: "sdview",
    aliases: [""],
    categories: "Speed dating",
    description: "Speed dating command",
    usage: "",
    run: (client, message, args) => {

        let desc = ""

        client.sdplayer1.forEach(user => {
            desc += `- ${user.user.username}\n`
        })

        console.log(desc)
        message.channel.send({
            embed: {
                title: "Speed Dating | Team 1",
                color: 0x1D82B6,
                description: desc
            }
        })
        desc = ""

        client.sdplayer2.forEach(user => {
            desc += `- ${user.user.username}\n`
        })

        console.log(desc)
        message.channel.send({
            embed: {
                title: "Speed Dating | Team 2",
                color: 0x1D82B6,
                description: desc
            }
        })

    }
}