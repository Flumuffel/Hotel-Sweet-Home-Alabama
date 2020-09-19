module.exports = {
    name: "sdtimer",
    aliases: [""],
    categories: "Speed dating",
    description: "Speed dating command",
    usage: "",
    run: (client, message, args) => {
        message.delete()
        message.channel.send(`<@&756954555027030108> Die 4 min starten jetzt.`)

        setTimeout(function(){ message.channel.send(`<@&756954555027030108> Halbzeit.`) }, 120000);
        setTimeout(function(){ message.channel.send(`<@&756954555027030108> Ende kommt wieder alle hoch.`) }, 120000);
    }
}