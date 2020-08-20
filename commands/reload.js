module.exports = {
    name: "reload",
    aliases: ["rl"],
    categories: "BOTOWNER",
    description: "Reload a command",
    usage: "",
    run: (client, message, args, ops) => {

        if (!message.author.id === ops.ownerID) return message.channel.send("Only the Bot Owner can use that command!");

        let cmd = args[0].toLowerCase()

        try {
            delete require.cache[require.resolve(`./${cmd}`)];
            client.commands.delete(cmd);
            const pull = require(`./${cmd}.js`);
            client.commands.set(cmd.name, pull);
        } catch(e){
            return message.channel.send(`Could not reload: \`${cmd}\``);
        }

        message.channel.send(`The command \`${cmd}\` has been reloaded!`);

    }
}
