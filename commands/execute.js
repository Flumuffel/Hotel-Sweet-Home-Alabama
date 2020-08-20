module.exports = {
    name: "execute",
    aliases: [],
    categories: "BOTOWNER",
    description: "Execute a command.",
    usage: "",
    run: (client, message, args, ops, fullCmd) => {
        if (!message.author.id === ops.ownerID) return message.channel.send(`This command can only be used by the Owner!`);

        let w = "```"
        try {
            return message.channel.send(`${w} ${JSON.stringify(eval(fullCmd))} ${w}`);
        } catch (e) {
            return message.channel.send(`An error showed up! Error: ${e}`);
        }

    }
}
