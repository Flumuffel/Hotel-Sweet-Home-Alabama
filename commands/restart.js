module.exports = {
    name: "restart",
    aliases: [],
    categories: "BOTOWNER",
    description: "Restart the bot!",
    usage: "",
    run: (client, message, args, ops) => {
        
        if (!message.author.id === ops.ownerID) return message.channel.send("Only the Bot Owner can use that command!");

        process.exit();

    }
}
