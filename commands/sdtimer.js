module.exports = {
    name: "sdtimer",
    aliases: [""],
    categories: "Speed dating",
    description: "Speed dating command",
    usage: "",
    run: (client, message, args) => {
        message.delete()
        message.channel.send(`<@&751510273268908204> Die 4 min starten jetzt.`)

        setTimeout(function(){ message.channel.send(`<@&751510273268908204> Halbzeit.`) }, 120000);
        setTimeout(function(){ message.channel.send(`<@&751510273268908204> Ende kommt wieder alle hoch.`) }, 240000);
    }
}