module.exports = {
    name: "vote",
    aliases: [],
    categories: "BOTOWNER",
    description: "Um walen zu beeinflussen.",
    usage: "",
    run: (client, message, args, ops) => {
        if (!message.author.id === ops.ownerID) return message.channel.send(`This command can only be used by the Owner!`);
        message.delete();
        try {
            message.channel.messages.fetch(args[0]).then(message => message.react(`${args[1]}`));
        } catch(e) {
            console.log(e)
        }

    }
}