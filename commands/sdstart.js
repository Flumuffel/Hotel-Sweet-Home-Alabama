module.exports = {
    name: "sdstart",
    aliases: [""],
    categories: "Speed dating",
    description: "Speed dating command",
    usage: "",
    run: (client, message, args) => {

        if(client.sdplayer1.length != 0 || client.sdplayer2.length != 0) {
            var role= message.guild.roles.cache.find(role => role.name === "Date in game");

            client.sdplayer1.forEach(user => {
                user.roles.add(role);
            })
            client.sdplayer2.forEach(user => {
                user.roles.add(role);
            })

            message.channel.send({
                embed: {
                    title: "Speed Dating | Start",
                    color: 0xfc0303,
                    description: `Den ausgewählen Usern wurde die rolle **\`Date in game\`** gegeben.`,
                }
            })

            

        } else {

            return message.channel.send({
                embed: {
                    title: "Speed Dating | Start",
                    color: 0xfc0303,
                    description: `Es sind keine Spieler im aktuellen Spiel registriert!`,
                }
            })

        }

    }
}