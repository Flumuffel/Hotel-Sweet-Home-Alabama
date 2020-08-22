module.exports = {
    name: "move",
    aliases: ["mv"],
    categories: "BOTOWNER",
    description: "Move a User",
    usage: "",
    run: (client, message, args) => {

        const mem = message.mentions.members.first()
        const vc = args.join(" ")
        const chan = client.channels.find("name", vc)
        mem.setVoiceChannel(chan)

    }
}
